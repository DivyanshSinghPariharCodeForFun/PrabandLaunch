"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WordsPreloader } from "@/components/words-preloader";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HeroScrollDemo from "@/components/container-scroll-animation-demo";
import PrabandBentoSection from "@/components/praband-bento-section";
import StickyFeatureSection from "@/components/sticky-feature-section";
import RoleFeaturesSection from "@/components/role-features-section";
import AnalyticsSection from "@/components/analytics-section";
import SecuritySection from "@/components/security-section";
import InstitutionsSection from "@/components/institutions-section";
import CalculatorSection from "@/components/calculator-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1800); // Hide after 1.8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {showPreloader && <WordsPreloader />}
      </AnimatePresence>
      {!showPreloader && (
        <motion.div 
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <HeroSection />
          <HeroScrollDemo />
          <InstitutionsSection />
          <CalculatorSection />
          <PrabandBentoSection />
          <StickyFeatureSection />
          <RoleFeaturesSection />
          <AnalyticsSection />
          <SecuritySection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
