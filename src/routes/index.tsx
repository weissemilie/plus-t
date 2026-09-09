import { createFileRoute } from "@tanstack/react-router";
import ImageCarousel from "../components/ui/ImageCarousel";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <ImageCarousel />
        {/* Desktop tekstboks - skjult på mobil */}
        <div className="from-brand-black to-brand-black/70 absolute top-0 right-20 z-20 hidden max-w-2xl rounded-b-lg bg-gradient-to-b p-8 text-white md:block">
          <h2 className="text-2xl md:text-[42px]">ALT ANDET END HVERDAG!</h2>
          <p>
            Er du klar til en uge fyldt med vilde udfordringer, nye venskaber og
            oplevelser, du aldrig glemmer? Så tag på PLUS T, seniorkurset hvor
            vi skruer vi op for eventyret og udfordringen.
          </p>
          <p>
            Det bliver intenst. Det bliver krævende. Det bliver årets vildeste
            efterårsferie! Er du klar?
          </p>
        </div>
      </div>

      {/* Mobil tekstboks - kun synlig på mobil */}
      <div className="w-full p-6 text-white md:hidden">
        <h2>ALT ANDET END HVERDAG!</h2>
        <p>
          Er du klar til en uge fyldt med vilde udfordringer, nye venskaber og
          oplevelser, du aldrig glemmer? Så tag på PLUS T, seniorkurset hvor vi
          skruer vi op for eventyret og udfordringen.
        </p>
        <p>
          Det bliver intenst. Det bliver krævende. Det bliver årets vildeste
          efterårsferie! Er du klar?
        </p>
      </div>
    </div>
  ),
});
