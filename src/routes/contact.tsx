import { createFileRoute } from "@tanstack/react-router";
import { TextLink } from "@/components/ui/text-link";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt PLUS T | Plus T" },
      {
        name: "description",
        content:
          "Har du spørgsmål til PLUS T? Kontakt en af årets kursusledere, som med glæde svarer på alle jeres spørgsmål.",
      },
    ],
  }),
  component: () => (
    <>
      <div className="mb-1 flex flex-col items-center gap-1 px-4 pt-2 md:mb-2 md:pt-2">
        <h1 className="mb-0 text-center">Kontakt PLUS T</h1>
        <p className="mb-0 max-w-3xl text-center leading-snug">
          Har du nogle spørgsmål til PLUS T? Vil du høre mere om tidligere
          kurser eller er du i tvivl om PLUS T er noget for dig? Så tag fat i en
          af årets kursusledere, vi vil med glæde svare på alle jeres
          spørgsmål!{" "}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1520px] flex-col items-center justify-center gap-3 md:flex-row md:gap-16">
          {/* Aksel kolonne */}
          <div className="flex max-w-md flex-col items-center px-6 md:px-0">
            <img
              src="/contact_pics/aksel.jpg"
              alt="Aksel"
              className="mb-2 h-[140px] w-[100px] rounded-lg object-cover md:mb-2 md:h-[175px] md:w-[130px]"
            />
            <h2 className="mt-0.5 mb-0 text-center">Aksel Buur Christensen</h2>
            <p className="mb-0.5 text-center leading-snug">
              Aksel har været en del af PLUS T siden 2019, hvor han har været
              vejleder og kursusleder. Når Aksel ikke laver PLUS T, læser han
              til civilingeniør i København.
            </p>
            <ul className="mt-0.5 list-none text-center leading-snug">
              <li className="font-semibold">Kontakt</li>
              <li className="mb-1 text-sm font-light md:text-base">
                Mail: <TextLink href="mailto:aksel.buur@hotmail.com">
                  aksel.buur@hotmail.com
                </TextLink>
              </li>
              <li className="mb-1 text-sm font-light md:text-base">
                Tlf.: <TextLink href="tel:+4542240534">42240534</TextLink>
              </li>
            </ul>
          </div>

          {/* Thea kolonne */}
          <div className="flex max-w-md flex-col items-center px-6 md:px-0">
            <img
              src="/contact_pics/thea.jpg"
              alt="Thea"
              className="mb-2 h-[140px] w-[100px] rounded-lg object-cover md:mb-2 md:h-[175px] md:w-[130px]"
            />
            <h2 className="mt-0.5 mb-0 text-center">Thea Swane Lund</h2>
            <p className="mb-0.5 text-center leading-snug">
              Thea har været en del af PLUS T siden 2024, hvor hun har været
              førstehjælpsansvarlig og vejleder. Når Thea ikke laver PLUS T,
              læser hun til sygeplejerske i København.
            </p>
            <ul className="mt-0.5 list-none text-center leading-snug">
              <li className="font-semibold">Kontakt</li>
              <li className="mb-1 text-sm font-light md:text-base">
                Mail: <TextLink href="mailto:thea.swane@gmail.com">
                  thea.swane@gmail.com
                </TextLink>
              </li>
              <li className="mb-1 text-sm font-light md:text-base">
                Tlf.: <TextLink href="tel:+4521152974">21152974</TextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ),
});
