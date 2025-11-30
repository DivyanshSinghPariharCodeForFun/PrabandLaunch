"use client";

import React from "react";
import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp } from "@/lib/animations";
import {
  BarChart,
  TrendingUp,
  PieChart,
  LineChart,
  Users,
  DollarSign,
  Award,
  Target,
  Eye,
  Activity,
  Sparkles,
  ArrowRight,
  ClipboardCheck,
  FileText,
} from "lucide-react";

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="bg-gradient-to-b from-white via-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
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
            <BarChart className="w-4 h-4 text-slate-600" fill="currentColor" fillOpacity={0.2} />
            <span className="text-sm font-medium text-slate-700">Analytics & Insights</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <BarChart className="w-10 h-10 md:w-12 md:h-12 text-[#00a7e1]" />
            Analytics
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-500 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Make data-driven decisions with comprehensive analytics and insights for admins, teachers, and students
          </motion.p>
        </motion.div>

        {/* Analytics Tabs */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Admin Analytics */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Admin Analytics</h3>
                <p className="text-sm text-slate-500">Institutional insights</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Revenue Analytics</div>
                  <div className="text-sm text-slate-500">Course-wise, batch-wise, time-wise trends</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Activity className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Engagement Metrics</div>
                  <div className="text-sm text-slate-500">Student/teacher activity levels</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Teacher Contribution Analytics</div>
                  <div className="text-sm text-slate-500">Content creation vs. outcomes</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Top Performers Dashboards</div>
                  <div className="text-sm text-slate-500">Recognition and action insights</div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Teacher Analytics */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <BarChart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Teacher Analytics</h3>
                <p className="text-sm text-slate-500">Performance insights</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Exam & Quiz Performance</div>
                  <div className="text-sm text-slate-500">Class averages, accuracy by topic</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Weak Area Detection</div>
                  <div className="text-sm text-slate-500">Targeted improvements</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Assignment Tracking</div>
                  <div className="text-sm text-slate-500">Submissions, delays, grading status</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Student Insights</div>
                  <div className="text-sm text-slate-500">Spot struggling or high-potential learners</div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Student Analytics */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Student Analytics</h3>
                <p className="text-sm text-slate-500">Personal insights</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Personal Scoring Dashboard</div>
                  <div className="text-sm text-slate-500">Improvement trends</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PieChart className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Topic-wise Analysis</div>
                  <div className="text-sm text-slate-500">Strengths & weaknesses</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Ranks & Comparisons</div>
                  <div className="text-sm text-slate-500">Batch comparisons</div>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Progress Insights</div>
                  <div className="text-sm text-slate-500">Stay motivated and focused</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00a7e1] text-white rounded-full font-medium hover:bg-[#007ea7] transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,167,225,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Analytics Dashboard
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

