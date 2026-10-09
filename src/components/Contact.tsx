import { FormEvent, useState } from "react";
import { Instagram } from "lucide-react";
import { Reveal, RevealLines } from "@/components/Reveal";
import { socialLinks } from "@/data/content";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = event.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xkgzjdwe", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("envoi");
      setSent(true);
      form.reset();
    } catch {
      setError("L'envoi n'a pas abouti. Écrivez-nous à contacts@andalcreative.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">05 — Contact</p>
          </Reveal>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
            <RevealLines lines={["Parlons", "de votre", "prochaine marque."]} />
          </h2>
          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/75">
              Un projet, une campagne ou une refonte : dites-nous où vous en êtes. Nous revenons vers vous rapidement.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="/devis"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
            >
              Prendre rendez-vous
            </a>
            <p className="mt-8 text-sm text-white/80">
              <a className="hover:text-white" href="mailto:contacts@andalcreative.com">
                contacts@andalcreative.com
              </a>
            </p>
            <ul className="mt-3 space-y-1 text-sm text-white/70">
              <li>+221 782800808 Sénégal</li>
              <li>+237 682908439 Cameroun</li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
          </Reveal>
        </div>

        <Reveal delay={100}>
          {sent ? (
            <p className="rounded-[1.75rem] border border-white/15 p-8 text-lg" role="status">
              Merci. Votre message est bien arrivé, nous vous répondons très vite.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 rounded-[1.75rem] border border-white/15 p-6 md:p-8">
              <div>
                <label htmlFor="nom" className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/70">
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  required
                  autoComplete="name"
                  className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/70">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
                />
              </div>
              {error && (
                <p className="text-sm text-white" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 disabled:opacity-60"
              >
                {loading ? "Envoi…" : "Envoyer"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
