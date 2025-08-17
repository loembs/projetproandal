import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-blue-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://res.cloudinary.com/dlna2kuo1/video/upload/v1751068418/blog_fpyxrs.mp4" type="video/mp4" />
            <source src="/your-video.webm" type="video/webm" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-wide">
                  <img
          src="/images/andalblanc.png"
          alt="ANDAL"
          className="block h-80 md:h-74 w-auto mx-auto mb-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        />
          <span className="block gradient-text font-bold -mt-32 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>CREATIVE</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Créativité & Innovation pour tous vos projets
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-semibold btn-animate"
          >
            <a href="#services"> Découvrir nos services</a>
            <ArrowRight className="ml-1 w-5 h-5 icon-animate" />
          </Button>
        
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold btn-animate"
            asChild
          >
            <a href="/studio">Découvrir notre studio</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};
