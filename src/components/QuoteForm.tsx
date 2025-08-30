import React, { useState } from 'react';
import { Helmet } from "react-helmet";
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
    lastName: '',
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

    if (!formData.name.trim() || !formData.lastName.trim()) {
      toast({
        title: "Falta información",
        description: "Nombre y apellidos son obligatorios",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad",
        variant: "destructive"
      });
      return;
    }

    if (formData.moveType === '') {
      toast({
        title: "Falta información",
        description: "Selecciona el tipo de mudanza",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        name: formData.name.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        origin: formData.origin.trim(),
        destination: formData.destination.trim(),
        details: (formData.details || '').trim()
      };

      const response = await fetch('https://hook.eu2.make.com/sfhelhgccn757d8isk64f6hucjx0hbiv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "¡Solicitud enviada!",
          description: "Te contactaremos en menos de 24 horas con tu presupuesto personalizado",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          moveType: '',
          origin: '',
          destination: '',
          date: '',
          details: '',
          privacy: false
        });
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="presupuesto" className="section-padding bg-secondary/30">
      <Helmet>
        <title>Presupuesto Online | Mudanzas Marín EU</title>
        <meta name="description" content="Solicita tu presupuesto online con Mudanzas Marín EU. Respuesta en menos de 24 horas. Mudanzas nacionales e internacionales con seguridad y profesionalidad." />
        <meta name="keywords" content="Presupuesto mudanzas, presupuesto online mudanza, precio mudanza, Mudanzas Marín EU" />
      </Helmet>
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
            <h2 className="sr-only">Form v2</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-primary font-medium">
                  Nombre *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-2"
                  placeholder="Tu nombre"
                  required
                  aria-required={true}
                />
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="lastName" className="text-primary font-medium">
                  Apellidos *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="mt-2"
                  placeholder="Tus apellidos"
                  required
                  aria-required={true}
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-primary font-medium">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                  placeholder="tu@email.com"
                  required
                  aria-required={true}
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-primary font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2"
                  placeholder="600 123 456"
                  required
                  inputMode="tel"
                  pattern="[0-9+\s-]{6,}"
                  aria-required={true}
                />
              </div>

              {/* Move Type */}
              <div>
                <Label htmlFor="moveType" className="text-primary font-medium">
                  Tipo de mudanza *
                </Label>
                <Select value={formData.moveType} onValueChange={(value) => handleInputChange('moveType', value)}>
                  <SelectTrigger className="mt-2" aria-required={true}>
                    <SelectValue placeholder="Selecciona el tipo *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Mudanza local, dentro de la misma ciudad en España</SelectItem>
                    <SelectItem value="nacional">Mudanza nacional de una ciudad a otra en España</SelectItem>
                    <SelectItem value="internacional">Mudanza Internacional Europa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Origin */}
              <div>
                <Label htmlFor="origin" className="text-primary font-medium">
                  Dirección de origen completa *
                </Label>
                <Input
                  id="origin"
                  name="origin"
                  type="text"
                  value={formData.origin}
                  onChange={(e) => handleInputChange('origin', e.target.value)}
                  className="mt-2"
                  placeholder="Calle, número, ciudad, código postal, país"
                  required
                  aria-required={true}
                />
              </div>

              {/* Destination */}
              <div>
                <Label htmlFor="destination" className="text-primary font-medium">
                  Dirección de destino *
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  type="text"
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="mt-2"
                  placeholder="Calle, número, ciudad, código postal, país"
                  required
                  aria-required={true}
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="date" className="text-primary font-medium">
                Fecha deseada para la mudanza
              </Label>
              <Input
                id="date"
                name="date"
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
                ¿Te gustaría facilitarnos más detalles?
              </Label>
              <Textarea
                id="details"
                name="details"
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