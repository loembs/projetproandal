export const HERO_VIDEO =
  "https://res.cloudinary.com/jucpyysy/video/upload/v1791248007/Instant_beauty.mp4";

export const HERO_POSTER =
  "https://res.cloudinary.com/jucpyysy/video/upload/so_0,f_jpg,q_auto,w_1600/v1791248007/Instant_beauty.jpg";

export const MARQUEE_WORDS = [
  "Motion design",
  "Web",
  "Mobile",
  "Réseaux sociaux",
  "Ads",
  "Branding",
  "Stratégie",
  "Événementiel",
  "Contenus",
];

export const socialLinks = [
  {
    label: "Instagram Cameroun",
    country: "Cameroun",
    href: "https://www.instagram.com/andal.creative.cmr/",
  },
  {
    label: "Instagram Sénégal",
    country: "Sénégal",
    href: "https://www.instagram.com/andal.creative/",
  },
  {
    label: "Instagram Côte d'Ivoire",
    country: "Côte d'Ivoire",
    href: "https://www.instagram.com/andal.creative_ci/",
  },
] as const;

export const countries = [
  {
    name: "Sénégal",
    city: "Dakar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
  },
  {
    name: "Côte d'Ivoire",
    city: "Abidjan",
    flag: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751464166/Flag_of_Ivory_Coast_2_to_1_ratio_ilxlvq.png",
  },
  {
    name: "Cameroun",
    city: "Douala",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
  },
  {
    name: "France",
    city: "Paris",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  },
] as const;

