import { createFileRoute } from "@tanstack/react-router";
import { TextLink } from "@/components/ui/text-link";
export const Route = createFileRoute("/sign_up/guide_for_sign_up")({
  head: () => ({
    meta: [
      { title: "Guide til at komme på PLUS T | Plus T" },
      {
        name: "description",
        content:
          "Guide til tilmelding, betaling og refusion for PLUS T - så du hurtigst muligt kan komme på seniorspejderkurset.",
      },
    ],
  }),
  component: () => (
    <div className="flex flex-col items-center px-6 pt-8 md:px-20 md:pt-16 lg:px-40">
      <div className="max-w-4xl">
        <h1 className="text-2xl md:text-[42px]">
          Guide til at komme på Plus T
        </h1>
        <p>
          Kunne du tænke dig at deltage på PLUS T, men synes, at det er lidt
          uoverskueligt med de kedelige ting som tilmelding, betaling og
          refusion. Her er en guide så du hurtigst muligt kan komme på PLUS T.
        </p>{" "}
        <br />
        <h2>Punkt 1 - Selve tilmeldingen</h2>
        <p>
          Jo hurtigere du tilmelder dig, jo bedre! Hvis du vil sikre dig at
          komme med på årets fedeste kursus, skal du sørge for at få dig
          tilmeldt i god tid. Desuden er det en fordel at tilmelde sig hurtigt,
          for så har du en god undskyldning for at sige "NEJ!" til at tage på
          ferie eller i sommerhus med mor og far, for du skal nemlig på
          kursus.{" "}
        </p>
        <p>
          Hvornår åbner tilmeldingen så? Tilmeldingen åbner midt/slut maj og
          hvis du nu husker at følge med på vores sociale medier, skal vi nok
          holde dig opdateret når det sker.
        </p>
        <p>
          Man kan også følge med på DDS's hjemmeside, hvor tilmeldingen praktisk
          kommer til at foregå:{" "}
          <TextLink
            href="https://dds.dk/arrangement/plus-start-plus-t-1"
            external
          >
            https://dds.dk/arrangement/plus-start-plus-t-1
          </TextLink>
        </p>{" "}
        <br />
        <h2>Punkt 2 - Skal jeg så bare vente til maj?</h2>
        <p>
          Nej! Selvom tilmeldingen først åbner i maj, kan du allerede hjælpe dig
          selv godt på vej. Start med at fortælle mor og far, at du er optaget
          fra søndag d. 11. oktober til og med lørdag d. 17 oktober 2026. Nu du
          er i gang skal du også huske at skrive det i din egen kalender!
        </p>
        <p>
          Det næste du skal gøre, er at høre en spejderleder fra din gruppe om
          I, i gruppen har en holdning til tilskud til PLAN og PLUS kurser.
          Langt de fleste grupper opfordrer deres spejdere til at komme på
          ungdomskurser, og i den forbindelse betaler mange grupper hele eller
          dele af kurserne. Hvis det nu viser sig at din gruppe ikke har
          tradition for at give penge til kurser, må du tage skrappere midler i
          brug. Nemlig at skrive en mail til din gruppes bestyrelse. Før du
          tænker “mail, det orker jeg ikke!”, så har vi allerede skrevet en som
          du kan bruge. (Den ligger i bunden af denne side)
        </p>{" "}
        <br />
        <h2>Punkt 3 - Er jeg overhovedet klar til at tage på PLUS T?</h2>
        <p>
          PLUS T er et hårdt kursus på alle måder. I modsætning til andre
          lignende kurser, har vi i teamet en målsætning om, at så mange som
          muligt gennemfører. Det bliver ikke let at komme igennem PLUS T, for
          det er mega hårdt. Det kan derfor være en god ide at “træne op” til
          kurset. Det kan være ved at øve sig i at gå langt med oppakning,
          svømme i koldt vand og øve vejrtrækning i vand. Derudover er det en
          god ide at tage hånd om gamle skader på forhånd, i det omfang det kan
          lade sig gøre.
        </p>{" "}
        <br />
        <h2>Punkt 4 - Så hvad skulle jeg gøre?!</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Følg{" "}
            <TextLink href="https://www.instagram.com/plustspejder/" external>
              @plustspejder
            </TextLink>{" "}
            på instagram og{" "}
            <TextLink href="https://www.facebook.com/plus.t.dds" external>
              PLUS T - Seniorkursus i DDS
            </TextLink>{" "}
            på Facebook
          </li>
          <li>
            Skriv d. 11.-17. oktober 2026 i kalenderen for at tage på PLUS T
          </li>
          <li>Skriv d. 7. september i kalenderen, her lukker tilmeldingen.</li>
          <li>
            Sig til alle dine venner at de også skal tage på PLUS T, det fedeste
            seniorkursus!
          </li>
          <li>
            Undersøg om det er muligt at få refunderet udgifterne til at komme
            på kursus.
          </li>{" "}
          <br />
        </ul>
        <h2>Punkt 5 - Mailen</h2>
        <p>
          Brug denne mail som inspiration, brug den 1:1, eller skriv din egen
          mail til din gruppes bestyrelse. (Husk at ændre navn og oplysninger)
        </p>{" "}
        <br />
        <div className="mx-auto max-w-xl">
          <p>Hej bestyrelse i [Spejdergruppens navn].</p>
          <p>
            Jeg [Dit Navn] skriver til jer i forbindelse med et DDS
            ungdomskursus, jeg gerne vil på. Kurset hedder PLUS T og har
            personlig udvikling til formål. Dette foregår gennem vilde
            oplevelser, pressede situationer og grænsesøgende aktiviteter, alt
            sammen i en ny patrulje med kammerater, man endnu ikke kender.
          </p>
          <p>
            Kurset kan sammenlignes med et PLAN kursus. Man møder op, placeres i
            en patrulje og har en uges kursus. I modsætning til PLAN, hvor man
            lærer at være patruljeleder og assistent, har dette kursus fokus på
            at lære deltagerne hvordan man håndterer pres og løse svære, hårde
            og udfordrende opgaver. Alt sammen med det formål at styrke
            personlig udvikling. Kurset er baseret på at styrke den enkeltes
            kendskab til egne grænser samt udvikle kompetencer indenfor
            håndtering af pressede situationer. Kompetencer, der er gode at have
            i både hverdagen og fremtidens spejderliv. Foruden mine nye
            kompetencer, som jeg kan bruge i mit arbejde her i gruppen, kommer
            vi på kurset også til at opleve nogle vilde aktiviteter der kan give
            inspiration til, hvordan vi i klanen kan lave fede aktiviteter for
            resten af gruppen.{" "}
          </p>
          <p>
            Jeg kommer desuden til at møde mange ligesindede på kurset, som også
            er seniorspejdere i andre grupper. Det fællesskab vi i løbet af ugen
            får skabt, kan på sigt blive en kæmpe styrke, ikke bare for gruppen,
            men for divisionen og måske endda hele korpset når vi samarbejder på
            tværs af seniorspejdere.
          </p>
          <p>
            Derfor kunne jeg godt tænke mig at I, i bestyrelsen, vil overveje at
            betale min deltagelse på kurset eller give et tilskud, så jeg kan
            komme af sted og bringe nye ideer og nye kompetencer med tilbage til
            gruppen.
          </p>
          <p>Kurset koster [Indsæt pris]</p>
          <p>
            Jeg håber meget at høre fra jer. Jeg glæder mig til at give noget
            tilbage til gruppen efter kurset.
          </p>
          <p>Mange spejderhilsner [Dit navn]</p>
          <p>Mail: [Din mail]</p>
          <p>Tlf.: [Dit telefonnummer]</p>
        </div>
      </div>
    </div>
  ),
});
