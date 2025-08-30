import React from 'react';
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      content: "642 431 192",
      action: "tel:642431192",
      description: "Llámanos de lunes a viernes"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "info@mudanzamarin.com",
      action: "mailto:info@mudanzamarin.com",
      description: "Respuesta en menos de 24h"
    },
    {
      icon: <MapPin size={24} />,
      title: "Ubicación",
      content: "España",
      action: "#",
      description: "Cobertura nacional e internacional"
    },
    {
      icon: <Clock size={24} />,
      title: "Horario",
      content: "L-V: 8:00-18:00",
      action: "#",
      description: "Sáb: 9:00-14:00 (consultar)"
    }
  ];

  return (
    <section id="contacto" className="section-padding bg-secondary/30">
      <Helmet>
        <title>Contacto | Mudanzas Marín EU</title>
        <meta name="description" content="Contacta con Mudanzas Marín EU para tu mudanza nacional o internacional. Teléfono, WhatsApp o email. Respuesta en menos de 24 horas." />
        <meta name="keywords" content="Contacto Mudanzas Marín, Teléfono mudanzas, WhatsApp mudanzas, Email mudanzas, presupuesto mudanzas" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para resolver todas tus dudas y hacer tu mudanza lo más fácil posible. 
            Contacta con nosotros por el medio que prefieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="text-center glass p-6 rounded-lg hover:glass-accent transition-all duration-300 animate-fade-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="text-accent mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
               {item.action.startsWith('#') ? (
                <div className="text-lg font-medium text-primary mb-2">{item.content}</div>
               ) : (
                <a 
                  href={item.action}
                  className="text-lg font-medium text-primary hover:text-accent transition-colors mb-2 block break-all"
                >
                  {item.content}
                </a>
               )}
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder and quick contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map area */}
          <div className="animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="glass p-8 rounded-2xl h-full">
              <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                Nuestra Cobertura
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-primary mb-2">España</h4>
                  <p className="text-sm">Cobertura completa en toda la península y Baleares. 
                  Servicios especializados en mudanzas locales, provinciales y nacionales.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Europa</h4>
                  <p className="text-sm">Francia, Alemania, Italia, Portugal, Países Bajos, 
                  Bélgica, Suiza, Austria, Luxemburgo, Reino Unido, Irlanda y Dinamarca.</p>
                </div>
                <div className="glass-accent p-4 rounded-lg mt-6">
                  <p className="text-sm text-primary font-medium">
                    💡 ¿Tu destino no aparece? Contáctanos, seguramente podemos ayudarte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact */}
          <div className="animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                Contacto Rápido
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:642431192"
                  className="block w-full btn-hero text-center group"
                >
                  <Phone className="inline-block mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Llamar Ahora
                </a>
                
                <a 
                  href="https://wa.me/34642431192?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20para%20una%20mudanza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-center group"
                >
                  <MessageCircle className="inline-block mr-3 group-hover:scale-110 transition-transform" size={20} />
                  WhatsApp
                </a>
                
                <a 
                  href="mailto:info@mudanzamarin.com?subject=Solicitud%20de%20presupuesto&body=Hola,%0D%0A%0D%0AMe%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20para%20una%20mudanza.%0D%0A%0D%0ATipo%20de%20mudanza:%0D%0AOrigen:%0D%0ADestino:%0D%0AFecha%20aproximada:%0D%0A%0D%0AGracias"
                  className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-center group"
                >
                  <Mail className="inline-block mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Enviar Email
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Respuesta garantizada en menos de 24 horas
                  </p>
                  <div className="flex justify-center space-x-4 text-xs text-accent">
                    <span>✓ Presupuesto gratis</span>
                    <span>✓ Sin compromiso</span>
                    <span>✓ Asesoramiento experto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;