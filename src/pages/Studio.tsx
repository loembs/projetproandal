import React from "react";
import { Button } from "@/components/ui/button";

const studioImages = [
  {
    title: "Studio Podcast",
    img: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751385254/Un_r%C3%AAve_devenu_lieu.Bienvenue_chez_Studio_Andal_Creative.Un_espace_o%C3%B9_les_voix_prennent_vie_%EF%B8%8F_o%C3%B9_la_beaut%C3%A9_s_exprime_sans_filtre_et_o%C3%B9_chaque_image_raconte_une_histoire_.Ce_n_est_pas_qu_un_studio.C_est_un_ref_mknp61.jpg", // Remplacer par une image si disponible
    description: "Un espace insonorisé et équipé pour vos podcasts professionnels."
  },
  {
    title: "Studio Shooting",
    img: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751385254/Un_r%C3%AAve_devenu_lieu.Bienvenue_chez_Studio_Andal_Creative.Un_espace_o%C3%B9_les_voix_prennent_vie_%EF%B8%8F_o%C3%B9_la_beaut%C3%A9_s_exprime_sans_filtre_et_o%C3%B9_chaque_image_raconte_une_histoire_.Ce_n_est_pas_qu_un_studio.C_est_un_1_hbjkbi.jpg",
    description: "Un studio photo moderne pour tous vos shootings : portraits, produits, mode..."
  },
  {
    title: "Coin Makeup",
    img: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751385520/Un_r%C3%AAve_devenu_lieu.Bienvenue_chez_Studio_Andal_Creative.Un_espace_o%C3%B9_les_voix_prennent_vie_%EF%B8%8F_o%C3%B9_la_beaut%C3%A9_s_exprime_sans_filtre_et_o%C3%B9_chaque_image_raconte_une_histoire_.Ce_n_est_pas_qu_un_studio.C_est_un_2_mkjkej.jpg",
    description: "Un espace dédié au maquillage professionnel, pour sublimer chaque séance."
  }
];

const studioServices = [
  "Maquillage professionnel",
  "Shooting photo en studio",
  "Enregistrement de podcast",
];

const Studio = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-10">
        <div className="flex justify-center mb-8">
          <img src="/images/ANDAL.png" alt="Logo ANDAL" className="h-20 w-auto" />
        </div>
        <div className="flex justify-center mb-4">
          <a href="/" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold shadow transition">
            ← Retour à l'accueil
          </a>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-yellow-100 via-white to-blue-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight text-center">Notre Studio</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 text-center">
            Découvrez un espace créatif unique à Dakar, pensé pour la production, la beauté et l'innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {studioImages.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-64 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                  {item.img.endsWith('.mp4') ? (
                    <video src={item.img} controls className="object-cover h-full w-full" />
                  ) : (
                    <img src={item.img} alt={item.title} className="object-cover h-full w-full" />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h2 className="text-2xl font-bold mb-2 text-black">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-black mb-6 text-center">Services proposés</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              {studioServices.map((service, idx) => (
                <li key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 px-6 py-4 rounded text-lg text-gray-800 shadow-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              <a href="/grille-tarifaire">
                Voir notre grille tarifaire (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio; 