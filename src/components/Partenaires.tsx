import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Partenaires = () => {
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
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section titre avec poignée de main */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-12 tracking-tight animate-fade-in-up">
            <span className="text-white">ils nous ont fait</span>
            <br />
            <span className="gradient-text px-6 py-3 rounded-xl shadow-lg inline-block mt-4">
              confiance
            </span>
          </h2>
          
          <div className="w-full mb-12 relative">
            <div className="relative group">
              <img 
                src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1755190598/Poign%C3%A9e_de_main_%C3%A9l%C3%A9gante-removebg-preview_mbpbrx.png" 
                alt="Poignée de main élégante" 
                className="w-screen h-auto object-cover drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                style={{ 
                  objectPosition: 'center',
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '110vw',
                  zIndex: '-1'
                }}
              />
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
                        className="group flex flex-col items-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-yellow-400/30"
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.name} 
                          className="h-32 w-32 object-contain mb-3 transition-all duration-300 transform group-hover:scale-110 rounded-xl" 
                        />
                        <span className="text-base font-semibold text-white text-center group-hover:text-yellow-400 transition-colors duration-300">{logo.name}</span>
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