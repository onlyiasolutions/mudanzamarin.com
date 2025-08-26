import React from 'react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
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
  const heroRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <SpainSection />
        <EuropeSection />
        <FAQSection />
        <div ref={formRef}>
          <QuoteForm />
        </div>
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;