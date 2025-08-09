import React from 'react';
import { Award, Users, Truck, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "20+", label: "Años de experiencia", icon: <Award size={32} /> },
    { number: "5000+", label: "Mudanzas realizadas", icon: <Truck size={32} /> },
    { number: "98%", label: "Clientes satisfechos", icon: <Heart size={32} /> },
    { number: "15", label: "Países europeos", icon: <Users size={32} /> }
  ];

  const values = [
    {
      title: "Confianza",
      description: "Más de dos décadas construyendo relaciones duraderas con nuestros clientes."
    },
    {
      title: "Profesionalidad",
      description: "Equipo especializado y flota propia para garantizar el mejor servicio."
    },
    {
      title: "Transparencia",
      description: "Presupuestos claros sin sorpresas, comunicación constante durante el proceso."
    },
    {
      title: "Seguridad",
      description: "Protocolos estrictos y seguros completos para proteger tus pertenencias."
    }
  ];

  return (
    <section id="sobre-nosotros" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-6">
            Sobre Mudanzas Marín EU
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fundada en el año 2003, Mudanzas Marín EU nació con la visión de ofrecer servicios 
            de mudanzas que combinen la máxima profesionalidad con un trato cercano y personalizado.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center glass p-6 rounded-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-accent mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
              Nuestra Historia
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lo que comenzó como una pequeña empresa familiar se ha convertido en uno de los 
                referentes en mudanzas nacionales e internacionales, manteniendo siempre nuestros 
                valores fundacionales: <strong className="text-primary">confianza, calidad y compromiso</strong>.
              </p>
              
              <p>
                Nuestro crecimiento ha sido constante y sostenido, ampliando gradualmente nuestros 
                servicios para cubrir toda España y los principales países europeos. Cada mudanza 
                es única, y por eso adaptamos nuestro servicio a las necesidades específicas de cada cliente.
              </p>
              
              <p>
                Contamos con un <strong className="text-primary">equipo altamente cualificado</strong> y 
                una <strong className="text-primary">flota propia de vehículos modernos</strong>, 
                lo que nos permite garantizar la máxima calidad en cada servicio.
              </p>
            </div>

            <div className="mt-8 glass-accent p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">Nuestro compromiso</h4>
              <p className="text-sm text-muted-foreground">
                "Cada mudanza es un nuevo hogar, un nuevo comienzo. Nuestro trabajo es hacer que 
                ese momento sea lo más fácil y seguro posible para nuestros clientes."
              </p>
              <div className="text-right mt-3 text-sm font-medium text-primary">
                - Equipo Mudanzas Marín EU
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
              Nuestros Valores
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="glass p-4 rounded-lg animate-fade-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-accent p-8 rounded-xl">
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
              ¿Preparado para tu próxima mudanza?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a los miles de clientes que han confiado en nosotros para sus mudanzas
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('presupuesto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero"
            >
              Solicitar presupuesto ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;