import { useState, useEffect } from "react";
import { Button } from "./button";
import { Download, X, Info } from "lucide-react";

interface BrochureToastProps {
  message: string;
  cta?: string;
  delay?: number;
  onDownload?: () => void;
}

export const BrochureToast = ({ 
  message, 
  cta = "Télécharger", 
  delay = 5000, 
  onDownload 
}: BrochureToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isDismissed]);

  const handleDownload = () => {
    onDownload?.();
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-up">
      <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-5 max-w-sm transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FBAB3F] to-[#e69a2e] rounded-full flex items-center justify-center shadow-lg">
              <Download className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium">{message}</p>
            
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-[#FBAB3F] hover:bg-[#e69a2e] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                {cta}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200"
                onClick={handleDismiss}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
