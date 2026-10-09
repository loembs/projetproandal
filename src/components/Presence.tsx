import { countries } from "@/data/content";
import { Reveal, RevealLines } from "@/components/Reveal";

const flagAlt: Record<string, string> = {
  Sénégal: "Drapeau du Sénégal",
  "Côte d'Ivoire": "Drapeau de la Côte d'Ivoire",
  Cameroun: "Drapeau du Cameroun",
};

export const Presence = () => {
  return (
    <section id="presence" className="border-y border-black/10 bg-white py-20 text-black md:py-28" aria-labelledby="presence-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black">Présence</p>
        </Reveal>
        <h2 id="presence-title" className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
          <RevealLines lines={["Trois pays,", "une même agence."]} />
        </h2>
        <Reveal delay={80}>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-black md:text-lg">
            Andal Creative est implantée au Sénégal, en Côte d'Ivoire et au Cameroun.
          </p>
        </Reveal>
        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 md:gap-8">
          {countries.map((country) => (
            <li key={country.name} className="border-t-2 border-black pt-5">
              <img
                src={country.flag}
                alt={flagAlt[country.name] ?? country.name}
                className="h-7 w-auto"
              />
              <p className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">{country.city}</p>
              <p className="mt-1 text-sm font-medium text-black">{country.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
