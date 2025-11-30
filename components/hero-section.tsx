"use client";

import { Sparkles, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, defaultTransition } from "@/lib/animations";
import ParticlesBackground from "./particles-background";

// Headline and tagline options
const headlineOptions = [
  {
    headline: "Empowering Institutions with Smarter Learning",
    tagline: "One connected platform for teaching, testing, analytics, and academic growth.",
  },
  {
    headline: "Transform How Your Institute Manages Learning",
    tagline: "Digitize classrooms, automate academic workflows, and improve results with real-time insights.",
  },
  {
    headline: "Where Students Learn Better & Teachers Teach Smarter",
    tagline: "Structured learning, transparent evaluation, and measurable outcomes — all in one LMS.",
  },
];

export default function HeroSection() {
  // Use first option as default for SSR, then randomly select on client
  const [selectedContent, setSelectedContent] = useState(headlineOptions[0]);

  useEffect(() => {
    // Randomly select a headline/tagline only on client side
    const randomIndex = Math.floor(Math.random() * headlineOptions.length);
    setSelectedContent(headlineOptions[randomIndex]);
  }, []);

  return (
    <section id="home" className="section bg-[#003459] relative min-h-screen pt-32 lg:pt-48 2xl:pt-56">
      {/* Layer 2: Vertical Grid Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 flex justify-between px-[5%]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-px h-full bg-white/[0.07]" />
          ))}
        </div>
      </div>

      {/* Layer 3: Particles Background */}
      <ParticlesBackground />

      {/* Layer 4: Content */}
      <motion.div 
        className="relative z-[2] mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 md:px-8 2xl:px-16 pb-20 2xl:pb-32 flex items-center justify-center min-h-[calc(100vh-8rem)]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full max-w-5xl text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-sm mb-6"
            variants={slideUp}
            transition={defaultTransition}
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              AI-Powered Education Management
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={slideUp}
            transition={defaultTransition}
          >
            {selectedContent.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={slideUp}
            transition={defaultTransition}
          >
            {selectedContent.tagline}
          </motion.p>

          {/* Email Input Field with Get Started Button */}
          <motion.div 
            className="mb-8 max-w-2xl mx-auto"
            variants={slideUp}
            transition={defaultTransition}
          >
            <motion.div 
              className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Email Input Section */}
              <div className="flex items-center flex-1 px-6 py-4">
                <Mail className="w-5 h-5 text-white/70 mr-3 flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent text-white placeholder:text-white/60 focus:outline-none text-base w-full"
                />
              </div>
              
              {/* Get Started Button */}
              <motion.button 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    const offset = 100;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-8 py-4 bg-[#00a7e1] text-white text-base font-medium hover:bg-[#007ea7] transition-all duration-200 flex-shrink-0 rounded-r-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

