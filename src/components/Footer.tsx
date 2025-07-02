import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Instagram, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">
              <img src="/images/ANDAL.png" alt="Logo ANDAL" className="h-12 w-auto inline" />
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-lg">
              Votre partenaire créatif pour transformer votre vision en réalité digitale. 
              Nous vous accompagnons vers l'excellence.
            </p>
            <div className="flex space-x-4">
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <a href="https://www.instagram.com/andal.creative.cmr/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" /> Cameroun
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <a href="https://www.instagram.com/andal.creative/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" /> Sénégal
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="sm"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <a href="https://www.instagram.com/andal.creative_ci/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" /> Côte d'Ivoire
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Production de Contenu</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Événements</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>+221 782800808</li>
              <li>contact@andalcreative.com</li>
              <li>Dakar, Sénégal</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© 2024 Andal Creative. Fait </span>
            <span>au Sénégal</span>
          </div>
          
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            size="sm"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Retour en haut
          </Button>
        </div>
      </div>
    </footer>
  );
};
