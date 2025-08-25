import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Mudanzas España', id: 'espana' },
    { label: 'Mudanzas Europa', id: 'europa' },
    { label: 'Preguntas Frecuentes', id: 'faqs' },
    { label: 'Solicitar Presupuesto', id: 'presupuesto' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">
              Mudanzas Marín EU
            </h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Más de 20 años ofreciendo servicios de mudanzas nacionales e internacionales 
              con la máxima profesionalidad y confianza.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://wa.me/34642431192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="tel:642431192"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Teléfono"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:info@mudanzamarin.com"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Mudanzas locales</li>
              <li>• Mudanzas nacionales</li>
              <li>• Mudanzas internacionales</li>
              <li>• Embalaje profesional</li>
              <li>• Desmontaje y montaje</li>
              <li>• Seguros de transporte</li>
              <li>• Guardamuebles</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:642431192" className="text-sm hover:text-accent transition-colors">
                    642 431 192
                  </a>
                  <div className="text-xs opacity-75">L-V: 8:00-18:00</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@mudanzamarin.com" className="text-sm hover:text-accent transition-colors">
                    info@mudanzamarin.com
                  </a>
                  <div className="text-xs opacity-75">Respuesta &lt; 24h</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm">España y Europa</div>
                  <div className="text-xs opacity-75">Cobertura completa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-75">
              © {currentYear} Mudanzas Marín EU. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/privacidad" className="opacity-75 hover:opacity-100 hover:text-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="opacity-75 hover:opacity-100 hover:text-accent transition-colors">
                Términos de Servicio
              </a>
              <a href="/aviso-legal" className="opacity-75 hover:opacity-100 hover:text-accent transition-colors">
                Aviso Legal
              </a>
              <a href="/cookies" className="opacity-75 hover:opacity-100 hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-white/10">
            <p className="text-xs opacity-60">
              Empresa registrada para servicios de mudanzas nacionales e internacionales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;