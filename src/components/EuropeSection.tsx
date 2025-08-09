import React from 'react';
import { Globe, FileText, Truck, Phone } from 'lucide-react';
import europeImage from '@/assets/europe-map.jpg';

const EuropeSection = () => {
  const countries = [
    "🇫🇷 Francia", "🇩🇪 Alemania", "🇮🇹 Italia", "🇵🇹 Portugal",
    "🇳🇱 Países Bajos", "🇧🇪 Bélgica", "🇨🇭 Suiza", "🇦🇹 Austria",
    "🇱🇺 Luxemburgo", "🇬🇧 Reino Unido", "🇮🇪 Irlanda", "🇩🇰 Dinamarca"
  ];

  const services = [
    {
      icon: <Globe size={32} />,
      title: "Rutas habituales",
      description: "Conexiones regulares con principales ciudades europeas"
    },
    {
      icon: <FileText size={32} />,
      title: "Gestión de trámites",
      description: "Nos ocupamos de toda la documentación aduanera"
    },
    {
      icon: <Truck size={32} />,
      title: "Transporte directo",
      description: "Sin transbordos, directo a tu destino"
    },
    {
      icon: <Phone size={32} />,
      title: "Seguimiento 24/7",
      description: "Control total durante todo el trayecto"
    }
  ];

  return (
    <section id="europa" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-6">
            Mudanzas en Europa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conectamos España con toda Europa. Nuestras rutas establecidas y nuestra experiencia 
            en trámites internacionales garantizan mudanzas sin complicaciones por todo el continente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={europeImage}
                alt="Mapa de rutas de mudanzas por Europa - Mudanzas Marín"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
          </div>

          {/* Countries grid */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
              Países que cubrimos
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className="glass p-3 rounded-lg text-center text-sm font-medium hover:glass-accent transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center glass p-6 rounded-lg hover:glass-accent transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-accent mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 glass-accent p-8 rounded-xl animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
            ¿Mudanza internacional? Te ayudamos con todo
          </h3>
          <p className="text-muted-foreground mb-6">
            Gestión completa de documentación, seguros internacionales y coordinación puerta a puerta
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('presupuesto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Solicitar presupuesto internacional
          </button>
        </div>
      </div>
    </section>
  );
};

export default EuropeSection;