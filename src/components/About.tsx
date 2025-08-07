import { Button } from "@/components/ui/button";
import { Award, Users, Target, Sparkles } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useSmoothAnimations } from "@/hooks/use-smooth-animations";
import { useEffect, useRef } from "react";

export const About = () => {
  const { elementRef, animateOnScroll } = useSmoothAnimations();
  const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
    // Animation au scroll
    const cleanup = animateOnScroll();
    
    // Initialize letters
    const logo = logoRef.current;
    if (logo) {
      console.log('Logo found, initializing letters...');
      const letters = logo.querySelectorAll('.letter');
      console.log('Found letters:', letters.length);
    }
    
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
    
    // Logo text animation
    if (logo) {
      console.log('Setting up logo animation...');
      
      const animateLogo = () => {
        console.log('Animation starting...');
        
        // Get all letters
        const letters = logo.querySelectorAll('.letter');
        console.log('Found letters:', letters.length);
        
        // Reset all letters by removing animate class
        letters.forEach((letter) => {
          (letter as HTMLElement).classList.remove('animate');
        });
        
        // Force reflow to ensure reset is applied
        logo.offsetHeight;
        
        // Animate letters one by one
        letters.forEach((letter, index) => {
          setTimeout(() => {
            console.log(`Animating letter ${index + 1}`);
            (letter as HTMLElement).classList.add('animate');
          }, index * 400);
        });
      };
      
      // Trigger animation when section comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('About section is visible, starting animation...');
            // Small delay to ensure the section is fully visible
            setTimeout(() => {
              animateLogo();
            }, 200);
          }
        });
      }, { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before
      });
      
      observer.observe(logo);
      
      // Trigger animation immediately on page load
      setTimeout(() => {
        console.log('Triggering initial animation...');
        animateLogo();
      }, 300);
      
      return () => {
        observer.disconnect();
      };
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

          {/* Logo Animation Side */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center h-full">
              {/* Logo Animation Container */}
              <div className="relative w-99 h-99 flex items-center justify-center">
                {/* Main Logo with Switch Animation */}
                <div className="relative z-10 text-center">
                  <div className="logo-container mb-6">
                    <div 
                      ref={logoRef}
                      className="text-8xl md:text-9xl font-bold tracking-wide logo-text whitespace-nowrap"
                      style={{
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer'
                      }}
                    >
                      <span className="letter" data-letter="A">A</span>
                      <span className="letter" data-letter="N">N</span>
                      <span className="letter" data-letter="D">D</span>
                      <span className="letter" data-letter="A">A</span>
                      <span className="letter" data-letter="L">L</span>
                    </div>
                  </div>
                  {/* Tagline */}
                  <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h3 className="text-2xl font-semibold text-black mb-2">Creative</h3>
                    <p className="text-blue-600 font-medium text-base">Le savoir au service de votre réussite</p>
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
