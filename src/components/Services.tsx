import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Camera, 
  Calendar, 
  ArrowRight
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Marketing Digital",
      icon: Smartphone,
      description: "Stratégie digitale sur mesure, community management, référencement web et création de contenus engageants",
      features: ["Stratégie digitale", "Community management", "Référencement web", "Contenu engageant"]
    },
    {
      title: "Production de Contenu",
      icon: Camera,
      description: "Design graphique, photographie professionnelle et direction artistique pour sublimer votre image",
      features: ["Design graphique", "Photographie pro", "Direction artistique", "Identité visuelle"]
    },
    {
      title: "Organisation d'Événements",
      icon: Calendar,
      description: "Événements d'entreprise, lancements de produit, conférences et événements corporate sur-mesure",
      features: ["Événements corporate", "Lancement produit", "Conférences", "Sur-mesure"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
            Nos Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services pour propulser votre entreprise 
            vers le succès digital et créatif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group h-full"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500">
                      • {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/devis"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-semibold shadow-lg rounded-lg transition"
          >
            Demander un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};
