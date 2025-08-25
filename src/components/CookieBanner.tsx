import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('analyticalCookies', 'true');
    localStorage.setItem('functionalCookies', 'true');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('analyticalCookies', 'false');
    localStorage.setItem('functionalCookies', 'false');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleToggleCookie = (type: string, value: boolean) => {
    localStorage.setItem(type, value.toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50 animate-fade-in">
      <div className="glass-accent max-w-2xl w-full rounded-2xl shadow-elegant animate-fade-up">
        {!showSettings ? (
          // Main cookie banner
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                <Cookie className="text-accent" size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  🍪 Utilizamos cookies
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Utilizamos cookies esenciales para el funcionamiento del sitio web y cookies opcionales para análisis y mejora de la experiencia. 
                  Puede gestionar sus preferencias en cualquier momento.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleAcceptAll}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                  >
                    ✅ Aceptar todas
                  </Button>
                  
                  <Button 
                    onClick={handleRejectAll}
                    variant="outline"
                    className="border-muted-foreground/20"
                  >
                    ❌ Rechazar opcionales
                  </Button>
                  
                  <Button 
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    className="text-primary hover:bg-primary/10"
                  >
                    <Settings size={16} className="mr-2" />
                    Personalizar
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-3">
                  Al continuar navegando acepta nuestra{' '}
                  <a href="/cookies" className="text-accent hover:underline">
                    Política de Cookies
                  </a>
                </p>
              </div>
              
              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="sm"
                className="flex-shrink-0 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        ) : (
          // Cookie settings panel
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary">
                Configuración de Cookies
              </h3>
              <Button
                onClick={() => setShowSettings(false)}
                variant="ghost"
                size="sm"
              >
                <X size={20} />
              </Button>
            </div>
            
            <div className="space-y-4 mb-6">
              {/* Essential cookies */}
              <div className="glass p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-primary">Cookies Esenciales</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Siempre activas
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Necesarias para el funcionamiento básico del sitio web.
                </p>
              </div>
              
              {/* Functional cookies */}
              <CookieToggle
                title="Cookies Funcionales"
                description="Mejoran la funcionalidad y personalización del sitio."
                storageKey="functionalCookies"
                onToggle={handleToggleCookie}
              />
              
              {/* Analytical cookies */}
              <CookieToggle
                title="Cookies Analíticas"
                description="Nos ayudan a entender cómo los visitantes interactúan con el sitio."
                storageKey="analyticalCookies"
                onToggle={handleToggleCookie}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleSavePreferences}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Guardar Preferencias
              </Button>
              
              <Button 
                onClick={handleAcceptAll}
                variant="outline"
              >
                Aceptar Todas
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CookieToggle = ({ 
  title, 
  description, 
  storageKey, 
  onToggle 
}: { 
  title: string; 
  description: string; 
  storageKey: string; 
  onToggle: (key: string, value: boolean) => void; 
}) => {
  const [isEnabled, setIsEnabled] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored === 'true';
  });

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onToggle(storageKey, newValue);
  };

  return (
    <div className="glass p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-primary">{title}</h4>
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isEnabled ? 'bg-accent' : 'bg-muted-foreground/20'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default CookieBanner;