import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/about/about_course")({
  head: () => ({
    meta: [
      { title: "Forberedelse inden kurset | Plus T" },
      {
        name: "description",
        content:
          "Sådan forbereder du dig til PLUS T: gå en tur, svøm en tur, tjek dit grej, pak vandtæt og læs deltagerbrevet grundigt inden afgang.",
      },
    ],
  }),
  component: () => (
    <div>
      <div className="flex flex-col items-center px-6 md:pt-16 lg:px-40">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-[42px]">Forberedelse inden kurset</h1>
          <h2>1. Gå en tur</h2>
          <p>
            På PLUS T skal du kunne gå mindst 50 km på en uge med al din
            oppakning på ryggen. Få testet dine sko og støvler, så du er sikker
            på, at alt fungerer, som det skal. Hvis du ikke er vant til at gå
            langt, så sørg for at træne op med vandreture.
          </p>
          <h2>2. Svøm en tur</h2>
          <p>
            Når vejen slutter, og broen er styrtet sammen, må man jo svømme
            over. Det kan være en bred å, så derfor kræver vi, at du skal kunne
            svømme 200 meter i åbent vand. Er det længe siden, du sidst har øvet
            din crawl, så kan en rask tur i svømmehallen være en god idé.
          </p>
          <h2>3. Tjek dit grej</h2>
          <p>
            Hvornår har du sidst tjekket stropperne på din rygsæk? Kan du lyne
            din sovepose fra begge ender? Det er vigtigt, at dit grej er i god
            stand, når du skal på kursus, for du er 100 % afhængig af det
            undervejs. Knækker din skulderstrop på dag 2, er der lang vej igen.
            Og hvis du ikke har testet, om du kan holde varmen i din sovepose,
            kan ugen pludselig føles meget lang.
          </p>
          <h2>4. Pak vandtæt</h2>
          <p>
            Det danske efterår kan byde på alt fra solskin til skybrud og nogle
            gange begge dele på samme dag. Hvis tasken skal ud og svømme, duer
            et par poser uden knude ikke. Man skal ikke regne med at kunne tørre
            sine ting undervejs, så sørg for at pakke alt vandtæt. Aet kan ikke
            understreges nok!
          </p>
          <h2>5. Læs deltagerbrevet</h2>
          <p>
            Deltagerbrevet er din bedste ven inden afgang. Her finder du alt,
            hvad du skal vide om pakkeliste, mødetid og praktiske detaljer, men
            også lidt om, hvad du kan forvente af ugen. Læs det grundigt (gerne
            to gange), så du ikke står i skoven og mangler den ene ting, du
            troede, du ikke fik brug for. Jo bedre du er forberedt, desto mere
            overskud får du til at nyde oplevelsen.
          </p>
        </div>
      </div>
    </div>
  ),
});
