'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ProcessSection from "@/components/process-section";
import CalculatorSection from "@/components/calculator-section";
import InstitutionsSection from "@/components/institutions-section";
import BenefitsSection from "@/components/benefits-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { WordsPreloader } from "@/components/words-preloader";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {showPreloader && <WordsPreloader />}
      </AnimatePresence>
      {!showPreloader && (
        <>
          <HeroSection />
          <FeaturesSection />
          <ProcessSection />
          <CalculatorSection />
          <InstitutionsSection />
          <BenefitsSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  );
}
