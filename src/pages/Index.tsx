import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navigation } from "@/components/Navigation";
import { Partenaires } from "@/components/Partenaires";
import { Presence } from "@/components/Presence";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Presence />
        <About />
        <Services />
        <Portfolio />
        <Partenaires />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
