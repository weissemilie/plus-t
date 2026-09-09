import { createFileRoute } from "@tanstack/react-router";
import ImageCarousel from "../components/ui/ImageCarousel";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://medlem.dds.dk/event/id/69596/register";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plus T – Seniorspejderkursus i DDS" },
      {
        name: "description",
        content:
          "Er du klar til en uge fyldt med vilde udfordringer, nye venskaber og oplevelser, du aldrig glemmer? Tag på PLUS T, seniorkurset i Det Danske Spejderkorps.",
      },
    ],
  }),
  component: () => (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <ImageCarousel />
        {/* Desktop tekstboks - skjult på mobil */}
        <div className="from-brand-black to-brand-black/70 absolute top-0 right-20 z-20 hidden max-w-2xl rounded-b-lg bg-gradient-to-b p-8 text-white md:block">
          <h1 className="text-2xl md:text-[42px]">ALT ANDET END HVERDAG!</h1>
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
        <h1>ALT ANDET END HVERDAG!</h1>
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

      {/* Stor flydende tilmeldingsknap */}
      <div className="fixed bottom-12 left-12 z-40 md:bottom-25 md:left-25">
        <span className="bg-brand-green absolute inset-0 rounded-full opacity-75 motion-safe:animate-ping" />
        <Button
          asChild
          variant="brand"
          className="relative h-24 w-24 rounded-full p-0 text-center text-sm leading-tight shadow-2xl transition-transform hover:scale-105 md:h-36 md:w-36 md:text-base"
        >
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
            Tilmeld
            <br />
            dig nu!
          </a>
        </Button>
      </div>
    </div>
  ),
});
