import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const SECTION_IDS = ["hero", "presence", "apropos", "services", "realisations", "partenaires", "contact"];

export const ScrollPuces = () => {
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      setAtFooter(footer.getBoundingClientRect().top < window.innerHeight * 0.72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goDown = () => {
    const line = window.scrollY + 96;
    const next = SECTION_IDS.map((id) => document.getElementById(id)).find(
      (section) => section !== null && section.offsetTop > line + 24,
    );
    (next ?? document.getElementById("contact"))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (atFooter) return null;

  return (
    <button
      type="button"
      onClick={goDown}
      aria-label="Descendre"
      className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 md:right-8"
    >
      <ArrowDown className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};
