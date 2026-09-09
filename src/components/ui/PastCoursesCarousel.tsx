import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface CarouselImage {
  src: string;
  caption?: string;
}

interface PastCoursesCarouselProps {
  images: (string | CarouselImage)[];
}

export default function PastCoursesCarousel({
  images,
}: PastCoursesCarouselProps) {
  return (
    <Carousel
      className="relative mx-auto w-full max-w-4xl"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((image, index) => {
          const src = typeof image === "string" ? image : image.src;
          const caption = typeof image === "string" ? undefined : image.caption;

          return (
            <CarouselItem key={index}>
              <div className="relative w-full">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <div className="relative aspect-[4/3] w-full md:aspect-[3/2]">
                    <img
                      src={src}
                      alt={caption || `Slide ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                {caption && (
                  <p className="mt-3 text-center text-sm text-white">
                    {caption}
                  </p>
                )}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 md:px-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            const prevBtn =
              e.currentTarget.parentElement?.parentElement?.querySelector(
                '[data-slot="carousel-previous"]',
              ) as HTMLButtonElement;
            prevBtn?.click();
          }}
          className="pointer-events-auto z-20 flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70 md:h-10 md:w-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:h-6 md:w-6"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            const nextBtn =
              e.currentTarget.parentElement?.parentElement?.querySelector(
                '[data-slot="carousel-next"]',
              ) as HTMLButtonElement;
            nextBtn?.click();
          }}
          className="pointer-events-auto z-20 flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70 md:h-10 md:w-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:h-6 md:w-6"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}
