import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/about/about")({
  head: () => ({
    meta: [
      { title: "Om PLUS T | Plus T" },
      {
        name: "description",
        content:
          "PLUS T er et spejderkursus for dig, der vil mere end det sædvanlige. En uge i efterårsferien fyldt med udfordringer, fællesskab og oplevelser du ikke glemmer.",
      },
    ],
  }),
  component: () => (
    <div className="flex min-h-[calc(100vh-130px)] items-center justify-center">
      <div className="layout:flex-row flex w-full max-w-[1520px] flex-col items-center gap-8">
        {/* Venstre kolonne - Billede (øverst på mobil) */}
        <div className="layout:w-3/5">
          <img
            src="/homepage/om.jpg"
            alt="Om PLUS T"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* Højre kolonne - Tekst (nedenunder på mobil) */}
        <div className="layout:w-2/5 layout:pr-12 layout:pl-0 px-6 text-white">
          <h1 className="text-[22px] md:text-[38px]">Om PLUS T</h1>
          <p>
            PLUS T er et spejderkursus for dig, der vil mere end det sædvanlige.
            En uge i efterårsferien fyldt med udfordringer, fællesskab og
            oplevelser, du ikke glemmer. Du og din patrulje bliver kastet ud i
            både natur- og byaktiviteter, hvor I tester jeres grænser, styrker
            samarbejdet og lærer at håndtere pres. Kurset kombinerer action,
            refleksion og adventurespejd på højt niveau, så du udvikler dig både
            som spejder og som menneske.
          </p>
          <p>
            Det kræver mod, udholdenhed og lysten til at blive udfordret, men
            belønningen er oplevelser, nye venskaber og inspiration til dit
            videre spejderliv. PLUS T afholdes i uge 42 og er forseniorspejdere
            mellem 16 og 23 år, der kan svømme 200 meter, bære oppakning og er
            klar på årets vildeste efterår.
          </p>
        </div>
      </div>
    </div>
  ),
});
