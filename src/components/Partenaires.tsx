import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

// Styles CSS personnalisés pour supprimer le blanc
const removeWhiteStyles = `
  .remove-white-bg {
    filter: brightness(1.8) contrast(3) saturate(2) hue-rotate(0deg) !important;
    mix-blend-mode: multiply !important;
    background: transparent !important;
  }
  
  .remove-white-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.1) 50%, transparent 70%);
    pointer-events: none;
  }
`;

export const Partenaires = () => {
  // Injection des styles CSS personnalisés
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = removeWhiteStyles;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const logos = [
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461621/t%C3%A9l%C3%A9chargement_onismw.png", name: "Betclic" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461608/t%C3%A9l%C3%A9chargement_ycv3el.jpg", name: "Kapreece" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461591/t%C3%A9l%C3%A9chargement_1_kgwxjf.png", name: "Africa Global Study" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461560/t%C3%A9l%C3%A9chargement_1_xiveff.jpg", name: "Kolo" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751464478/t%C3%A9l%C3%A9chargement_2_grbxe7.png", name: "F&W PARIS" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395874/logo_1_3_ywe2g7.png", name: "Cerave" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395874/logo_1_4_a2iyec.png", name: "Adidiar" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395876/logo_2_2_tq4o1g.png", name: "Ciane" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755395874/logo_1_2_ljgyer.png", name: "HA" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755396702/logo_3_1_qduvev.png", name: "Laundry Boy" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755396702/logo_3_3_i4uarn.png", name: "Brutlin" },
    { src: "https://res.cloudinary.com/dprbhsvxl/image/upload/v1755396702/logo_3_4_m89dfm.png", name: "Luxury Virgin hair" },
  ];

  // Regroupe les logos par 4 pour un affichage en grille 2x2
  const groupedLogos = [];
  for (let i = 0; i < logos.length; i += 4) {
    groupedLogos.push(logos.slice(i, i + 4));
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
      {/* Effet subtil en arrière-plan */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#FBAB3F]/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-[#FBAB3F]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section titre avec poignée de main */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-12 tracking-tight">
            <span className="text-white">Ils nous ont fait</span>
            <br />
            <span className="gradient-text px-6 py-3 rounded-xl shadow-lg inline-block mt-4">
              confiance
            </span>
          </h2>
          
          <div className="w-full mb-12 relative overflow-hidden">
            <div className="relative group">
              <div className="relative w-screen h-auto overflow-hidden">
                {/* <img 
                  src="/images/main.jpg" 
                  alt="Poignée de main élégante" 
                  className="w-screen h-auto object-cover drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    objectPosition: 'center',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '130vw',
                    zIndex: '1',
                    filter: 'brightness(1.2) contrast(1.3) saturate(1.1)',
                    mixBlendMode: 'darken'
                  }}
                /> */}
                {/* Overlay pour masquer le blanc */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"
                  style={{
                    background: 'linear-gradient(45deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                  }}
                />
              </div>
              {/* Effet de bras qui sortent de l'écran */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Carrousel des logos */}
        <div className="relative">
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
          <CarouselContent>
            {groupedLogos.map((group, idx) => (
                <CarouselItem key={idx}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.map((logo, j) => (
                      <div 
                        key={j} 
                        className="group flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-105 hover:bg-white/10 hover:border-[#FBAB3F]/30 min-h-[200px]"
                      >
                                                 <div className="flex flex-col items-center justify-center w-full h-full relative">
                           <div className="flex-1 flex items-center justify-center w-full relative">
                             <div className="w-32 h-32 flex items-center justify-center relative">
                               <img 
                                 src={logo.src} 
                                 alt={logo.name} 
                                 className={`absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto object-contain transform group-hover:scale-110 rounded-xl ${
                                   logo.name === "Laundry Boy" ? "translate-x-[-8px]" : 
                                   logo.name === "Adidiar" ? "translate-x-[8px]" : ""
                                 }`}
                               />
                             </div>
                           </div>
                           <div className="w-full text-center mt-4">
                             <span className={`text-base font-semibold text-white group-hover:text-[#FBAB3F] ${
                               logo.name === "Laundry Boy" ? "translate-x-[-8px]" : ""
                             }`}>{logo.name}</span>
                           </div>
                         </div>
                  </div>
                ))}
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="left-6 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />
            <CarouselNext className="right-6 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />
        </Carousel>
        </div>
      </div>
    </section>
  );
}; 
