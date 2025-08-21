import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Camera, 
  Calendar, 
  ArrowRight,
  Code,
  Target,
  Palette,
  Users,
  Building,
  Video,
  Mail,
  BarChart3,
  PenTool,
  Globe,
  Zap,
  Mic,
  Lightbulb
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Stratégie & conseil",
      icon: Target,
      description: "Audit complet et élaboration de stratégies de communication sur mesure pour votre entreprise",
      features: [
        "Audit & plan de communication",
        "Définition d'identité de marque", 
        "Élaboration de stratégie de contenu",
        "Activation de campagnes 360°"
      ]
    },
    {
      title: "Production de contenus",
      icon: Camera,
      description: "Création de contenus visuels et audiovisuels professionnels pour tous vos supports",
      features: [
        "Création de visuels & shootings photo",
        "Réalisation vidéo & motion design",
        "Capsules digitales, interviews, publicités",
        "Création de contenus pour réseaux sociaux"
      ]
    },
    {
      title: "Marketing digital",
      icon: Smartphone,
      description: "Stratégies digitales complètes pour maximiser votre présence en ligne et vos performances",
      features: [
        "Community management",
        "Création et gestion de campagnes sponsorisées (Meta, Google Ads, etc.)",
        "E-mailing & automation marketing",
        "Reporting & analyse des performances",
        "Marketing d'influence "
      ]
    },
    {
      title: "Branding & design",
      icon: Palette,
      description: "Création d'identités visuelles fortes et conception d'expériences utilisateur exceptionnelles",
      features: [
        "Naming & création de logo",
        "Identité visuelle & chartes graphiques",
        "Conception d'outils print et digitaux",
        "Design d'expérience utilisateur (UX/UI)"
      ]
    },
    {
      title: "Développement web & digital",
      icon: Code,
      description: "Solutions web complètes et sur mesure pour tous vos projets digitaux",
      features: [
        "Création de sites vitrine, e-commerce & institutionnels",
        "Développement sur mesure (WordPress, Shopify, Webflow, etc.)",
        "Intégration de solutions de paiement",
        "Maintenance, hébergement & mise à jour",
        "Optimisation SEO & responsive design"
      ]
    },
    {
      title: "Événementiel & expérience de marque",
      icon: Users,
      description: "Organisation d'événements mémorables et création d'expériences de marque uniques",
      features: [
        "Organisation d'événements corporate et culturels",
        "Conception de dispositifs expérientiels",
        "Activation de marque terrain & stands événementiels"
      ]
    },
    {
      title: "Studio créatif intégré",
      subtitle: "(Dakar)",
      icon: Building,
      description: "Espace de création professionnel avec équipements de pointe pour tous vos projets",
      features: [
        "Location de studio photo/vidéo",
        "Espace de maquillage & enregistrement audio",
        "Tournages, interviews, podcasts, branding studio"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden section-transition-scale">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FBAB3F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FBAB3F] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-16 md:mb-24">

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in-up">
            <span className="gradient-text">
            Nos Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Une gamme complète de services <span className="font-semibold text-[#FBAB3F]">innovants</span> et <span className="font-semibold text-[#FBAB3F]">créatifs</span> pour propulser votre marque ou entreprise
          </p>
        </div>
        {/* Services Grid - Mobile-First Design */}
        <div className="space-y-8 md:space-y-12 mb-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card group flex flex-col lg:flex-row items-stretch gap-0 lg:gap-8 p-0 rounded-2xl modern-card shadow-xl hover:shadow-2xl overflow-hidden card-animate ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              {/* Background Media Section - Full width on mobile */}
              <div className="flex-shrink-0 w-full lg:w-2/5 h-48 md:h-64 relative overflow-hidden">
                {/* Background Image/Video */}
                {service.title === "Stratégie & conseil" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <img 
                      src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1755395902/reunion_photo_extraite_ox2lxk.png" 
                      alt="Stratégie et conseil"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                )}
                
                {service.title === "Production de contenus" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <video
                      src="https://res.cloudinary.com/dlna2kuo1/video/upload/v1754577767/crea_contenu_jpdaqj.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                )}
                
                {service.title === "Marketing digital" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Marketing digital"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                )}
                
                {service.title === "Branding & design" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <img 
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Branding et design"
                      className="w-full h-full object-cover opacity-60"
                    />
                    </div>
                )}
                
                {service.title === "Développement web & digital" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Développement web"
                      className="w-full h-full object-cover opacity-60"
                    />
                        </div>
                )}
                
                {service.title === "Événementiel & expérience de marque" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <img 
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Événementiel"
                      className="w-full h-full object-cover opacity-60"
                    />
                    </div>
                )}
                
                {service.title === "Studio créatif intégré" && (
                  <div className="absolute inset-0 bg-[#FBAB3F]/20">
                    <video
                      src="https://res.cloudinary.com/dlna2kuo1/video/upload/v1754577804/studio_unspjq.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60"
                    />
              </div>
                )}
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Service Icon Overlay - Mobile Optimized */}
                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-black icon-animate" />
                </div>
                </div>
                
                {/* Service Number - Mobile Optimized */}
                <div className="absolute top-2 md:top-3 right-2 md:right-3 w-6 h-6 md:w-8 md:h-8 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content Section - Mobile Optimized */}
              <div className="flex-1 p-4 md:p-6">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2 group-hover:text-yellow-600">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-sm md:text-base text-yellow-600 font-medium mb-2 md:mb-3">
                      {service.subtitle}
                    </p>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    {service.description}
                  </p>

                {/* Features List - Mobile Optimized with Stagger */}
                <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                    {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="stagger-item flex items-center space-x-2 md:space-x-3 p-2 rounded-lg bg-gray-50 hover:bg-yellow-50 group/feature"
                    >
                                              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#FBAB3F] rounded-full flex-shrink-0 group-hover/feature:scale-150"></div>
                      <span className="text-xs md:text-sm text-gray-700 group-hover/feature:text-black font-medium">
                        {feature}
                      </span>
                      </div>
                    ))}
                  </div>

                {/* Action Button - Mobile Optimized */}
                  <Button 
                    asChild
                    className="w-full md:w-auto bg-[#FBAB3F] hover:from-yellow-500 hover:to-blue-700 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg group-hover:shadow-lg"
                  >
                    <a 
                      href="https://www.instagram.com/andal.creative/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Découvrir ce service
                      <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1" />
                    </a>
                  </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#FBAB3F] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">
              Prêt à transformer votre entreprise ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Découvrez comment nos services peuvent propulser votre succès
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/devis"
                className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-100"
          >
            Demander un devis personnalisé
          </a>
              <a
                href="#footer"
                className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-white hover:text-black"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
