import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useSmoothAnimations } from "@/hooks/use-smooth-animations";
import { useEffect } from "react";

export const About = () => {
  const { elementRef, animateOnScroll } = useSmoothAnimations();

  useEffect(() => {
    // Animation au scroll
    const cleanup = animateOnScroll();
    
    // Section transition observer
    const section = elementRef.current;
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '-50px 0px -50px 0px'
        }
      );

      observer.observe(section);
      
      return () => observer.disconnect();
    }
    
    return cleanup;
  }, []);
  return (
    <section ref={elementRef} id="about" className="py-12 bg-white h-full section-transition-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Content Side */}
          <div className="space-y-8 h-full">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
                Qui sommes-nous ?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                <strong className="text-blue-600">Agence de communication 360°</strong><br />
               Andal Creative est une agence de communication 360° qui accompagne les marques, institutions et porteurs de projets dans la conception, la stratégie et la réalisation de campagnes créatives à fort impact.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Fidèle à son nom <strong className="text-yellow-500">Andal</strong> signifiant le savoir en pulaar l’agence s’appuie sur une <strong className="text-black">maîtrise des codes culturels africains</strong>, une forte expertise terrain et une <strong className="text-black">approche résolument créative</strong> pour valoriser les identités, faire rayonner les marques et stimuler la performance.
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold smooth-transition hover-lift"
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
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center h-full shadow-xl">
              {/* Team Image Container */}
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Team Image */}
                <div className="relative z-10 text-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-2xl p-8 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-black mb-2">Notre Équipe</h3>
                      <p className="text-blue-600 font-medium text-base">Professionnels passionnés</p>
                      <p className="text-gray-600 text-sm mt-2">Experts en communication créative</p>
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
