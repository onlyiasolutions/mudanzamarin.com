import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-8">
              Política de Privacidad
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Responsable del tratamiento</h2>
              <p>
                <strong>
                  <a href="/#inicio" className="text-primary underline">Mudanzas Marín EU</a>
                </strong>
                <br />
                Email: <a href="/#contacto" className="text-primary underline">info@mudanzamarin.com</a>
                <br />
                Teléfono: <a href="/#contacto" className="text-primary underline">642 431 192</a>
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Finalidades del tratamiento</h2>
              <p>Los datos personales que nos proporcione serán tratados para:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Gestionar y responder a su solicitud de presupuesto</li>
                <li>Prestación de servicios de mudanzas</li>
                <li>Comunicaciones comerciales (con su consentimiento)</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Base legal</h2>
              <p>El tratamiento se basa en:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Ejecución de un contrato (presupuestos y servicios)</li>
                <li>Consentimiento del interesado (comunicaciones comerciales)</li>
                <li>Interés legítimo (mejora de servicios)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Conservación de datos</h2>
              <p>Los datos se conservarán durante el tiempo necesario para cumplir con las finalidades para las que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar, además de los períodos establecidos en la normativa de archivos y documentación.</p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Derechos del usuario</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Acceso, rectificación, supresión y portabilidad de sus datos</li>
                <li>Limitación y oposición a su tratamiento</li>
                <li>Presentar una reclamación ante la Agencia de Protección de Datos</li>
              </ul>
              <p>
                Para ejercer sus derechos, contacte con nosotros en: <a href="/#contacto" className="text-primary underline">info@mudanzamarin.com</a>
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Comunicación de datos</h2>
              <p>Sus datos no serán cedidos a terceros salvo obligación legal o para la prestación del servicio contratado.</p>

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

export default Privacy;