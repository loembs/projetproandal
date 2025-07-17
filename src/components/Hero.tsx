import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for video - you'll need to upload the actual video file */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-blue-900">
          {/* This is where your video will go once uploaded */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
            poster="/placeholder.svg"
          >
            {/* You'll need to replace this with your actual video file */}
            <source src="https://res.cloudinary.com/dlna2kuo1/video/upload/v1751068418/blog_fpyxrs.mp4" type="video/mp4" />
            <source src="/your-video.webm" type="video/webm" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-wide">
          <span className="block">ANDAL</span>
          <span className="block text-yellow-400 font-bold">CREATIVE</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Créativité & Innovation pour tous vos projets
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <a href="#services"> Découvrir nos services</a>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
            asChild
          >
            <a href="/studio">Découvrir notre studio</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
