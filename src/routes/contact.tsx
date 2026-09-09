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
      <div className="mb-3 flex flex-col items-center gap-2 px-4 pt-2 md:mb-6 md:gap-4 md:pt-6">
        <h1 className="text-center">Kontakt PLUS T</h1>
        <p className="max-w-3xl text-center">
          Har du nogle spørgsmål til PLUS T? Vil du høre mere om tidligere
          kurser eller er du i tvivl om PLUS T er noget for dig? Så tag fat i en
          af årets kursusledere, vi vil med glæde svare på alle jeres
          spørgsmål!{" "}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1520px] flex-col items-center justify-center gap-6 md:flex-row md:gap-16">
          {/* Aksel kolonne */}
          <div className="flex max-w-md flex-col items-center px-6 md:px-0">
            <img
              src="/contact_pics/aksel.jpg"
              alt="Aksel"
              className="mb-2 h-[200px] w-[145px] rounded-lg object-cover md:mb-3 md:h-[280px] md:w-[210px]"
            />
            <h2 className="mt-3 text-center md:mt-5">Aksel Buur Christensen</h2>
            <p className="text-center">
              Aksel har været en del af PLUS T siden 2019, hvor han har været
              vejleder og kursusleder. Når Aksel ikke laver PLUS T, læser han
              til civilingeniør i København.
            </p>
            <ul className="mt-2 list-none text-center leading-snug md:mt-4">
              <li className="font-semibold">Kontakt</li>
              <li className="mb-3 text-sm font-light md:text-base">
                Mail: <TextLink href="mailto:aksel.buur@hotmail.com">
                  aksel.buur@hotmail.com
                </TextLink>
              </li>
              <li className="mb-3 text-sm font-light md:text-base">
                Tlf.: <TextLink href="tel:+4542240534">42240534</TextLink>
              </li>
            </ul>
          </div>

          {/* Thea kolonne */}
          <div className="flex max-w-md flex-col items-center px-6 md:px-0">
            <img
              src="/contact_pics/thea.jpg"
              alt="Thea"
              className="mb-2 h-[200px] w-[145px] rounded-lg object-cover md:mb-3 md:h-[280px] md:w-[210px]"
            />
            <h2 className="mt-3 text-center md:mt-5">Thea Swane Lund</h2>
            <p className="text-center">
              Thea har været en del af PLUS T siden 2024, hvor hun har været
              førstehjælpsansvarlig og vejleder. Når Thea ikke laver PLUS T,
              læser hun til sygeplejerske i København.
            </p>
            <ul className="mt-2 list-none text-center leading-snug md:mt-4">
              <li className="font-semibold">Kontakt</li>
              <li className="mb-3 text-sm font-light md:text-base">
                Mail: <TextLink href="mailto:thea.swane@gmail.com">
                  thea.swane@gmail.com
                </TextLink>
              </li>
              <li className="mb-3 text-sm font-light md:text-base">
                Tlf.: <TextLink href="tel:+4521152974">21152974</TextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ),
});
