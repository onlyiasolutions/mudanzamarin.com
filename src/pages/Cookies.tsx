import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="glass p-8 md:p-12 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-8">
              Política de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Nos ayudan a hacer que el sitio web funcione, o funcione de manera más eficiente, así como a proporcionar información a los propietarios del sitio.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">¿Qué cookies utilizamos?</h2>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Cookies esenciales</h3>
              <p>Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas:</p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Cookies de sesión:</strong> Mantienen su sesión activa durante la navegación</li>
                <li><strong>Cookies de seguridad:</strong> Protegen contra ataques y mantienen la seguridad del sitio</li>
                <li><strong>Cookies de preferencias:</strong> Recuerdan sus preferencias de idioma y región</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Cookies de funcionalidad</h3>
              <p>Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas:</p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Cookies de formularios:</strong> Recuerdan la información que ha introducido en formularios</li>
                <li><strong>Cookies de navegación:</strong> Mejoran la experiencia de navegación</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Cookies analíticas</h3>
              <p>Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web:</p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Google Analytics:</strong> Proporciona estadísticas sobre el uso del sitio web</li>
                <li><strong>Cookies de rendimiento:</strong> Nos ayudan a mejorar el funcionamiento del sitio</li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">¿Cómo gestionar las cookies?</h2>
              <p>
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de navegadores para evitar que se coloquen.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Configuración del navegador:</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  <a href="/" className="text-primary underline">Chrome</a>: Configuración → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <a href="/#espana" className="text-primary underline">Firefox</a>: Opciones → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <a href="/#europa" className="text-primary underline">Safari</a>: Preferencias → Privacidad → Cookies
                </li>
                <li>
                  <a href="/#faq" className="text-primary underline">Edge</a>: Configuración → Cookies y permisos del sitio
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cookies de terceros</h2>
              <p>
                En algunos casos especiales también utilizamos cookies proporcionadas por terceros de confianza. Los detalles de las cookies de terceros se encuentran a continuación:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  <a href="/#europa" className="text-primary underline">Google Analytics</a>: Nos ayuda a analizar cómo los usuarios utilizan el sitio
                </li>
                <li>
                  <a href="/#contacto" className="text-primary underline">Redes sociales</a>: Para funcionalidades de compartir en redes sociales
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Consentimiento</h2>
              <p>
                Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política. Si no está de acuerdo con el uso de estas cookies, debe ajustar la configuración de su navegador en consecuencia o no utilizar nuestro sitio web.
              </p>

              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre esta Política de Cookies, puede contactarnos en:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Email: info@mudanzamarin.com</li>
                <li>Teléfono: 642 431 192</li>
              </ul>

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

export default Cookies;