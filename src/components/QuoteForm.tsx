import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveType: '',
    origin: '',
    destination: '',
    date: '',
    details: '',
    privacy: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos en menos de 24 horas con tu presupuesto personalizado",
        duration: 5000,
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveType: '',
        origin: '',
        destination: '',
        date: '',
        details: '',
        privacy: false
      });
    }, 2000);
  };

  return (
    <section id="presupuesto" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <div className="flex justify-center mb-4">
            <Calculator className="text-accent" size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary mb-6">
            Solicita tu Presupuesto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¡Solicita el mejor precio para tu mudanza! Respuesta rápida y personalizada.
          </p>
        </div>

        <div className="glass p-8 rounded-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-primary font-medium">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-2"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-primary font-medium">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-primary font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2"
                  placeholder="600 123 456"
                  required
                />
              </div>

              {/* Move Type */}
              <div>
                <Label htmlFor="moveType" className="text-primary font-medium">
                  Tipo de mudanza *
                </Label>
                <Select value={formData.moveType} onValueChange={(value) => handleInputChange('moveType', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local (misma ciudad)</SelectItem>
                    <SelectItem value="nacional">Nacional (España)</SelectItem>
                    <SelectItem value="internacional">Internacional (Europa)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Origin */}
              <div>
                <Label htmlFor="origin" className="text-primary font-medium">
                  Dirección de origen *
                </Label>
                <Input
                  id="origin"
                  type="text"
                  value={formData.origin}
                  onChange={(e) => handleInputChange('origin', e.target.value)}
                  className="mt-2"
                  placeholder="Ciudad, provincia, país"
                  required
                />
              </div>

              {/* Destination */}
              <div>
                <Label htmlFor="destination" className="text-primary font-medium">
                  Dirección de destino *
                </Label>
                <Input
                  id="destination"
                  type="text"
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="mt-2"
                  placeholder="Ciudad, provincia, país"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="date" className="text-primary font-medium">
                Fecha deseada
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="mt-2"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Details */}
            <div>
              <Label htmlFor="details" className="text-primary font-medium">
                Detalles adicionales
              </Label>
              <Textarea
                id="details"
                value={formData.details}
                onChange={(e) => handleInputChange('details', e.target.value)}
                className="mt-2"
                placeholder="Número de habitaciones, muebles especiales, acceso difícil, etc."
                rows={4}
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                Acepto la{' '}
                <a href="#" className="text-primary hover:text-accent transition-colors underline">
                  Política de Privacidad
                </a>{' '}
                y autorizo el tratamiento de mis datos para recibir información sobre servicios de mudanzas.
              </Label>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero text-lg px-12 py-6"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-3" size={20} />
                    Solicitar Presupuesto Gratis
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                "Respuesta en menos de 24h",
                "Presupuesto sin compromiso",
                "Asesoramiento personalizado"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="text-accent" size={16} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;