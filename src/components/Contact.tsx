
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Parlons de votre projet et créons ensemble quelque chose d'exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Téléphone</h3>
                  <p className="text-gray-600">+221 782800808</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Email</h3>
                  <p className="text-gray-600">contact@andalcreative.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Adresse</h3>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Nom" 
                    className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>
                <Input 
                  placeholder="Sujet" 
                  className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                />
                <Textarea 
                  placeholder="Votre message" 
                  rows={5}
                  className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white text-lg font-semibold py-4"
                >
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
