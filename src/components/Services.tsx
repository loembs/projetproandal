import {
  Building,
  Calendar,
  Code,
  Globe,
  Megaphone,
  Palette,
  Smartphone,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealLines } from "@/components/Reveal";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

type Pole = {
  title: string;
  services: Service[];
};

const poles: Pole[] = [
  {
    title: "Pôle Créatif / Design",
    services: [
      {
        title: "Stratégie & conseil",
        description:
          "Audit et plan de communication, identité de marque, stratégie de contenu et activation de campagnes 360°.",
        icon: Target,
        image: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1755395902/reunion_photo_extraite_ox2lxk.png",
      },
      {
        title: "Production de contenus",
        description:
          "Visuels et shootings, vidéo et motion design, capsules, interviews, publicités et contenus pour les réseaux.",
        icon: Video,
        image:
          "https://res.cloudinary.com/dlna2kuo1/video/upload/so_1,f_jpg,q_auto,w_1400/v1754577767/crea_contenu_jpdaqj.jpg",
      },
      {
        title: "Branding & design",
        description:
          "Naming et logo, chartes graphiques, outils print et digitaux, design d'expérience utilisateur.",
        icon: Palette,
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Événementiel & expérience de marque",
        description:
          "Événements corporate et culturels, dispositifs expérientiels, activations terrain et stands.",
        icon: Calendar,
        image:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Studio créatif intégré",
        description:
          "À Dakar : location photo et vidéo, espace maquillage et audio, tournages, interviews, podcasts et branding.",
        icon: Building,
        image:
          "https://res.cloudinary.com/dlna2kuo1/video/upload/so_1,f_jpg,q_auto,w_1400/v1754577804/studio_unspjq.jpg",
      },
    ],
  },
  {
    title: "Pôle Développement",
    services: [
      {
        title: "Développement web & digital",
        description:
          "Sites vitrine, e-commerce et institutionnels, paiement, maintenance, hébergement, SEO et responsive.",
        icon: Globe,
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Développement d'applications web",
        description: "Applications web sur mesure, rapides et évolutives, alignées sur vos usages métier.",
        icon: Code,
        image:
          "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401943/Capture_d_%C3%A9cran_2025-08-17_033840_yrb6d6.png",
      },
      {
        title: "Développement d'applications mobiles",
        description: "Applications iOS et Android fluides, de l'idée à la mise en ligne.",
        icon: Smartphone,
        image:
          "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401872/Capture_d_%C3%A9cran_2025-08-17_031750_h6q1xf.png",
      },
    ],
  },
  {
    title: "Pôle Réseaux sociaux",
    services: [
      {
        title: "Marketing digital",
        description:
          "Community management, campagnes Meta et Google Ads, e-mailing, reporting et marketing d'influence.",
        icon: Megaphone,
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
];

const numbered = poles.flatMap((pole) =>
  pole.services.map((service, index) => ({
    ...service,
    pole: pole.title,
    poleStart: index === 0,
    number: "",
  })),
);

numbered.forEach((service, index) => {
  service.number = String(index + 1).padStart(2, "0");
});

export const Services = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black">02 — Services</p>
        </Reveal>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight text-black md:text-6xl">
          <RevealLines lines={["Ce que nous", "construisons."]} />
        </h2>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-neutral-600 md:text-lg">
            Trois pôles, une même exigence : faire voir, comprendre et performer votre marque.
          </p>
        </Reveal>

        <div className="mt-14">
          {numbered.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title}>
                {service.poleStart && (
                  <h3 className={`mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-black ${service.number === "01" ? "mt-0" : "mt-12"}`}>
                    <span className="h-2 w-2 bg-black" aria-hidden="true" />
                    {service.pole}
                  </h3>
                )}
                <div
                  tabIndex={0}
                  className="group relative overflow-hidden border-b border-black/10 py-6 outline-none md:px-5 md:py-7"
                >
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-[0.16] group-focus-visible:opacity-[0.16]"
                  />
                  <div className="relative z-10">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-12">
                      <span className="text-sm font-semibold tabular-nums text-black md:col-span-1">
                        {service.number}
                      </span>
                      <h4 className="origin-left text-xl font-semibold tracking-tight text-black transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105 md:col-span-6 md:text-3xl">
                        {service.title}
                      </h4>
                      <Icon className="h-5 w-5 justify-self-end text-black transition-transform duration-300 group-hover:scale-110 md:col-span-5" aria-hidden="true" />
                    </div>
                    <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-black/75 md:ml-10">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
