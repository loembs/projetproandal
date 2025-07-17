import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CarouselConfiance } from "@/components/Portfolio";
import { Flag } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-tight drop-shadow-lg">
          Présents dans 3 pays d'Afrique
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {countries.map((country, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-64 transition-transform hover:scale-105">
              <img src={country.flag} alt={country.name + ' drapeau'} className="h-16 w-24 object-contain mb-4 rounded shadow" />
              <span className="text-2xl font-bold text-gray-800 mb-2">{country.name}</span>
              <span className="text-lg text-gray-500">{country.city}</span>
            </div>
          ))}
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <CarouselConfiance />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
