import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SpainSection from '@/components/SpainSection';
import EuropeSection from '@/components/EuropeSection';
import FAQSection from '@/components/FAQSection';
import QuoteForm from '@/components/QuoteForm';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SpainSection />
        <EuropeSection />
        <FAQSection />
        <QuoteForm />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;