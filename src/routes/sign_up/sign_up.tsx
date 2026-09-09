import { createFileRoute } from "@tanstack/react-router";
import { TextLink } from "@/components/ui/text-link";

export const Route = createFileRoute("/sign_up/sign_up")({
  head: () => ({
    meta: [
      { title: "Tilmeld dig PLUS T | Plus T" },
      {
        name: "description",
        content:
          "Sådan tilmelder du dig PLUS T: tilmeldingen åbner midt/slut maj via Det Danske Spejderkorps' hjemmeside. Sæt kryds i kalenderen allerede nu.",
      },
    ],
  }),
  component: () => (
    <div className="flex min-h-[calc(100vh-130px)] items-center justify-center">
      <div className="layout:flex-row flex w-full max-w-[1520px] flex-col items-center gap-8">
        {/* Venstre kolonne - Billede (øverst på mobil) */}
        <div className="layout:w-3/5">
          <img
            src="/homepage/signup.jpg"
            alt="PLUS T tilmelding"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* Højre kolonne - Tekst (nedenunder på mobil) */}
        <div className="layout:w-2/5 layout:pr-12 layout:pl-0 px-6 text-white">
          <h1 className="text-[20px] md:text-[38px]">
            Sådan tilmelder du dig PLUS T
          </h1>
          <p>
            Tilmeld dig på medlemsservice her{" "}
            <TextLink
              href="https://medlem.dds.dk/event/id/69596/register"
              external
            >
              Gå til medlemsservice
            </TextLink>
          </p>
          <p>
            Tilmeldingen til PLUS T åbner midt/slut maj, så sæt kryds i
            kalenderen allerede nu, hvis du vil sikre dig en plads på årets
            fedeste kursus.
          </p>
          <p>
            Når tilmeldingen åbner, foregår det gennem Det Danske Spejderkorps'
            hjemmeside. Du finder alt det praktiske og selve tilmeldingen her:{" "}
            <TextLink
              href="https://dds.dk/arrangement/plus-start-plus-t-1"
              external
            >
              Gå til kursusbeskrivelse
            </TextLink>
          </p>
          <p>
            Indtil da kan du følge med på vores sociale medier, hvor vi giver
            besked, så snart tilmeldingen åbner. Husk også at tale med din leder
            eller gruppes bestyrelse om tilskud. Mange grupper og divisioner
            støtter nemlig spejdere, der vil af sted på ungdomskursus. Check
            vores udførlige guide ud du finder her på hjemmesiden til hvordan.
          </p>
        </div>
      </div>
    </div>
  ),
});
