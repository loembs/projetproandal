import { BarChart3, Heart, MapPin, ThumbsUp } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import { useInView } from "react-intersection-observer";

export const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const stats = [
    {
      icon: BarChart3,
      number: 12,
      suffix: "+",
      label: "Projets Réalisés",
      description: "Des campagnes créatives à fort impact"
    },
    {
      icon: Heart,
      number: 10,
      suffix: "+",
      label: "Clients Satisfaits",
      description: "Marques et institutions de confiance"
    },
    {
      icon: MapPin,
      number: 3,
      suffix: "",
      label: "Pays d'Afrique",
      description: "Présence panafricaine établie"
    },
    {
      icon: ThumbsUp,
      number: 98,
      suffix: "%",
      label: "Taux de Satisfaction",
      description: "Excellence reconnue par nos clients"
    }
  ];

  // Hooks pour les compteurs
  const count1 = useCounter(inView ? stats[0].number : 0, 2000);
  const count2 = useCounter(inView ? stats[1].number : 0, 2000);
  const count3 = useCounter(inView ? stats[2].number : 0, 2000);
  const count4 = useCounter(inView ? stats[3].number : 0, 2000);

  const counts = [count1, count2, count3, count4];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FBAB3F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="gradient-text">ANDAL EN CHIFFRES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Des résultats concrets qui témoignent de notre expertise et de notre engagement
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="modern-card p-8 rounded-2xl text-center group hover-lift-modern card-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#FBAB3F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-white icon-animate" />
              </div>

                             {/* Number */}
               <div className="text-4xl md:text-5xl font-bold text-black mb-2 group-hover:text-yellow-600">
                 {counts[index]}{stat.suffix}
               </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-[#FBAB3F] rounded-2xl p-1">
            <div className="bg-white rounded-xl px-8 py-4">
              <p className="text-lg font-semibold text-gray-800">
                Prêt à rejoindre nos clients satisfaits ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
