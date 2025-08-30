import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import Cookies from "./pages/Cookies";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <>
    <Helmet>
      <title>Mudanzas Marín EU | Empresa de Mudanzas en España y Europa</title>
      <meta name="description" content="Mudanzas Marín EU ✅ Empresa de mudanzas con más de 20 años de experiencia en España y Europa. Mudanzas nacionales e internacionales seguras, rápidas y profesionales. Presupuesto gratis en menos de 24h." />
      <meta name="keywords" content="Mudanzas Marín, Mudanzas Marín EU, mudanzas nacionales, mudanzas internacionales Europa, empresa de mudanzas en España, mudanza segura, transporte, embalaje profesional" />
      <meta name="robots" content="index,follow" />
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CookieBanner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/aviso-legal" element={<Legal />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
