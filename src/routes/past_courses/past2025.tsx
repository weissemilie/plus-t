import { createFileRoute } from "@tanstack/react-router";
import PastCoursesCarousel from "@/components/ui/PastCoursesCarousel";

const images2025 = [
  {
    src: "/2025/2025_vand.jpg",
    caption:
      "Når man skal over vandpassager er det vigtigt at have redningsflåden tæt på",
  },
  {
    src: "/2025/2025_struds.jpg",
    caption:
      "Nogle gange skal man forbi en struds eller to, for at fange sin frokost",
  },
  {
    src: "/2025/2025_struds1.jpg",
    caption: "Hvor lang tid skal et strudseæg koge?",
  },
  {
    src: "/2025/2025_voldt.JPG",
    caption: "Dagens kontor hos voldt set fra oven",
  },
  {
    src: "/2025/2025_voldt1.jpg",
    caption: "voldt leverer hvor som helst og når som helst",
  },
  {
    src: "/2025/2025_voldt2.jpg",
    caption:
      "Hvis vejret er for godt, så lover teamet at skaffe noget regnvejr",
  },
  {
    src: "/2025/2025_klatring.jpg",
    caption: "Udfordringerne foregår i vand, på land og selvfølgelig i luften",
  },
  {
    src: "/2025/2025_klatring1.jpg",
    caption:
      "Når man forbereder sig på en Grønlandsekspedition, er det vigtigt at lære at klatre med isøkse",
  },
];

export const Route = createFileRoute("/past_courses/past2025")({
  head: () => ({
    meta: [
      { title: "PLUS T 2025 | Plus T" },
      {
        name: "description",
        content:
          "PLUS T 2025 startede i Viborg og bragte deltagerne på ekspedition mod Grønland - 100 km gåtur og isklatring undervejs.",
      },
    ],
  }),
  component: () => (
    <div className="flex min-h-[calc(100vh-130px)] items-center justify-center">
      <div className="layout:flex-row flex w-full max-w-[1520px] flex-col items-center gap-8">
        {/* Venstre kolonne - Carousel (øverst på mobil) */}
        <div className="layout:w-3/5 layout:pl-6 w-full">
          <PastCoursesCarousel images={images2025} />
        </div>

        {/* Højre kolonne - Tekst (nedenunder på mobil) */}
        <div className="layout:w-2/5 layout:pr-6 layout:pl-0 px-6 text-white">
          <h1 className="text-[22px] md:text-[38px]">PLUS T 2025</h1>
          <p>
            PLUS T 2025 startede i Viborg. Her blev deltagerne klar over, at de
            havde fået muligheden for at komme på ekspedition til Grønland,
            hvilket kræver en masse forberedelse. Hver patrulje byggede en pulk,
            de skulle have med under hele kurset. Pulken blev flittigt brugt og
            snart endte patruljerne i en lyssky business for at tjene penge til
            deres ekspedition - nemlig udbryder-firmaet Voldt. Her blev de lovet
            gode penge, men der var mest af alt hårdt arbejde og ingen løn.
            Patruljerne slap heldigvis væk fra Voldt og fortsatte træningen med
            isklatring, optøning af gammel dåsemad og kortlægning af Grønland
            med Knud Rasmussen.
          </p>
          <p>
            Deltagerne mødte blandt andet den genopståede Knud Rasmussen, arrige
            strudse og den ubarmhjertige Voldt-chef. Deltagerne gik i 2025
            omkring 100 km på 5 dage og var undervejs i vandet 3 gange.
          </p>
        </div>
      </div>
    </div>
  ),
});
