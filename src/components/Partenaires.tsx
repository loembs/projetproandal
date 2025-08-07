import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Partenaires = () => {
  const logos = [
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461621/t%C3%A9l%C3%A9chargement_onismw.png", name: "Betclic" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461608/t%C3%A9l%C3%A9chargement_ycv3el.jpg", name: "Kapreece" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461591/t%C3%A9l%C3%A9chargement_1_kgwxjf.png", name: "Africa Global Study" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461560/t%C3%A9l%C3%A9chargement_1_xiveff.jpg", name: "Kolo" },
    { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751464478/t%C3%A9l%C3%A9chargement_2_grbxe7.png", name: "F&W PARIS" },
  ];

  // Regroupe les logos par 3
  const groupedLogos = [];
  for (let i = 0; i < logos.length; i += 3) {
    groupedLogos.push(logos.slice(i, i + 3));
  }

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight drop-shadow-lg">Ils nous ont fait confiance</h2>
      <div className="max-w-5xl mx-auto relative px-2">
        <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 2500 })]}>
          <CarouselContent>
            {groupedLogos.map((group, idx) => (
              <CarouselItem key={idx} className="flex justify-center items-center gap-8">
                {group.map((logo, j) => (
                  <div key={j} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105 border border-gray-100 w-64 mx-auto">
                    <img src={logo.src} alt={logo.name} className="h-32 w-32 object-contain mb-6 transition duration-300 rounded-lg shadow-md transform hover:scale-110" />
                    <span className="mt-2 text-xl font-semibold text-gray-700 text-center drop-shadow-sm">{logo.name}</span>
                  </div>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}; 