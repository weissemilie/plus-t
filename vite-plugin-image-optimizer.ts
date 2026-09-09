import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { Plugin, ResolvedConfig } from "vite";

export type ImageOptimizerOptions = {
  /**
   * Longest edge (in pixels) an image is allowed to keep. Larger images are
   * scaled down, smaller ones are left at their original size.
   */
  maxSize?: number;
  /** Quality used when re-encoding JPEG images. */
  jpegQuality?: number;
  /** Quality used when re-encoding PNG images. */
  pngQuality?: number;
  /** Quality used when re-encoding WebP images. */
  webpQuality?: number;
  /** Where optimized output is memoized between builds. */
  cacheDir?: string;
  /** How many images to process at the same time. */
  concurrency?: number;
};

type Defaults = Required<ImageOptimizerOptions>;

const defaults: Omit<Defaults, "cacheDir"> = {
  maxSize: 2000,
  jpegQuality: 78,
  pngQuality: 80,
  webpQuality: 80,
  concurrency: 4,
};

const extensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

type Result = {
  file: string;
  before: number;
  after: number;
  cached: boolean;
};

/**
 * Compresses and resizes every raster image that ends up in the build output —
 * both the files Vite bundles from `src/` and the ones copied verbatim from
 * `public/`. Files keep their name and format, so nothing that references them
 * has to change.
 */
export function imageOptimizer(options: ImageOptimizerOptions = {}): Plugin {
  let config: ResolvedConfig;
  let settings: Defaults;
  let done = false;

  return {
    name: "image-optimizer",
    apply: "build",

    configResolved(resolved) {
      config = resolved;
      settings = {
        ...defaults,
        cacheDir: path.resolve(
          resolved.root,
          "node_modules/.cache/image-optimizer",
        ),
        ...options,
      };
    },

    buildStart() {
      done = false;
    },

    // The public directory is copied into outDir before the bundle is written,
    // so by now every image of the build is on disk.
    async closeBundle() {
      if (done || !config.build.write) return;
      done = true;

      const outDir = path.resolve(config.root, config.build.outDir);
      const files = (await collect(outDir)).filter((file) =>
        extensions.has(path.extname(file).toLowerCase()),
      );
      if (files.length === 0) return;

      await fs.mkdir(settings.cacheDir, { recursive: true });

      const results: Result[] = [];
      const failures: string[] = [];
      const queue = [...files];

      const worker = async () => {
        for (let file = queue.shift(); file; file = queue.shift()) {
          try {
            results.push(await optimize(file, settings));
          } catch (error) {
            failures.push(
              `${path.relative(outDir, file)}: ${(error as Error).message}`,
            );
          }
        }
      };

      await Promise.all(
        Array.from(
          { length: Math.min(settings.concurrency, queue.length) },
          worker,
        ),
      );

      report(config, outDir, results, failures);
    },
  };
}

async function collect(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? collect(full) : [full];
    }),
  );
  return files.flat();
}

async function optimize(file: string, settings: Defaults): Promise<Result> {
  const original = await fs.readFile(file);
  const extension = path.extname(file).toLowerCase();
  const cached = path.join(
    settings.cacheDir,
    `${cacheKey(original, extension, settings)}${extension}`,
  );

  const hit = await fs.readFile(cached).catch(() => null);
  if (hit) {
    await fs.writeFile(file, hit);
    return { file, before: original.length, after: hit.length, cached: true };
  }

  const optimized = await encode(original, extension, settings);
  // Re-encoding is not guaranteed to win — an already optimized image can come
  // out bigger, in which case the original is what we keep.
  const output = optimized.length < original.length ? optimized : original;

  await fs.writeFile(cached, output);
  await fs.writeFile(file, output);
  return { file, before: original.length, after: output.length, cached: false };
}

async function encode(
  input: Buffer,
  extension: string,
  settings: Defaults,
): Promise<Buffer> {
  const animated = extension === ".webp";
  const pipeline = sharp(input, { animated });

  // JPEGs carry their orientation in EXIF, which is dropped along with the rest
  // of the metadata — bake the rotation into the pixels first.
  if (!animated) pipeline.rotate();

  pipeline.resize({
    width: settings.maxSize,
    height: settings.maxSize,
    fit: "inside",
    withoutEnlargement: true,
  });

  switch (extension) {
    case ".png":
      return pipeline
        .png({ quality: settings.pngQuality, compressionLevel: 9, effort: 8 })
        .toBuffer();
    case ".webp":
      return pipeline
        .webp({ quality: settings.webpQuality, effort: 5 })
        .toBuffer();
    default:
      return pipeline
        .jpeg({
          quality: settings.jpegQuality,
          mozjpeg: true,
          progressive: true,
        })
        .toBuffer();
  }
}

function cacheKey(
  input: Buffer,
  extension: string,
  settings: Defaults,
): string {
  return createHash("sha256")
    .update(input)
    .update(extension)
    .update(sharp.versions.vips)
    .update(
      JSON.stringify([
        settings.maxSize,
        settings.jpegQuality,
        settings.pngQuality,
        settings.webpQuality,
      ]),
    )
    .digest("hex")
    .slice(0, 32);
}

function report(
  config: ResolvedConfig,
  outDir: string,
  results: Result[],
  failures: string[],
): void {
  const before = results.reduce((total, result) => total + result.before, 0);
  const after = results.reduce((total, result) => total + result.after, 0);

  for (const result of results.sort((a, b) => b.before - a.before)) {
    const name = path.relative(outDir, result.file);
    config.logger.info(
      `  ${name} ${size(result.before)} -> ${size(result.after)}` +
        `${result.cached ? " (cached)" : ""}`,
    );
  }

  config.logger.info(
    `images optimized: ${results.length} files, ` +
      `${size(before)} -> ${size(after)} (${percent(before, after)} smaller)`,
  );

  for (const failure of failures) {
    config.logger.warn(`image optimization failed for ${failure}`);
  }
}

function size(bytes: number): string {
  return bytes >= 1_000_000
    ? `${(bytes / 1_000_000).toFixed(2)} MB`
    : `${(bytes / 1_000).toFixed(2)} kB`;
}

function percent(before: number, after: number): string {
  if (before === 0) return "0%";
  return `${(((before - after) / before) * 100).toFixed(1)}%`;
}
