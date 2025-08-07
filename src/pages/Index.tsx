import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Stats } from "@/components/Stats";
import { Partenaires } from "@/components/Partenaires";
import { Flag, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const countries = [
  {
    name: "Sénégal",
    city: "Dakar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
  },
  {
    name: "Cameroun",
    city: "Douala",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
  },
  {
    name: "Côte d'Ivoire",
    city: "Abidjan",
    flag: "https://res.cloudinary.com/dlna2kuo1/image/upload/v1751464166/Flag_of_Ivory_Coast_2_to_1_ratio_ilxlvq.png"
  }
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const countriesSectionRef = useRef<HTMLElement>(null);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Section transitions
  useEffect(() => {
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

    if (countriesSectionRef.current) {
      observer.observe(countriesSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <section ref={countriesSectionRef} className="py-16 bg-gradient-to-br from-yellow-50 via-white to-blue-50 section-transition">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-tight drop-shadow-lg">
          Présents dans 3 pays d'Afrique
        </h2>
        
        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Carousel Track */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-48 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50">
              {countries.map((country, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${
                    idx === currentIndex
                      ? 'opacity-100 transform translate-x-0 scale-100'
                      : idx === (currentIndex - 1 + countries.length) % countries.length
                      ? 'opacity-0 transform -translate-x-full scale-95'
                      : 'opacity-0 transform translate-x-full scale-95'
                  }`}
                >
                  {/* Flag Container with Wave Effect */}
                  <div className="relative mb-6">
                    <div className="w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg p-2">
                      <img 
                        src={country.flag} 
                        alt={country.name + ' drapeau'} 
                        className="w-full h-full object-cover rounded-md shadow-sm flag-wave" 
                      />
                    </div>
                    {/* Flag Pole */}
                    <div className="absolute -left-2 top-0 w-1 h-20 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-md"></div>
                    {/* Flag Shadow */}
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-black/10 rounded-full blur-sm"></div>
                  </div>
                  
                  <span className="text-2xl font-bold text-gray-800 mb-2">{country.name}</span>
                  <span className="text-lg text-gray-500">{country.city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {countries.map((_, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? 'bg-gradient-to-r from-yellow-400 to-blue-600 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
              <About />
                <Services />
        <Stats />
        <Partenaires />
        <Values />
        <Contact />
      <Footer />
    </div>
  );
};

export default Index;
