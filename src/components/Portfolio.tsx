import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Reveal, RevealLines } from "@/components/Reveal";
import {
  portfolioFilters,
  portfolioItems,
  type PortfolioItem,
} from "@/data/content";

const videoPoster = (src: string) =>
  src.replace("/video/upload/", "/video/upload/so_1,f_jpg,q_auto,w_900/").replace(/\.mp4(\?.*)?$/, ".jpg");

const MediaCard = ({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
}) => {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const poster = item.kind === "video" ? videoPoster(item.src) : "";

  useEffect(() => {
    if (item.kind !== "video") return;
    const node = rootRef.current;
    const video = videoRef.current;
    if (!node || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setReady(true)).catch(() => setReady(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [item.kind, item.src]);

  const open = () => {
    videoRef.current?.pause();
    onOpen(item);
  };

  return (
    <article ref={rootRef} className="group relative">
      <button
        type="button"
        onClick={open}
        className="relative block w-full overflow-hidden bg-neutral-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        aria-label={`Ouvrir ${item.title}`}
      >
        <div className="relative aspect-square">
          {item.kind === "video" ? (
            <>
              <img
                src={poster}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <video
                ref={videoRef}
                src={item.src}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                onPlaying={() => setReady(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                  ready ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
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
        <span className="absolute inset-0 flex items-end bg-black/0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:bg-black/35 group-hover:opacity-100 group-focus-within:bg-black/35 group-focus-within:opacity-100">
          <span className="block text-sm font-semibold tracking-tight">{item.title}</span>
        </span>
      </button>
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
