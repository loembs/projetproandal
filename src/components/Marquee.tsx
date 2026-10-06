import { MARQUEE_WORDS } from "@/data/content";

export const Marquee = () => {
  const loop = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section aria-label="Expertises Andal Creative" className="overflow-hidden bg-black text-white">
      <div className="marquee-track py-5 md:py-6">
        {loop.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-8 px-4 md:gap-12 md:px-6">
            <span className="text-sm font-medium uppercase tracking-[0.22em] md:text-base">{word}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
};
