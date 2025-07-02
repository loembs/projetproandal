import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

const logos = [
  { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461621/t%C3%A9l%C3%A9chargement_onismw.png", name: "Betclic" },
  { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461608/t%C3%A9l%C3%A9chargement_ycv3el.jpg", name: "Kapreece" },
  { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461591/t%C3%A9l%C3%A9chargement_1_kgwxjf.png", name: "Africa Global Study" },
  { src: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751461560/t%C3%A9l%C3%A9chargement_1_xiveff.jpg", name: "Kolo" },
  // Ajoute ici d'autres entreprises si besoin
];

export const Portfolio = () => {
  const projects = [
    {
      title: "Campagne Digitale",
      category: "Marketing Digital",
      description: "Stratégie complète pour startup tech sénégalaise",
      image: "/images/portefolio/porte1.jpg"
    },
    {
      title: "Shooting Produit",
      category: "Production de Contenu",
      description: "Direction artistique pour marque de mode locale",
      image: "/images/portefolio/porte2.jpg"
    },
    {
      title: "Lancement Produit",
      category: "Événements",
      description: "Organisation complète d'événement de lancement",
      image: "/images/portefolio/porte3.jpg"
    },
    {
      title: "Identité Visuelle",
      category: "Design",
      description: "Création d'identité complète pour restaurant",
      image: "/images/portefolio/porte4.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
            Notre Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos réalisations qui ont permis à nos clients 
            de briller et de se démarquer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                  {project.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold"
          >
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export const CarouselConfiance = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight drop-shadow-lg">Ils nous ont fait confiance</h2>
      <div className="max-w-5xl mx-auto relative px-2">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {logos.map((logo, idx) => (
              <CarouselItem key={idx} className="flex justify-center py-8">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105 border border-gray-100 w-80 mx-auto">
                  <img src={logo.src} alt={logo.name} className="h-44 w-44 object-contain mb-6 transition duration-300 rounded-lg shadow-md" />
                  <span className="mt-2 text-xl font-semibold text-gray-700 text-center drop-shadow-sm">{logo.name}</span>
                </div>
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
