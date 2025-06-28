
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
                innovantes et adaptées aux réalités locales</strong> pour accompagner les entreprises 
                sénégalaises dans leur croissance.
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
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-blue-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">MO</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-2">Mourzane Ousmanou</h3>
                  <p className="text-blue-600 font-medium text-lg">Fondatrice & Directrice Créative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
