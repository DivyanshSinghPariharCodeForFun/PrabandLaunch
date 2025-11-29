"use client";

import { useState } from "react";
import { Shield, User, Link, BarChart, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp } from "@/lib/animations";

interface FAQItem {
  id: number;
  icon: React.ReactNode;
  question: string;
  answer: string;
  iconBgColor: string;
}

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      icon: <BarChart className="w-5 h-5 text-white" />,
      question: "How does your platform track feature usage?",
      answer: "We automatically collect interaction data across your product and visualize which features are being used most — no manual tagging needed.",
      iconBgColor: "bg-purple-100 border-purple-200",
    },
    {
      id: 2,
      icon: <User className="w-5 h-5 text-white" />,
      question: "Do I need technical skills to use Prabhand?",
      answer: "No technical skills are required. Prabhand is designed to be intuitive and user-friendly, allowing teachers and administrators to manage all academic operations with ease.",
      iconBgColor: "bg-gray-100 border-gray-200",
    },
    {
      id: 3,
      icon: <Link className="w-5 h-5 text-white" />,
      question: "Can Prabhand integrate with tools we already use?",
      answer: "Yes, Prabhand offers seamless integration with popular educational tools and platforms, allowing you to bring all your academic activities into one unified system.",
      iconBgColor: "bg-gray-100 border-gray-200",
    },
    {
      id: 4,
      icon: <Shield className="w-5 h-5 text-white" />,
      question: "Is my data secure on Prabhand?",
      answer: "Absolutely. All academic records, materials, and student data are encrypted and protected with enterprise-grade security measures to ensure your information remains safe.",
      iconBgColor: "bg-gray-100 border-gray-200",
    },
    {
      id: 5,
      icon: <Clock className="w-5 h-5 text-white" />,
      question: "Can I try Prabhand before committing?",
      answer: "Yes, we offer a free trial period so you can explore all features and see how Prabhand can transform your institute's academic operations before making a commitment.",
      iconBgColor: "bg-gray-100 border-gray-200",
    },
  ];

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-gray-50 py-24 px-6 scroll-mt-20">
      {/* Subtle curved pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2 
          className="text-5xl md:text-6xl font-serif italic font-normal text-gray-800 mb-6 text-center" 
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently asked questions
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p 
          className="text-base md:text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Can&apos;t find the question you&apos;re looking for? Post on our{" "}
          <a href="#" className="text-[#00a7e1] hover:text-[#007ea7] underline font-medium">
            community forum
          </a>{" "}
          to receive help from our developer support team and the community or{" "}
          <a href="#" className="text-[#00a7e1] hover:text-[#007ea7] underline font-medium">
            contact an expert.
          </a>
        </motion.p>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const isFirst = faq.id === 1;
            
            return (
              <motion.div
                key={faq.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                variants={slideUp}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-start gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#00a7e1] focus:ring-offset-2 rounded-lg"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center ${
                    isExpanded && isFirst 
                      ? "bg-[#00a7e1]/20 border-[#00a7e1]/30" 
                      : faq.iconBgColor
                  }`}>
                    <div className={`w-8 h-8 rounded flex items-center justify-center ${
                      isExpanded && isFirst 
                        ? "bg-[#00a7e1]" 
                        : "bg-gray-400"
                    }`}>
                      {faq.icon}
                    </div>
                  </div>

                  {/* Question and Answer */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <motion.div 
                    className="flex-shrink-0 ml-4"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-gray-600 leading-relaxed px-6 pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

