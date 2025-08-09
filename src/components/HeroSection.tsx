import React from 'react';
import { ArrowDown, ShieldCheck, Clock, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-truck.jpg';

const HeroSection = () => {
  const scrollToPresupuesto = () => {
    const element = document.getElementById('presupuesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 leading-tight">
            Mudanzas nacionales e internacionales
            <span className="block text-accent"> con la máxima confianza</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Más de 20 años ofreciendo un servicio seguro, rápido y profesional
          </p>

          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            Coordinamos cada detalle, protegemos tus pertenencias y te mantenemos informado en cada paso.
          </p>

          <button 
            onClick={scrollToPresupuesto}
            className="btn-hero text-lg md:text-xl animate-float"
          >
            Solicita tu Presupuesto
            <ArrowDown className="inline-block ml-2" size={20} />
          </button>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <ShieldCheck size={32} />,
              title: "Servicio Seguro",
              description: "Protección total de tus pertenencias"
            },
            {
              icon: <Clock size={32} />,
              title: "Respuesta 24h",
              description: "Presupuesto gratis en menos de 24 horas"
            },
            {
              icon: <MapPin size={32} />,
              title: "Cobertura Total",
              description: "España y toda Europa cubierta"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-lg text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-accent mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white opacity-70" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;