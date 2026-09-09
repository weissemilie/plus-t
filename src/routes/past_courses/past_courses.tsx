import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/past_courses/past_courses")({
  head: () => ({
    meta: [
      { title: "Tidligere kurser | Plus T" },
      {
        name: "description",
        content:
          "Dyk ned i tidligere års PLUS T-kurser og få et indtryk af, hvad kurset har at byde på - fra Plan T til i dag.",
      },
    ],
  }),
  component: () => (
    <div className="flex min-h-[calc(100vh-130px)] items-center justify-center">
      <div className="layout:flex-row flex w-full max-w-[1520px] flex-col items-center gap-8">
        {/* Venstre kolonne - Billede (øverst på mobil) */}
        <div className="layout:w-3/5">
          <img
            src="/past_courses/past_aksel.jpg"
            alt="Aksel er en krokodille"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* Højre kolonne - Tekst (nedenunder på mobil) */}
        <div className="layout:w-2/5 layout:pr-12 layout:pl-0 px-6 text-white">
          <h1 className="text-[22px] md:text-[38px]">Tidligere kurser</h1>
          <p>
            Før PLUS T blev det seniorkursus vi er i dag, var vi et Plan kursus,
            og teamets historie går langt tilbage i tiden. Teamet har eksisteret
            i så mange år, at flere af dem, der er med til at skabe kurset nu,
            selv har stået som deltagere på enten Plan T eller PLUS T. Den
            særlige måde vi arbejder med adventurespejd på er formet af mange
            frivillige kræfter som alle hver især har sat deres præg på kurset.
          </p>
          <p>
            Det betyder, at hvert års kursus bygger videre på mange erfaringer..
            Karakterer, fortællinger og tilgangen til at udfordre seniorspejdere
            bliver løbende udviklet, med respekt for den kultur der er opstået
            omkring kurset. Når teamet planlægger et nyt år, trækker vi både på
            vores egne oplevelser og den lange række af tidligere kurser, der
            tilsammen danner fundamentet for den måde vi skaber PLUS T i dag.
          </p>
          <p>
            På undersiderne kan du dykke ned i tidligere års kurser og få et
            indtryk af, hvad PLUS T har at byde på.. Her kan du læse om de
            tidligere år og se billeder af nogle af de fantastiske aktiviteter
            vi har afholdt. Derudover er det et lille indblik i de mange
            universer vi i tidens løb har skabt og håber på at du kunne tænke
            dig at være en del af i fremtiden.
          </p>
        </div>
      </div>
    </div>
  ),
});
