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
    { label: "Contacts", href: "#footer" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}>
            <img src="/images/ANDALreativenoir.png" alt="Logo ANDAL" className="h-20 w-auto" />
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
                className={`font-medium tracking-wide hover:text-[#FBAB3F] ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/devis"
              className={`px-6 py-2 font-medium tracking-wide rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#FBAB3F] focus:ring-offset-2 focus:ring-offset-white
                ${isScrolled 
                  ? "bg-[#1B03AD] hover:bg-[#150299] text-white" 
                  : "bg-[#FBAB3F] hover:bg-[#e69a2e] text-black"}
              `}
            >
              Prendre rendez-vous 
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl border border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 text-gray-800 hover:text-[#FBAB3F] hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/devis"
              className={`w-full bg-[#1B03AD] hover:bg-[#150299] text-white px-6 py-2 font-medium tracking-wide rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#FBAB3F] focus:ring-offset-2 focus:ring-offset-white`}
            >
              Prendre rendez-vous
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
