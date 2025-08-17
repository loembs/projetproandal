import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export const About = () => {
  return (
    <section id="about" className="py-12 bg-white h-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Content Side */}
          <div className="space-y-8 h-full animate-slide-in-left">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
                Qui sommes-nous ?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                <strong className="text-blue-600">Agence de communication 360°</strong><br />
               Andal Creative est une agence de communication 360° qui accompagne les marques, institutions et porteurs de projets dans la conception, la stratégie et la réalisation de campagnes créatives à fort impact.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Fidèle à son nom <strong className="text-yellow-500">Andal</strong> signifiant "le savoir" en pulaar l'agence s'appuie sur une <strong className="text-black">maîtrise des codes culturels africains</strong>, une forte expertise terrain et une <strong className="text-black">approche résolument créative</strong> pour valoriser les identités, faire rayonner les marques et stimuler la performance.
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold btn-animate"
                >
                  En savoir plus
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 bg-transparent border-0 shadow-none flex items-center justify-center min-h-[70vh]">
                <iframe
                  src="/images/ANDAL CREATIVE PRESENTATION.pdf"
                  title="Présentation Andal Creative"
                  className="w-full h-[70vh] rounded-xl shadow-2xl bg-white"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Team Image Side */}
          <div className="relative flex flex-col items-center justify-center h-full animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center h-full shadow-xl relative overflow-hidden card-animate">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1755394548/photo_d_%C3%A9quipe_zs7imc.jpg" 
                  alt="photo d'équipe en arrière-plan"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              {/* Team Image Container */}
              <div className="relative w-full h-96 flex items-center justify-center z-10">
                {/* Team Image */}
                <div className="relative z-10 text-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-2xl p-8 flex items-center justify-center shadow-lg backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                      <img 
                        src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1755394548/photo_d_%C3%A9quipe_zs7imc.jpg" 
                        alt="photo d'équipe"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
