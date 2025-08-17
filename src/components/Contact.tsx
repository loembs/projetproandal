
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'packaging',
      title: 'Purôhka - Complément Alimentaire',
      description: 'Design de packaging premium pour complément alimentaire au collagène marin. Étui élégant avec finitions dorées et typographie sophistiquée.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755400248/T02_oz0vdf.png',
      tags: ['Packaging', 'Complément alimentaire', 'Collagène', 'Premium']
    },
    {
      id: 2,
      category: 'web-design',
      title: 'Site Web - Design Moderne',
      description: 'Interface utilisateur moderne avec design épuré, navigation intuitive et expérience utilisateur optimisée pour tous les appareils.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401943/Capture_d_%C3%A9cran_2025-08-17_033840_yrb6d6.png',
      tags: ['Web Design', 'Interface', 'Responsive', 'UX/UI']
    },
    {
      id: 3,
      category: 'web-design',
      title: 'Application Web - UX/UI',
      description: 'Design d\'application web avec interface utilisateur intuitive, wireframes détaillés et maquettes interactives pour une expérience optimale.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401872/Capture_d_%C3%A9cran_2025-08-17_031750_h6q1xf.png',
      tags: ['Web Design', 'UX/UI', 'Application', 'Wireframes']
    },
    {
      id: 4,
      category: 'print',
      title: 'Sweeties - Print & Editorial Design',
      description: 'Cartes de visite et cartes de fidélité pour pâtisserie avec design gourmand, couleurs chaudes et typographie appétissante.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755400248/T01_iuyo2o.png',
      tags: ['Print', 'Cartes de visite', 'Fidélité', 'Pâtisserie']
    },
    {
      id: 5,
      category: 'packaging',
      title: 'Purôhka - Boîte de Présentation',
      description: 'Boîte de présentation luxueuse pour complément alimentaire avec design premium, finitions métalliques et packaging d\'exception.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755400247/T04_xfkd9z.png',
      tags: ['Packaging', 'Boîte', 'Premium', 'Luxury']
    },
    {
      id: 6,
      category: 'packaging',
      title: 'Ciane - Flacon Élégant',
      description: 'Flacon de produit cosmétique avec design épuré, forme ergonomique et étiquette sophistiquée pour une expérience premium.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755400247/T03_gzws2l.png',
      tags: ['Packaging', 'Cosmétique', 'Flacon', 'Élégant']
    },
    {
      id: 7,
      category: 'print',
      title: 'Polo - Design Textile',
      description: 'Design de polo personnalisé avec logo brodé, motifs géométriques modernes et couleurs harmonieuses pour une identité de marque forte.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401873/polo_w1hxxf.png',
      tags: ['Print', 'Textile', 'Polo', 'Broderie']
    },
    {
      id: 8,
      category: 'creation-de-contenu',
      title: 'Réseaux Sociaux - Stratégie Marketing',
      description: 'Campagne de contenu pour réseaux sociaux avec résultats exceptionnels : augmentation de 150% de l\'engagement et 200% de nouveaux abonnés.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401872/reseauresultats02_ujlmo1.png',
      tags: ['Création de contenu', 'Réseaux sociaux', 'Performance', 'Engagement']
    },
    {
      id: 9,
      category: 'creation-de-contenu',
      title: 'Campagne Digital - Performance',
      description: 'Gestion de campagnes publicitaires avec analyse détaillée des performances : ROI de 300% et conversion optimisée sur tous les canaux.',
      image: 'https://res.cloudinary.com/dprbhsvxl/image/upload/v1755401872/reseauresultats01_p6dhya.png',
      tags: ['Création de contenu', 'Campagne', 'ROI', 'Conversion']
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'print', name: 'Print Design' },
    { id: 'creation-de-contenu', name: 'Création de Contenu' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

    useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Animer les cartes du portfolio
            const cards = entry.target.querySelectorAll('.portfolio-item');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 50);
            });
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

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 section-transition">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
            Notre Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos réalisations créatives et innovantes
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 btn-dynamic ${
                selectedCategory === category.id
                  ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500'
                  : 'border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-yellow-400'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Grille Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="group bg-white shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 portfolio-item dynamic-hover" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="relative overflow-hidden">
                {item.category === 'web-design' ? (
                  // Simulation d'ordinateur pour les projets web
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
                      {/* Barre de titre de l'ordinateur */}
                      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-400 text-xs">Chrome</div>
                      </div>
                      {/* Écran de l'ordinateur */}
                      <div className="h-full bg-white">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 img-dynamic"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Affichage normal pour les autres projets
                  <div className="aspect-square bg-gradient-to-br from-yellow-100 to-blue-100 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 img-dynamic"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Eye className="w-4 h-4 mr-2" />
                      Voir
                    </Button>
                    <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600 transition-colors text-dynamic">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-black hover:bg-gray-800 text-white text-lg font-semibold py-4 px-8 rounded-full"
          >
            Voir tous nos projets
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
