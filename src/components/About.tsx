import { Button } from "@/components/ui/button";
import { Award, Users, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
                Qui sommes-nous ?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                <strong className="text-blue-600">Andal Creative</strong> est une agence fondée par 
                <strong className="text-yellow-500"> Mourzane Ousmanou</strong>, experte en marketing digital 
                et en production de contenu avec plusieurs années d'expérience et des diplômes reconnus dans le domaine.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Notre mission est de proposer des <strong className="text-black">solutions créatives, 
                innovantes et adaptées aux réalités locales</strong> pour accompagner nos clients dans leur croissance.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold"
            >
              En savoir plus
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="bg-gradient-to-br from-yellow-400 to-blue-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1751396717/Un_r%C3%AAve_devenu_lieu.Bienvenue_chez_Studio_Andal_Creative.Un_espace_o%C3%B9_les_voix_prennent_vie_%EF%B8%8F_o%C3%B9_la_beaut%C3%A9_s_exprime_sans_filtre_et_o%C3%B9_chaque_image_raconte_une_histoire_.Ce_n_est_pas_qu_un_studio.C_est_un_3_zh2cv6.jpg"
                  alt="Photo de l'équipe Andal Creative"
                  className="w-80 h-80 object-cover rounded-2xl shadow-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-black mb-2">Notre équipe</h3>
                <p className="text-blue-600 font-medium text-base text-center">Une équipe passionnée à votre service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
