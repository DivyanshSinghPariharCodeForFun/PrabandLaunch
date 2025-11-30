"use client";

import { useState } from "react";
import { Heart, Truck, GraduationCap, Book, FileText, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp, slideLeft, slideRight } from "@/lib/animations";

export default function InstitutionsSection() {
  const [expandedItem, setExpandedItem] = useState<string>("tuition-teachers");

  const institutions = [
    {
      id: "tuition-teachers",
      title: "Tuition Teachers",
      description: "Streamline individual teaching operations with automated scheduling, student management, and progress tracking.",
      icon: GraduationCap,
    },
    {
      id: "coaching-institutes",
      title: "Coaching Institutes",
      description: "Manage multiple batches, track student progress, handle payments, and streamline operations for coaching centers.",
      icon: Book,
    },
    {
      id: "training-centers",
      title: "Training Centers",
      description: "Organize training programs, manage participants, schedule sessions, and track certification progress.",
      icon: Truck,
    },
    {
      id: "departments",
      title: "Departments",
      description: "Coordinate departmental activities, manage resources, track academic progress, and streamline administrative tasks.",
      icon: Heart,
    },
  ];

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? "" : id);
  };

  return (
    <section 
      id="institutions" 
      className="relative py-20 px-6 bg-white overflow-hidden scroll-mt-20"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Left Panel - Teal Blue Background */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden" 
            style={{ backgroundColor: '#003459' }}
            variants={slideLeft}
          >
            <div 
              className="h-full p-8 lg:p-12 relative"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            >
              {/* SaaS Button */}
              <div className="flex justify-end mb-6">
                <button className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                  <FileText className="w-4 h-4" />
                  SaaS
                </button>
              </div>

              {/* Institution Type Buttons */}
              <motion.div 
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {institutions.map((institution, index) => {
                  const Icon = institution.icon;
                  const isActive = expandedItem === institution.id;
                  
                  return (
                    <motion.button
                      key={institution.id}
                      onClick={() => toggleItem(institution.id)}
                      className={`w-full bg-white rounded-lg px-6 py-4 flex items-center gap-3 text-left transition-all ${
                        isActive ? 'ring-2 ring-white/50 shadow-lg' : 'hover:bg-gray-50'
                      }`}
                      variants={slideUp}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5 text-gray-700 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{institution.title}</span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - White Background */}
          <motion.div 
            className="flex flex-col justify-center"
            variants={slideRight}
          >
            <div 
              className="h-full p-8 lg:p-12 rounded-2xl"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            >
              {/* Section Label */}
              <motion.div 
                className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                INSTITUTIONS
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Built for real classroom<br />
                Across every type of<br />
                <span className="text-[#007ea7]">Educational Institution</span>
              </motion.h2>

              {/* Accordion List */}
              <motion.div 
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {institutions.map((institution) => {
                  const isExpanded = expandedItem === institution.id;
                  
                  return (
                    <motion.div
                      key={institution.id}
                      className="border-b border-gray-200 pb-4"
                      variants={slideUp}
                    >
                      <motion.button
                        onClick={() => toggleItem(institution.id)}
                        className="w-full flex items-center justify-between py-4 text-left group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {institution.title}
                        </h3>
                        <motion.div 
                          className="flex-shrink-0 ml-4"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isExpanded ? (
                            <Minus className="w-5 h-5 text-gray-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-600" />
                          )}
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div 
                            className="mt-2 text-gray-600 leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {institution.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

