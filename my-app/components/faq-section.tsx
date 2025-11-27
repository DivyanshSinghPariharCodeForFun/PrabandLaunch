'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Plus Icon Component
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Minus Icon Component
const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "How does your platform track feature usage?",
      answer: "We automatically collect interaction data across your product and visualize which features are being used most — no manual tagging needed."
    },
    {
      question: "Do I need technical skills to use Prabhand?",
      answer: "No technical skills are required. Prabhand is designed to be intuitive and user-friendly, allowing teachers and administrators to manage all academic operations with ease."
    },
    {
      question: "Can Prabhand integrate with tools we already use?",
      answer: "Yes, Prabhand offers seamless integration with popular educational tools and platforms, allowing you to bring all your academic activities into one unified system."
    },
    {
      question: "Is my data secure on Prabhand?",
      answer: "Absolutely. All academic records, materials, and student data are encrypted and protected with enterprise-grade security measures to ensure your information remains safe."
    },
    {
      question: "Can I try Prabhand before committing?",
      answer: "Yes, we offer a free trial period so you can explore all features and see how Prabhand can transform your institute's academic operations before making a commitment."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 md:py-32 2xl:py-40">
      <div className="mx-auto max-w-4xl 2xl:max-w-5xl px-6 md:px-12 lg:px-20 2xl:px-24">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          style={{ willChange: "transform, opacity" }}
          className="text-center mb-12 md:mb-16"
        >
          {/* FAQ's Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="bg-[#003459] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
              FAQ's
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#1F2937] mb-4"
          >
            Common Questions With Clear Answers
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="text-[#6B7280] text-base md:text-lg 2xl:text-xl max-w-2xl mx-auto"
          >
            Here are answers to the most common things people ask before getting started.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              style={{ willChange: "transform, opacity" }}
              className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => toggleItem(index)}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ willChange: "transform" }}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-[#003459] focus:ring-offset-2 rounded-lg"
              >
                <span className="text-lg md:text-xl 2xl:text-2xl font-semibold text-[#1F2937] pr-8">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-[#6B7280]"
                >
                  {openIndex === index ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </motion.div>
              </motion.button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    style={{ willChange: "height, opacity" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="pt-0 border-t border-[#E5E7EB]">
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-[#6B7280] text-base md:text-lg 2xl:text-xl leading-relaxed pt-6"
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

