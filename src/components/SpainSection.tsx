import React from 'react';
import { Truck, Package, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import spainImage from '@/assets/spain-moving.jpg';

const SpainSection = () => {
  const services = [
    {
      icon: <Truck size={24} />,
      title: "Transporte por carretera en vehículos adaptados según el volumen y características de la carga."
    },
    {
      icon: <Package size={24} />,
      title: "Opciones de embalaje profesional, materiales incluidos si lo necesitas."
    },
    {
      icon: <Users size={24} />,
      title: "Montaje y desmontaje de mobiliario."
    },
    {
      icon: <Shield size={24} />,
      title: "Gestión de permisos para carga y descarga en zonas urbanas."
    },
    {
      icon: <Clock size={24} />,
      title: "Asesoramiento personalizado antes, durante y después del traslado."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Presupuestos claros y sin compromiso."
    }
  ];

  const serviceTypes = [
    {
      emoji: "🔹",
      title: "Mudanzas particulares",
      description: "Trasladamos viviendas completas o parciales con especial cuidado de tus pertenencias personales."
    },
    {
      emoji: "🔹",
      title: "Oficinas y despachos",
      description: "Coordinamos cada detalle para minimizar interrupciones en la actividad de tu empresa."
    },
    {
      emoji: "🔹",
      title: "Empresas y locales comerciales",
      description: "Gestión integral para cambios de sede, apertura de sucursales o redistribución de equipos."
    }
  ];

  return (
    <section id="espana" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-4">
              ¿Te mudas dentro de España?
            </h2>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-accent mb-6">
              ¡Nosotros lo hacemos posible!
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En Mudanzas Marín EU realizamos mudanzas a nivel nacional con cobertura en todas las comunidades autónomas, 
              provincias y ciudades. Desde grandes capitales hasta pueblos rurales, garantizamos un servicio adaptado a 
              tus necesidades, con planificación y logística eficiente para que tu traslado sea sencillo y sin sobresaltos.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Servicios</h3>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-fade-up"
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

            <div className="glass-accent p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-6">Atendemos</h3>
              <div className="space-y-6">
                {serviceTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="animate-fade-up"
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