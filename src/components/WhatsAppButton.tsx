import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 6000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría solicitar un presupuesto para una mudanza. ¿Pueden ayudarme?"
  );

  const whatsappUrl = `https://wa.me/34642431192?text=${whatsappMessage}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-50 animate-fade-up">
          <div className="glass-accent p-3 rounded-lg shadow-elegant max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-primary/80 transition-colors"
            >
              <X size={12} />
            </button>
            <p className="text-sm text-primary font-medium mb-1">
              💬 ¿Necesitas ayuda?
            </p>
            <p className="text-xs text-muted-foreground">
              Contacta por WhatsApp para un presupuesto rápido
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-accent transition-all duration-300 hover:scale-110 animate-float group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </a>
    </>
  );
};

export default WhatsAppButton;