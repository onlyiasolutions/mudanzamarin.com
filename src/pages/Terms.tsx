import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-8">
              Términos y Condiciones de Servicio
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Objeto</h2>
              <p>
                Los presentes términos y condiciones regulan la prestación de servicios de mudanzas nacionales e internacionales por parte de <strong>Mudanzas Marín EU</strong>.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Servicios</h2>
              <p>Ofrecemos los siguientes servicios:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Mudanzas nacionales en toda España</li>
                <li>Mudanzas internacionales en Europa</li>
                <li>Embalaje y desembalaje profesional</li>
                <li>Transporte seguro y monitoreado</li>
                <li>Montaje y desmontaje de mobiliario</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Presupuestos</h2>
              <p>
                Los presupuestos son gratuitos y sin compromiso. Tienen una validez de 30 días desde su emisión. Los precios incluyen todos los gastos excepto los expresamente excluidos.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Responsabilidades</h2>
              <p><strong>Del cliente:</strong></p>
              <ul className="list-disc ml-6 mb-4">
                <li>Proporcionar información veraz sobre el contenido de la mudanza</li>
                <li>Facilitar el acceso a las viviendas</li>
                <li>Declarar objetos de valor especial</li>
                <li>Estar presente durante la carga y descarga</li>
              </ul>
              
              <p><strong>De Mudanzas Marín EU:</strong></p>
              <ul className="list-disc ml-6 mb-4">
                <li>Realizar el servicio con la máxima profesionalidad</li>
                <li>Cuidar las pertenencias como propias</li>
                <li>Cumplir con los plazos acordados</li>
                <li>Disponer de seguros de responsabilidad civil</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Seguros</h2>
              <p>
                Todos nuestros servicios están cubiertos por seguro de responsabilidad civil. Para objetos de especial valor, recomendamos contratar un seguro adicional.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Forma de pago</h2>
              <p>
                El pago se realizará según lo acordado en el presupuesto. Aceptamos efectivo, transferencia bancaria y otros medios de pago acordados.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Cancelaciones</h2>
              <p>
                Las cancelaciones deben comunicarse con al menos 48 horas de antelación. Cancelaciones tardías pueden conllevar gastos según lo establecido en el presupuesto.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Resolución de conflictos</h2>
              <p>
                Para cualquier incidencia o reclamación, contacte con nosotros en info@mudanzamarin.com o en el teléfono 642 431 192. Nos comprometemos a resolver cualquier problema de forma rápida y satisfactoria.
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;