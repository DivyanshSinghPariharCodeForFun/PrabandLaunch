"use client";

import { Sparkles, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, defaultTransition } from "@/lib/animations";
import ParticlesBackground from "./particles-background";
import config from "@/config.json";

export default function HeroSection() {
  // Use first option as default for SSR, then randomly select on client
  const [selectedContent, setSelectedContent] = useState(
    config.header && config.header.length > 0 
      ? config.header[0] 
      : { headline: "", tagline: "" }
  );

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    // Randomly select a headline/tagline only on client side
    if (config.header && config.header.length > 0) {
      const randomIndex = Math.floor(Math.random() * config.header.length);
      setSelectedContent(config.header[randomIndex]);
    }
  }, []);

  const handleGetStarted = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your email address",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/slack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message: "This person wants to reach",
          name: "",
          inquiryType: ["demo"],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });
      setEmail("");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder:text-white/60 focus:outline-none text-base w-full"
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Get Started Button */}
              <motion.button 
                onClick={handleGetStarted}
                disabled={isSubmitting}
                className={`px-8 py-4 text-white text-base font-medium transition-all duration-200 flex-shrink-0 rounded-r-full ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#00a7e1] hover:bg-[#007ea7]"
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? "Sending..." : "Get Started"}
              </motion.button>
            </motion.div>

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 text-white border border-green-500/50"
                    : "bg-red-500/20 text-white border border-red-500/50"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