export const partners = [
  { name: "Betclic", src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461621/t%C3%A9l%C3%A9chargement_onismw.png" },
  { name: "Kapreece", src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461608/t%C3%A9l%C3%A9chargement_ycv3el.jpg" },
  { name: "Africa Global Study", src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461591/t%C3%A9l%C3%A9chargement_1_kgwxjf.png" },
  { name: "Kolo", src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461560/t%C3%A9l%C3%A9chargement_1_xiveff.jpg" },
  { name: "F&W PARIS", src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751464478/t%C3%A9l%C3%A9chargement_2_grbxe7.png" },
  { name: "CeraVe", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395874/logo_1_3_ywe2g7.png" },
  { name: "Adidiar", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395874/logo_1_4_a2iyec.png" },
  { name: "Ciane", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395876/logo_2_2_tq4o1g.png" },
  { name: "HA", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395874/logo_1_2_ljgyer.png" },
  { name: "Laundry Boy", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755396702/logo_3_1_qduvev.png" },
  { name: "Brutlin", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755396702/logo_3_3_i4uarn.png" },
  { name: "Luxury Virgin Hair", src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755396702/logo_3_4_m89dfm.png" },
  {
    name: "Instant Beauty",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247952/Instant_beauty.jpg",
  },
  {
    name: "Green Mobility",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247952/green_mobility.jpg",
  },
  {
    name: "MPT",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247998/MPT.jpg",
  },
  {
    name: "Structura",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247997/structuralogo.jpg",
  },
  {
    name: "TrustAfrica",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247998/trustAfrica.png",
  },
  {
    name: "PAENS",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247998/paens.jpg",
  },
  {
    name: "Atelier Kër",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252500/Atelier_ker.jpg",
  },
] as const;

export const INSTAGRAM_HANDLE = "https://www.instagram.com/andal.creative/";

export type PortfolioKind = "video" | "image";
export type PortfolioCategory = "contenu" | "visuel" | "ads";

export type PortfolioItem = {
  id: string;
  title: string;
  tag: string;
  category: PortfolioCategory;
  kind: PortfolioKind;
  src: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "donatela",
    title: "Donatela Crea",
    tag: "Création de contenu",
    category: "contenu",
    kind: "video",
    src: "https://res.cloudinary.com/jucpyysy/video/upload/v1791248025/donatela.mp4",
  },
  {
    id: "mpt",
    title: "MPT",
    tag: "Création de contenu",
    category: "contenu",
    kind: "video",
    src: "https://res.cloudinary.com/jucpyysy/video/upload/v1791248005/videostructura.mp4",
  },
  {
    id: "contenu-1",
    title: "Création de contenu — 01",
    tag: "Création de contenu",
    category: "contenu",
    kind: "video",
    src: "https://res.cloudinary.com/jucpyysy/video/upload/v1791252518/SaveClip.App_AQOBUawCpFZNULjT1iQjmnjram8idbYEDddbwfA55u2h28elomJTf4efhyVj5MO2syBdXQSIdOHibz6HJYjFVTzHDJBctOcQCRbnVjY_1.mp4",
  },
  {
    id: "contenu-2",
    title: "Création de contenu — 02",
    tag: "Création de contenu",
    category: "contenu",
    kind: "video",
    src: "https://res.cloudinary.com/jucpyysy/video/upload/v1791252515/SaveClip.App_AQP3eXRPWRjTI5Sjdynef7Yj4XX_xT5tubdzAunmh4DhET58J0y6y38BzWciHPlqJN3x5WFHCrGPIhKuePk6SuhefLTv6lzUdKNZMYg.mp4",
  },
  {
    id: "contenu-3",
    title: "Création de contenu — 03",
    tag: "Création de contenu",
    category: "contenu",
    kind: "video",
    src: "https://res.cloudinary.com/jucpyysy/video/upload/v1791252509/SaveClip.App_AQMJoS7VB9TyTO4klDm3MGWu7x1qLvvEFHiAqPO7BTjZ3_57Tjz1lJbyurT7wVkjI8sN_sMG1OIk3zUlt1_sw07yuQR0vAmrc8YU2jQ.mp4",
  },
  {
    id: "ads",
    title: "Campagne ADS",
    tag: "ADS",
    category: "ads",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791247999/Les_campagnes_Ads_ce_n_est_pas_juste_booster_une_publication_.C_est_une_strat%C3%A9gie.Un_ciblage_p.jpg",
  },
  {
    id: "visuel-logo",
    title: "Logo vs branding",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252709/LOGO_VS_BRANDING_D%C3%A9couvrons_ensemble_la_diff%C3%A9rence_dakar_branding_logo_agencedecommunicati.jpg",
  },
  {
    id: "visuel-ocean",
    title: "Ocean Corp",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252709/LOGO_VS_BRANDING_D%C3%A9couvrons_ensemble_la_diff%C3%A9rence_dakar_branding_logo_agencedecommunicati_1.jpg",
  },
  {
    id: "visuel-tkt",
    title: "TKT Packaging",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252708/LOGO_VS_BRANDING_D%C3%A9couvrons_ensemble_la_diff%C3%A9rence_dakar_branding_logo_agencedecommunicati_2.jpg",
  },
  {
    id: "visuel-prisme",
    title: "Prisme",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252708/LOGO_VS_BRANDING_D%C3%A9couvrons_ensemble_la_diff%C3%A9rence_dakar_branding_logo_agencedecommunicati_3.jpg",
  },
  {
    id: "visuel-sala",
    title: "Sala — Viande de bœuf",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252503/%EF%B8%8F_Le_classique_qu_on_ne_pr%C3%A9sente_plus_La_viande_de_b%C5%93uf_%C8%98ALA_un_incontournable_pour_apporte.jpg",
  },
  {
    id: "visuel-mizo",
    title: "Mizo",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252502/Une_saveur_pour_chaque_envie_D%C3%A9couvrez_les_diff%C3%A9rentes_saveurs_Mizo_-_Orange_fruit%C3%A9e_1.jpg",
  },
  {
    id: "visuel-ker-1",
    title: "Atelier Kër — Cuisine",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252501/Et_si_votre_cuisine_pouvait_%C3%AAtre_pens%C3%A9e_autrement_Une_cuisine_ce_n_est_pas_seulement_une_questi.jpg",
  },
  {
    id: "visuel-ker-2",
    title: "Atelier Kër — Détail",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252501/Et_si_votre_cuisine_pouvait_%C3%AAtre_pens%C3%A9e_autrement_Une_cuisine_ce_n_est_pas_seulement_une_questi_2.jpg",
  },
  {
    id: "visuel-ker-3",
    title: "Atelier Kër — Rangements",
    tag: "Visuel",
    category: "visuel",
    kind: "image",
    src: "https://res.cloudinary.com/jucpyysy/image/upload/v1791252501/Et_si_votre_cuisine_pouvait_%C3%AAtre_pens%C3%A9e_autrement_Une_cuisine_ce_n_est_pas_seulement_une_questi_3.jpg",
  },
];

export const portfolioFilters = [
  { id: "all", label: "Tout" },
  { id: "contenu", label: "Création de contenu" },
  { id: "visuel", label: "Visuel" },
  { id: "ads", label: "ADS" },
] as const;
