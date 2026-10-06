import { partners } from "@/data/content";
import { Reveal, RevealLines } from "@/components/Reveal";

export const Partenaires = () => {
  const loop = [...partners, ...partners];

  return (
    <section id="partenaires" className="overflow-hidden bg-[#f6f4f1] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black">04 — Partenaires</p>
        </Reveal>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight text-black md:text-6xl">
          <RevealLines lines={["Ils nous font", "confiance."]} />
        </h2>
      </div>

      <div className="relative mt-12">
        <ul className="partner-track gap-4 px-4 md:gap-5">
          {loop.map((partner, index) => (
            <li key={`${partner.name}-${index}`} className="w-52 shrink-0 md:w-60">
              <div className="flex h-40 flex-col items-center justify-center rounded-[1.75rem] bg-white px-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={partner.src}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 w-full object-contain"
                />
                <p className="mt-3 text-center text-xs font-medium text-neutral-600">{partner.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
