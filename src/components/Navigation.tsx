import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}>
            <img src="/images/typo.png" alt="Logo ANDAL" className="h-20 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.href);
                }}
                className={`font-medium tracking-wide smooth-transition hover:text-yellow-400 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/devis"
              className={`px-6 py-2 font-medium tracking-wide smooth-transition hover-lift rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white
                ${isScrolled 
                  ? "bg-black hover:bg-gray-800 text-white" 
                  : "bg-yellow-400 hover:bg-yellow-500 text-black"}
              `}
            >
              prendre rendez-vous 
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden smooth-transition ${
              isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl border border-gray-100 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 text-gray-800 hover:text-yellow-400 hover:bg-gray-50 smooth-transition"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="/devis"
                className={`w-full bg-black hover:bg-gray-800 text-white px-6 py-2 font-medium tracking-wide smooth-transition hover-lift rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white`}
              >
                Devis gratuit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
