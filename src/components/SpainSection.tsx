import React from 'react';
import { Truck, Package, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import spainImage from '@/assets/spain-moving.jpg';

const SpainSection = () => {
  const advantages = [
    {
      icon: <Clock size={24} />,
      title: "Rapidez garantizada",
      description: "Entregas puntuales en toda España"
    },
    {
      icon: <Package size={24} />,
      title: "Embalaje profesional",
      description: "Materiales de primera calidad"
    },
    {
      icon: <Shield size={24} />,
      title: "Transporte seguro",
      description: "Seguros completos incluidos"
    },
    {
      icon: <Users size={24} />,
      title: "Equipo experto",
      description: "Personal cualificado y uniformado"
    }
  ];

  return (
    <section id="espana" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-6">
              Mudanzas en España
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ofrecemos servicios de mudanzas locales y provinciales por toda España con la máxima 
              profesionalidad. Desde mudanzas de viviendas particulares hasta traslados de oficinas, 
              nos adaptamos a tus necesidades específicas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-accent mt-1">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-accent p-6 rounded-lg">
              <h3 className="font-semibold text-primary mb-3 flex items-center">
                <CheckCircle className="text-accent mr-2" size={20} />
                Incluido en nuestro servicio
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Evaluación gratuita del volumen</li>
                <li>• Embalaje y desembalaje profesional</li>
                <li>• Desmontaje y montaje de muebles</li>
                <li>• Seguro de transporte incluido</li>
                <li>• Seguimiento en tiempo real</li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={spainImage}
                alt="Mudanzas profesionales en España - Equipo de Mudanzas Marín"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpainSection;