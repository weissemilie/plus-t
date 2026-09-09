import { createFileRoute } from "@tanstack/react-router";
import PastCoursesCarousel from "@/components/ui/PastCoursesCarousel";

const images2025 = [
  {
    src: "/2024/2024_ankomst.jpg",
    caption: "Sheiken ankommer altid med stil",
  },
  {
    src: "/2024/2024_kort.jpg",
    caption: "Kortet kan være bagt på mange måder",
  },
  {
    src: "/2024/2024_kanin.jpg",
    caption: "Frokost kommer i mange former og skal tilberedes derefter",
  },
  {
    src: "/2024/2024_flaade.jpg",
    caption: "Transporten foregår på mange smarte og mindre smarte måder",
  },
  {
    src: "/2024/2024_ostebyen.jpg",
    caption:
      "Det er vigtigt at holde redningsflåden tæt på, når spejderne skal på vandet",
  },
  {
    src: "/2024/2024_fangetransport.jpg",
    caption: "Den mest effektive måde at fragte spejdere på",
  },
  {
    src: "/2024/2024_drinks.jpg",
    caption: "Spejderne skal selvfølgelig have noget godt at drikke undervejs",
  },
  {
    src: "/2024/2024_disko.JPG",
    caption: "Hvert år sluttes af med en festlig aften",
  },
];

export const Route = createFileRoute("/past_courses/past2024")({
  head: () => ({
    meta: [
      { title: "PLUS T 2024 | Plus T" },
      {
        name: "description",
        content:
          "PLUS T 2024 startede i Aarhus og bragte deltagerne til Mols Bjerge Nationalpark - 80 km gåtur og en hjemmebygget tømmerflåde.",
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
          <h1 className="text-[22px] md:text-[38px]">PLUS T 2024</h1>
          <p>
            PLUS T 2024 startede i Aarhus, men det var ikke meget deltagerne fik
            set til smilets by - de blev nemlig sejlet ud i Aarhus Bugt for at
            svømme resten af vejen til Mols. I flotte omgivelser af Mols Bjerge
            Nationalpark mødte spejderne den norske borearbejder, DJ Hubbi,
            samtidig med at de nåede at bygge deres egen by med telefonpæle for
            at kunne ringe til hinanden.
          </p>
          <p>
            Deltagerne gik i 2024 omkring 80 km på 5 dage og tilbragte 8 timer
            på deres hjemmebyggede tømmerflåde imens de lavede 4 forskellige
            oste
          </p>
        </div>
      </div>
    </div>
  ),
});
