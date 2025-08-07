import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Award, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export const Values = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
  }, []);
  const values = [
    {
      title: "Innovation",
      icon: Lightbulb,
      description: "Nous explorons constamment de nouvelles approches créatives et technologiques pour offrir des solutions avant-gardistes."
    },
    {
      title: "Excellence",
      icon: Award,
      description: "Nous nous engageons à livrer des résultats d'exception en maintenant les plus hauts standards de qualité."
    },
    {
      title: "Adaptabilité",
      icon: Zap,
      description: "Nous adaptons nos stratégies aux spécificités locales et aux besoins uniques de chaque client."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black text-white section-transition-right">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
            Nos Valeurs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trois piliers fondamentaux qui guident chacune de nos actions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-6 text-gray-300">
              "Une présence panafricaine
Avec des antennes basées à Dakar, Douala et Abidjan, Andal Creative déploie ses projets à l’échelle régionale, en intégrant les réalités et sensibilités locales.
Nous collaborons avec des marques ambitieuses, africaines et internationales, désireuses de créer des récits puissants, portés par la créativité et enracinés dans leur identité."
            </blockquote>
            <cite className="text-lg font-semibold text-yellow-400">
              — Mourzanatou Ousmanou, Fondatrice
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
