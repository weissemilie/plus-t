import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel8.jpg"
            alt="PLUS T-deltagere i redningsveste bygger og skubber en hjemmelavet tømmerflåde gennem vandet i den tågede morgen"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel2.jpg"
            alt="PLUS T-deltager klatrer med hjelm og klatregrej op ad et træ i skoven"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel3.jpg"
            alt="Spejdere i redningsveste i vandet ved solnedgang under en af PLUS T's vandaktiviteter"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel4.jpg"
            alt="To PLUS T-deltagere med pandelamper udforsker en mørk grotte"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel5.jpg"
            alt="Deltagere vader i land fra en redningsbåd med oppakning under PLUS T"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel6.jpg"
            alt="PLUS T-deltager kravler gennem en trang klippehule med lommelygte"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel7.jpg"
            alt="Patrulje går ad landevejen med jutesække på ryggen i efterårslandskabet under PLUS T"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel1.jpg"
            alt="Luftfoto af PLUS T's lejrplads med orange telte og patruljer, der arbejder ved poster i solopgangen"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[90vh]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
