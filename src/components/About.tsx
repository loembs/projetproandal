import { useInView } from "react-intersection-observer";
import { Reveal, RevealLines } from "@/components/Reveal";
import { useCounter } from "@/hooks/use-counter";

const stats = [
  { value: 40, suffix: "+", label: "Projets réalisés" },
  { value: 24, suffix: "+", label: "Clients accompagnés" },
  { value: 3, suffix: "", label: "Pays de présence" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });
  const counts = [
    useCounter(inView ? stats[0].value : 0, 1600),
    useCounter(inView ? stats[1].value : 0, 1600),
    useCounter(inView ? stats[2].value : 0, 1600),
    useCounter(inView ? stats[3].value : 0, 1600),
  ];

  return (
    <section id="apropos" className="overflow-x-clip bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="relative self-start overflow-hidden lg:col-span-5">
          <img
            src="/images/ANDALreativenoir.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[62%] z-0 w-[32rem] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.09] md:w-[40rem]"
          />
          <div className="relative z-10">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black">01 — À propos</p>
            </Reveal>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tight text-black md:text-6xl">
              <RevealLines lines={["Le savoir", "au service", "des marques."]} />
            </h2>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal delay={80}>
            <p className="text-lg font-light leading-relaxed text-neutral-700 md:text-xl">
              Andal Creative est une agence de marketing digital 360°. Nous accompagnons marques, institutions et porteurs de projets, de la stratégie à la réalisation.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base font-light leading-relaxed text-neutral-600 md:text-lg">
              Andal signifie « le savoir » en pulaar. Depuis Dakar, Abidjan et Douala, cette exigence guide notre lecture des codes culturels et une création pensée pour la performance.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a
              href="/ANDAL CREATIVE _ Agence 360.pdf"
              download="ANDAL CREATIVE - Agence 360.pdf"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-black underline-offset-4 hover:underline"
            >
              Télécharger la brochure
            </a>
          </Reveal>
        </div>
      </div>

      <div ref={ref} className="mx-auto mt-20 max-w-6xl px-5 md:mt-24 md:px-8">
        <div className="grid grid-cols-2 border-t-2 border-black md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="border-black/10 py-8 md:border-l md:px-6 md:py-10 md:first:border-l-0 md:first:pl-0">
              <p className="text-5xl font-semibold tracking-tight text-black md:text-6xl">
                {counts[index]}
                {stat.suffix}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
