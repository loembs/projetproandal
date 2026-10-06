import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Reveal, RevealLines } from "@/components/Reveal";
import {
  portfolioFilters,
  portfolioItems,
  type PortfolioItem,
} from "@/data/content";

const MediaCard = ({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  };

  const open = () => {
    pause();
    onOpen(item);
  };

  const onActivate = () => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (item.kind === "video" && coarse && !playing) {
      play();
      return;
    }
    open();
  };

  return (
    <article className="group relative">
      <button
        type="button"
        onClick={onActivate}
        onMouseEnter={() => {
          if (item.kind === "video" && window.matchMedia("(pointer: fine)").matches) play();
        }}
        onMouseLeave={() => {
          if (item.kind === "video") pause();
        }}
        className="relative block w-full overflow-hidden bg-neutral-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        aria-label={item.kind === "video" ? `Cliquez pour lire la vidéo ${item.title}` : `Ouvrir ${item.title}`}
      >
        <div className="aspect-square">
          {item.kind === "video" ? (
            <video
              ref={videoRef}
              src={item.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
        {item.kind === "video" && !playing && (
          <span className="pointer-events-none absolute inset-x-1 bottom-1 z-10 flex justify-center sm:inset-x-2 sm:bottom-2">
            <span className="rounded-full bg-white px-2 py-1 text-center text-[0.62rem] font-semibold leading-tight text-black shadow-sm sm:px-3 sm:text-xs">
              Cliquez pour lire la vidéo
            </span>
          </span>
        )}
        <span className="absolute inset-0 flex items-end bg-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:bg-black/35 group-hover:opacity-100 group-focus-within:bg-black/35 group-focus-within:opacity-100">
          <span className="block text-sm font-semibold tracking-tight">{item.title}</span>
        </span>
      </button>
      {item.kind === "video" && playing && (
        <button
          type="button"
          onClick={open}
          className="absolute bottom-2 left-2 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black md:hidden"
        >
          Voir en grand
        </button>
      )}
    </article>
  );
};

export const Portfolio = () => {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]["id"]>("all");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const visible =
    filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="realisations" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black">03 — Réalisations</p>
        </Reveal>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight text-black md:text-6xl">
          <RevealLines lines={["Nos", "réalisations."]} />
        </h2>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-neutral-600 md:text-lg">
            Identités, packaging, sites, print et contenus. Nous prenons aussi en charge les réseaux : gestion quotidienne, campagnes publicitaires et création vidéo.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les réalisations">
          {portfolioFilters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  selected ? "bg-black text-white" : "bg-white text-neutral-700 shadow-sm hover:bg-neutral-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-1">
          {visible.map((item) => (
            <MediaCard key={item.id} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto rounded-[1.75rem] border-0 bg-black p-3 text-white">
          {active && (
            <>
              <DialogTitle className="pr-8 text-white">{active.title}</DialogTitle>
              <DialogDescription className="text-white/70">{active.tag}</DialogDescription>
              {active.kind === "video" ? (
                <video
                  key={active.src}
                  src={active.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="max-h-[75vh] w-full bg-black object-contain"
                />
              ) : (
                <img
                  src={active.src}
                  alt={active.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
