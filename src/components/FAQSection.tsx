import React from 'react';
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Qué tipo de mudanzas realizan?",
      answer: "Realizamos mudanzas particulares, de oficinas, empresas y traslados internacionales. Nos adaptamos al tipo de carga, destino y necesidades específicas de cada cliente."
    },
    {
      question: "¿Cómo solicito un presupuesto?",
      answer: "Puedes contactarnos por teléfono, correo electrónico o a través del formulario en nuestra web. Solo necesitamos algunos datos básicos para enviarte un presupuesto claro y sin compromiso."
    },
    {
      question: "¿Trabajan en toda España?",
      answer: "Sí, cubrimos toda España, desde grandes ciudades hasta pequeñas localidades. Hacemos mudanzas locales, provinciales y entre comunidades autónomas."
    },
    {
      question: "¿También hacen mudanzas fuera de España?",
      answer: "Sí, organizamos traslados desde España a cualquier país de la Unión Europea, y viceversa. También realizamos rutas combinadas para optimizar costes."
    },
    {
      question: "¿Qué incluye el servicio de mudanza?",
      answer: "Incluye transporte seguro, carga y descarga, desmontaje y montaje de muebles, embalaje profesional de objetos frágiles y seguimiento durante todo el proceso."
    },
    {
      question: "¿Qué pasa si tengo muebles delicados o frágiles?",
      answer: "Contamos con materiales de protección adecuados y personal con experiencia en el manejo de objetos delicados, obras de arte, cristalería o tecnología."
    },
    {
      question: "¿Puedo elegir la fecha de la mudanza?",
      answer: "Sí. Ofrecemos flexibilidad total de fechas y horarios, y coordinamos contigo para adaptarnos a tu agenda."
    },
    {
      question: "¿Cuánto tarda una mudanza Nacional y Europea?",
      answer: "Depende del destino y volumen, pero te damos un cronograma claro desde el principio. Siempre priorizamos cumplir los plazos acordados."
    },
    {
      question: "¿Qué garantías ofrecen durante el traslado?",
      answer: "Todos nuestros servicios están cubiertos por seguros y trabajamos bajo protocolos de seguridad que minimizan cualquier riesgo. Tu tranquilidad es lo primero."
    },
    {
      question: "¿Qué diferencia a Mudanzas Marín de otras empresas?",
      answer: "Nuestra experiencia de más de 20 años, la atención cercana, la adaptabilidad a cada caso y la cobertura nacional y europea nos convierten en un aliado fiable para cualquier mudanza."
    }
  ];

  return (
    <section id="faqs" className="section-padding bg-background">
      <Helmet>
        <title>Preguntas Frecuentes | Mudanzas Marín EU</title>
        <meta name="description" content="Preguntas frecuentes sobre Mudanzas Marín EU: servicios, presupuestos, cobertura en España y Europa, garantías, tiempos de mudanza y más." />
        <meta name="keywords" content="Preguntas frecuentes mudanzas, FAQ Mudanzas Marín, dudas mudanzas nacionales internacionales, garantías mudanzas" />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-accent" size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos las dudas más comunes sobre nuestros servicios de mudanzas
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left text-primary font-medium hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-accent p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-3">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contacta con nosotros directamente y te resolveremos cualquier duda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:642431192"
                className="btn-hero inline-flex items-center justify-center"
              >
                📞 Llamar ahora
              </a>
              <a 
                href="mailto:info@mudanzamarin.com"
                className="btn-hero inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90"
              >
                ✉️ Enviar email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;