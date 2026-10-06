import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goTo = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const light = !isScrolled && !isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light ? "bg-transparent" : "bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 md:px-8">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            goTo("#hero");
          }}
          className="relative block h-[4.5rem] w-56 shrink-0 overflow-hidden md:h-24 md:w-80"
        >
          <img
            src={light ? "/images/andalblanc.png" : "/images/ANDALreativenoir.png"}
            alt="Andal Creative"
            className="absolute left-1/2 top-1/2 h-36 w-36 max-w-none -translate-x-1/2 -translate-y-1/2 md:h-44 md:w-44"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-60 ${
                light ? "text-white" : "text-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? "Fermer" : "Menu"}</span>
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 transition-transform duration-300 ${
                light ? "bg-white" : "bg-black"
              } ${isOpen ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 transition-opacity duration-300 ${
                light ? "bg-white" : "bg-black"
              } ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 transition-transform duration-300 ${
                light ? "bg-white" : "bg-black"
              } ${isOpen ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        {...(!isOpen ? { inert: "" } : {})}
        aria-hidden={!isOpen}
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-out md:hidden ${
          isOpen ? "max-h-80 border-t border-black/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
              className="border-b border-black/5 py-4 text-lg font-medium text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
