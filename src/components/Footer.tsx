import { ArrowUp, Instagram } from "lucide-react";
import { socialLinks } from "@/data/content";

const links = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
  { label: "Prendre rendez-vous", href: "/devis" },
];

export const Footer = () => {
  const goToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <a href="#hero" className="relative block h-20 w-64 overflow-hidden md:h-28 md:w-80">
            <img
              src="/images/andalblanc.png"
              alt="Andal Creative"
              className="absolute left-1/2 top-1/2 h-48 w-48 max-w-none -translate-x-1/2 -translate-y-1/2 md:h-64 md:w-64"
            />
          </a>
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/70">
            Agence de marketing digital 360°. Dakar, Abidjan, Douala.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Pied de page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Navigation</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a className="hover:text-white" href="mailto:contacts@andalcreative.com">
                contacts@andalcreative.com
              </a>
            </li>
            <li>+221 782800808 Sénégal</li>
            <li>+237 682908439 Cameroun</li>
          </ul>
          <ul className="mt-5 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {link.country}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-8 text-xs text-white/50 md:px-8">
        <p>© {new Date().getFullYear()} Andal Creative. Tous droits réservés.</p>
        <button
          type="button"
          onClick={goToHero}
          aria-label="Retour au début"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};
