import React from 'react';
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
      question: "¿Cuánto tiempo tardan en realizar una mudanza?",
      answer: "El tiempo depende de la distancia y el volumen. Las mudanzas locales suelen completarse en 1 día, las nacionales entre 1-3 días, y las internacionales entre 3-7 días laborables."
    },
    {
      question: "¿Qué incluye el embalaje profesional?",
      answer: "Incluye cajas de cartón reforzado, papel de burbujas, film protector, mantas acolchadas para muebles, y material especializado para objetos frágiles. También incluimos el desmontaje y montaje de muebles."
    },
    {
      question: "¿Están aseguradas mis pertenencias durante el traslado?",
      answer: "Sí, todas nuestras mudanzas incluyen seguro básico de transporte. También ofrecemos seguros adicionales con cobertura ampliada para objetos de alto valor."
    },
    {
      question: "¿Cómo calculan el precio de la mudanza?",
      answer: "El precio se calcula según el volumen (m³), la distancia, servicios adicionales (embalaje, desmontaje), y la complejidad del acceso. Ofrecemos presupuestos gratuitos sin compromiso."
    },
    {
      question: "¿Trabajan en fines de semana y festivos?",
      answer: "Sí, trabajamos fines de semana y algunos festivos (consultar disponibilidad). Para mudanzas en estos días se aplica un pequeño suplemento."
    },
    {
      question: "¿Qué documentación necesito para mudanzas internacionales?",
      answer: "Para mudanzas en Europa necesitarás DNI/Pasaporte, justificante de residencia en destino, e inventario detallado. Nosotros gestionamos toda la documentación aduanera."
    },
    {
      question: "¿Puedo hacer un seguimiento de mi mudanza?",
      answer: "Sí, proporcionamos seguimiento en tiempo real mediante WhatsApp y llamadas telefónicas. Siempre sabrás dónde están tus pertenencias."
    },
    {
      question: "¿Qué forma de pago aceptan?",
      answer: "Aceptamos transferencia bancaria, efectivo, y tarjeta de crédito/débito. El pago se realiza normalmente 50% al inicio y 50% a la entrega."
    }
  ];

  return (
    <section id="faqs" className="section-padding bg-background">
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
                href="mailto:info@mudanzamarin.eu"
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