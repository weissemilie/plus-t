import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const DEFAULT_DESCRIPTION =
  "PLUS T er et seniorspejderkursus i Det Danske Spejderkorps for spejdere mellem 16 og 23 år. En uge i efterårsferien fyldt med adventurespejd, udfordringer og fællesskab.";
const SITE_URL = "https://plust.dk";
const DEFAULT_IMAGE = `${SITE_URL}/homepage/plus_carousel8.jpg`;

//Layout for hele app, her kan ligges menu, footer osv.
function RootLayout() {
  // Once React has mounted and HeadContent is managing <head>, drop the static
  // data-default fallback tags from index.html so they don't duplicate/shadow
  // the dynamic per-route title/meta tags rendered by the router.
  useEffect(() => {
    document.querySelectorAll("[data-default]").forEach((el) => el.remove());
  }, []);

  return (
    <div className="bg-brand-black flex min-h-screen w-full flex-col text-white">
      <HeadContent />
      <Navigation />

      <main className="flex w-full flex-1 flex-col py-0 md:py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "Plus T" },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Plus T" },
      { property: "og:title", content: "Plus T" },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: DEFAULT_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Plus T" },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: DEFAULT_IMAGE },
    ],
  }),
  component: RootLayout,
});
