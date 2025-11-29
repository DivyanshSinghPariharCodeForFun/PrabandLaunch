"use client";

import React from "react";
import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp } from "@/lib/animations";
import {
  Shield,
  CheckCircle2,
  Database,
  Key,
  Server,
} from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Dedicated & Segregated Data",
      description: "No cross-access between different institutes",
      color: "bg-blue-100 text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Secure Identity Access",
      description: "Only authorized teachers and students can log in to your portal",
      color: "bg-purple-100 text-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Continuous Monitoring & Compliance",
      description: "Regular health checks and secure updates keep your system safe",
      color: "bg-indigo-100 text-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
    },
  ];

  return (
    <section id="security" className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          {...scrollReveal}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Shield className="w-4 h-4 text-slate-600" fill="currentColor" fillOpacity={0.2} />
            <span className="text-sm font-medium text-slate-700">Security & Privacy</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#00a7e1]" />
            Security & Privacy
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Data. Your Control. Fully Protected.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Large Feature Card - Main Message */}
          <motion.div 
            className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#00171f] via-[#003459] to-[#00171f] rounded-3xl p-8 lg:p-10 border border-[#003459] flex flex-col relative overflow-hidden shadow-xl"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-10" 
              style={{ 
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`, 
                backgroundSize: '24px 24px' 
              }}
            />
            
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00a7e1]/20 border border-[#00a7e1]/30 mb-6">
                  <Shield className="w-4 h-4 text-[#00a7e1]" />
                  <span className="text-sm font-medium text-[#00a7e1]">Secure by Design</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Your Data. Your Control.
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  Praband ensures that every institution&apos;s data is private, isolated, and uncompromised. 
                  Whether you&apos;re a school owner or a solo educator, your academic content stays yours — always.
                </p>
              </div>
              
              <div className="space-y-3 pt-6 border-t border-[#003459]/50">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Dedicated data isolation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Continuous monitoring</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-6 border border-gray-200 flex flex-col shadow-sm hover:shadow-md transition-shadow`}
              variants={slideUp}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{feature.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Bottom Message Card */}
          <motion.div
            className="lg:col-span-3 bg-gradient-to-r from-[#00a7e1]/10 via-[#007ea7]/10 to-[#00a7e1]/10 rounded-3xl p-6 border border-[#00a7e1]/30 flex items-center gap-6 shadow-sm"
            variants={slideUp}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <div className="w-14 h-14 rounded-xl bg-[#00a7e1]/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-[#00a7e1]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Secure & Private by Design
              </h4>
              <p className="text-sm text-slate-600">
                Your institute. Your data. Always secure.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
