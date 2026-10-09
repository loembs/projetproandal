import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { HERO_POSTER, HERO_VIDEO } from "@/data/content";
import { InstagramHandle } from "@/components/InstagramHandle";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const showVideo = !failed && !reduceMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;
    video.muted = true;
    const start = () => {
      video.play().catch(() => undefined);
    };
    if (video.readyState >= 2) start();
    else video.addEventListener("canplay", start, { once: true });
    return () => video.removeEventListener("canplay", start);
  }, [showVideo]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.play().catch(() => setFailed(true));
    }
    setMuted(next);
  };

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-end overflow-x-clip bg-black text-white">
      <div className="absolute inset-0">
        <img src={HERO_POSTER} alt="" className="h-full w-full object-cover" />
        {showVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_POSTER}
            onError={() => setFailed(true)}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/65" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pb-24 pt-28 md:px-8 md:pb-28">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-white">
          Motion design — Instant Beauty
        </p>
        <h1 className="hero-line max-w-full text-[clamp(1.7rem,6.2vw,5.6rem)] leading-none">
          <InstagramHandle />
        </h1>
        <p className="hero-line max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg" style={{ animationDelay: "0.28s" }}>
          Agence de marketing digital 360°. Stratégie, création et développement pour des marques qui durent.
        </p>
        <div className="hero-line flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.46s" }}>
          <a
            href="#realisations"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Voir nos réalisations
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/80 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {showVideo && (
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? "Activer le son" : "Couper le son"}
          className="absolute right-5 top-24 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black md:right-8 md:top-32"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      )}

    </section>
  );
};
