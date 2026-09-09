import { createFileRoute } from "@tanstack/react-router";
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
      <div className="mb-3 flex flex-col items-center gap-2 px-4 pt-2 md:mb-6 md:gap-6 md:pt-8">
        <h1 className="text-center">Kontakt PLUS T</h1>
        <p className="max-w-3xl text-center">
          Har du nogle spørgsmål til PLUS T? Vil du høre mere om tidligere
          kurser eller er du i tvivl om PLUS T er noget for dig? Så tag fat i en
          af årets kursusledere, vi vil med glæde svare på alle jeres
          spørgsmål!{" "}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1520px] flex-col items-center justify-center gap-8 md:flex-row md:gap-20">
          {/* Aksel kolonne */}
          <div className="flex max-w-md flex-col items-center px-6 md:px-0">
            <img
              src="/contact_pics/aksel.jpg"
              alt="Aksel"
              className="mb-3 h-[250px] w-[175px] rounded-lg object-cover md:mb-6 md:h-[400px] md:w-[300px]"
            />
            <h2 className="mt-3 text-center md:mt-6">Aksel Buur Christensen</h2>
            <p className="text-center">
              Aksel har været en del af PLUS T siden 2019, hvor han har været
              vejleder og kursusleder. Når Aksel ikke laver PLUS T, læser han
              til civilingeniør i København.
            </p>
            <ul className="mt-2 list-none text-center leading-snug md:mt-4">
              <li className="font-semibold">Kontakt</li>
              <li className="mb-4; text-sm font-light md:text-base">
                Mail: aksel.buur@hotmail.com
              </li>
              <li className="mb-4; text-sm font-light md:text-base">
                Tlf.: 42240534
              </li>
            </ul>
          </div>

          {/* Thea kolonne */}
          <div className="flex max-w-md flex-col items-center px-6 md:px-0">
            <img
              src="/contact_pics/thea.jpg"
              alt="Thea"
              className="mb-3 h-[250px] w-[175px] rounded-lg object-cover md:mb-6 md:h-[400px] md:w-[300px]"
            />
            <h2 className="mt-3 text-center md:mt-6">Thea Swane Lund </h2>
            <p className="text-center">
              Thea har været en del af PLUS T siden 2024, hvor hun har været
              førstehjælpsansvarlig og vejleder. Når Thea ikke laver PLUS T,
              læser hun til sygeplejerske i København.
            </p>
            <ul className="mt-2 list-none text-center leading-snug md:mt-4">
              <li className="font-semibold">Kontakt</li>
              <li className="mb-4; text-sm font-light md:text-base">
                Mail: thea.swane@gmail.com
              </li>
              <li className="mb-4; text-sm font-light md:text-base">
                Tlf.: 21152974{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ),
});
