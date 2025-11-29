"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp, slideLeft, slideRight, scale } from "@/lib/animations";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    inquiryType: [] as string[],
    name: "",
    email: "",
    instituteName: "",
    message: "",
  });

  const inquiryTypes = [
    { value: "demo", label: "Demo Request" },
    { value: "pricing", label: "Pricing Info" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInquiryTypeChange = (value: string) => {
    setFormData((prev) => {
      const currentTypes = prev.inquiryType;
      if (currentTypes.includes(value)) {
        // Remove if already selected
        return {
          ...prev,
          inquiryType: currentTypes.filter((type) => type !== value),
        };
      } else {
        // Add if not selected
        return {
          ...prev,
          inquiryType: [...currentTypes, value],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-24 px-6 scroll-mt-20"
      style={{
        background: 'linear-gradient(135deg, #00171f 0%, #003459 100%)',
      }}
    >
      {/* Background speckles/star pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(173, 216, 230, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Left Panel - Contact Information */}
          <motion.div 
            className="space-y-12 text-white"
            variants={slideLeft}
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-8">
                Contact Form
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Let&apos;s transform your institute{" "}
                <span className="text-[#00a7e1]">together</span>
              </h1>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Email */}
              <motion.div 
                className="flex items-center gap-4"
                variants={slideUp}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Mail className="w-5 h-5 text-[#00a7e1] flex-shrink-0" />
                <a
                  href="mailto:contact@praband.com"
                  className="text-lg text-white hover:text-[#00a7e1] transition-colors"
                >
                  contact@praband.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-center gap-4"
                variants={slideUp}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 px-4 py-2 bg-[#00a7e1]/20 hover:bg-[#00a7e1]/30 rounded-full transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 text-[#00a7e1] flex-shrink-0" />
                  <span className="text-lg text-white group-hover:text-[#00a7e1] transition-colors">
                    +91 98765 43210
                  </span>
                </motion.a>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="flex items-center gap-4"
                variants={slideUp}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <MapPin className="w-5 h-5 text-[#00a7e1] flex-shrink-0" />
                <span className="text-lg text-white">
                  Chandigarh, India
                </span>
              </motion.div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div 
              className="flex items-center gap-6 pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                variants={scale}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                variants={scale}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                variants={scale}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Panel - Contact Form (White Card) */}
          <motion.div 
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
            variants={slideRight}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h2 
              className="text-2xl font-semibold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I&apos;m interested in...
            </motion.h2>

            {/* Inquiry Type Buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {inquiryTypes.map((type) => (
                <motion.button
                  key={type.value}
                  type="button"
                  onClick={() => handleInquiryTypeChange(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.inquiryType.includes(type.value)
                      ? "bg-[#00a7e1] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  variants={scale}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a7e1] focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a7e1] focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                  required
                />
              </div>

              {/* Institute Name Field */}
              <div>
                <input
                  type="text"
                  id="instituteName"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  placeholder="Institute name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a7e1] focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#00a7e1] text-white font-medium rounded-lg hover:bg-[#007ea7] transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,167,225,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

