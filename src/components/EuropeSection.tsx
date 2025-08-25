import React from 'react';
import { CheckCircle } from 'lucide-react';
import europeImage from '@/assets/europe-map.jpg';

const EuropeSection = () => {
  const serviceTypes = [
    {
      emoji: "🔹",
      title: "Residencias particulares",
      description: "Traslado completo o parcial de hogares dentro del espacio europeo."
    },
    {
      emoji: "🔹",
      title: "Mudanzas de oficinas y empresas",
      description: "Organización logística para traslados empresariales entre países."
    },
    {
      emoji: "🔹",
      title: "Mudanzas especiales o combinadas",
      description: "Coordinamos rutas y fechas para aprovechar desplazamientos programados y optimizar costes."
    }
  ];

  const services = [
    {
      title: "Transporte por carretera a cualquier país de Europa."
    },
    {
      title: "Transporte marítimo si el destino o volumen lo requiere."
    },
    {
      title: "Embalaje especializado para viajes largos y objetos delicados."
    },
    {
      title: "Documentación y normativa europea, gestionada por nuestro equipo."
    },
    {
      title: "Asistencia personalizada en todo momento, estés donde estés."
    },
    {
      title: "Soluciones flexibles adaptadas a distancia, volumen y urgencia."
    }
  ];

  return (
    <section id="europa" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-4">
            ¿Te mudas a otro país europeo?
          </h2>
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-accent mb-6">
            Te acompañamos en cada kilómetro
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Mudanzas Marín EU contamos con una amplia trayectoria gestionando mudanzas internacionales 
            desde España a cualquier país de la Unión Europea, y viceversa. Ya sea por motivos personales, 
            laborales o empresariales, nos encargamos de todo el proceso para que tu mudanza al extranjero 
            sea segura, eficiente y sin complicaciones.
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

          {/* Service Types */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
              Tipos de mudanzas
            </h3>
            <div className="space-y-6">
              {serviceTypes.map((type, index) => (
                <div 
                  key={index}
                  className="glass p-4 rounded-lg hover:glass-accent transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <span className="mr-2">{type.emoji}</span>
                    {type.title}
                  </h4>
                  <p className="text-sm text-muted-foreground ml-6">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-8 text-center">Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 glass p-4 rounded-lg hover:glass-accent transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
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