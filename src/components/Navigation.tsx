import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'España', id: 'espana' },
    { label: 'Europa', id: 'europa' },
    { label: 'F&Qs', id: 'faqs' },
    { label: 'Presupuesto', id: 'presupuesto' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <span className="text-center sm:text-left">📞 Presupuesto gratis en menos de 24h</span>
          <div className="flex items-center space-x-4">
            <a href="tel:642431192" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>642 431 192</span>
            </a>
            <a href="mailto:info@mudanzamarin.com" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">info@mudanzamarin.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-xl font-playfair font-semibold text-primary hover:text-accent transition-colors"
              >
                Mudanzas Marín EU
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-accent"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;