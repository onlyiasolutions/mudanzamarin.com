import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-8">
              Aviso Legal
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Datos identificativos</h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, le informamos de lo siguiente:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Denominación social:</strong> Mudanzas Marín EU</li>
                <li><strong>Actividad:</strong> Servicios de mudanzas nacionales e internacionales</li>
                <li><strong>Email:</strong> info@mudanzamarin.com</li>
                <li><strong>Teléfono:</strong> 642 431 192</li>
                <li><strong>Sitio web:</strong> mudanzamarin.eu</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Objeto</h2>
              <p>
                El presente aviso legal regula el uso del sitio web mudanzamarin.eu, del que es titular Mudanzas Marín EU.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Condiciones de uso</h2>
              <p>
                El acceso y utilización del sitio web atribuye la condición de usuario y supone la aceptación plena de todas las condiciones incluidas en este aviso legal.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Responsabilidades</h2>
              <p>
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que ofrece el sitio web y a no emplearlos para:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo o de apología del terrorismo</li>
                <li>Provocar daños en los sistemas físicos y lógicos del sitio web</li>
                <li>Introducir o difundir virus informáticos o cualesquiera otros sistemas que puedan provocar daños</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Propiedad intelectual</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Mudanzas Marín EU.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Exclusión de garantías y responsabilidad</h2>
              <p>
                Mudanzas Marín EU no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Modificaciones</h2>
              <p>
                Mudanzas Marín EU se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Legislación aplicable y jurisdicción</h2>
              <p>
                La relación entre Mudanzas Marín EU y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad más próxima al domicilio del usuario.
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

export default Legal;