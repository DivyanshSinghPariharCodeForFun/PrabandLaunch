"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { scrollReveal, slideUp, scale } from "@/lib/animations";

export default function CalculatorSection() {
  const [numTeachers, setNumTeachers] = useState(12);
  const [weeklyHours, setWeeklyHours] = useState(11);
  const [hourlyValue, setHourlyValue] = useState(40);
  const [displayHours, setDisplayHours] = useState(0);
  const [displayCost, setDisplayCost] = useState(0);

  const calculations = useMemo(() => {
    // Calculate monthly hours (assuming 4.33 weeks per month)
    const monthlyHours = numTeachers * weeklyHours * 4.33;
    // Calculate monthly cost
    const monthlyCost = monthlyHours * hourlyValue;
    
    return {
      monthlyHours: Math.round(monthlyHours),
      monthlyCost: Math.round(monthlyCost),
    };
  }, [numTeachers, weeklyHours, hourlyValue]);

  // Animate number counting
  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const stepValue = calculations.monthlyHours / steps;
    const stepCost = calculations.monthlyCost / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setDisplayHours(Math.round(stepValue * currentStep));
        setDisplayCost(Math.round(stepCost * currentStep));
      } else {
        clearInterval(timer);
        setDisplayHours(calculations.monthlyHours);
        setDisplayCost(calculations.monthlyCost);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [calculations.monthlyHours, calculations.monthlyCost]);

  return (
    <section 
      id="calculator" 
      className="relative py-20 px-6 bg-white overflow-hidden scroll-mt-20"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0, 167, 225, 0.05) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          {...scrollReveal}
        >
          <motion.div 
            className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            CALCULATOR
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Quantify the cost of not automating.
          </motion.h2>
        </motion.div>

        {/* Calculator Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Input Fields */}
          <div className="space-y-8 mb-10">
            {/* Number of Teachers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-900">
                  Number of Teachers
                </label>
                <span className="text-2xl font-bold text-gray-900">
                  {numTeachers}
                </span>
              </div>
              <motion.input
                type="range"
                min="1"
                max="100"
                value={numTeachers}
                onChange={(e) => setNumTeachers(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a7e1]"
                style={{
                  background: `linear-gradient(to right, #00a7e1 0%, #00a7e1 ${((numTeachers - 1) / 99) * 100}%, #e5e7eb ${((numTeachers - 1) / 99) * 100}%, #e5e7eb 100%)`,
                }}
                whileHover={{ scale: 1.02 }}
              />
            </div>

            {/* Weekly Hours */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-900">
                  Weekly manual admin hours per teacher
                </label>
                <span className="text-2xl font-bold text-gray-900">
                  {weeklyHours}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a7e1]"
                style={{
                  background: `linear-gradient(to right, #00a7e1 0%, #00a7e1 ${((weeklyHours - 1) / 39) * 100}%, #e5e7eb ${((weeklyHours - 1) / 39) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <p className="text-sm text-gray-600 mt-2">
                How many hours per week each team teacher spends on manual tasks (estimated).
              </p>
            </div>

            {/* Teacher Hourly Value */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-900">
                  Teacher hourly value
                </label>
                <span className="text-2xl font-bold text-gray-900">
                  Rs. {hourlyValue}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={hourlyValue}
                onChange={(e) => setHourlyValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00a7e1]"
                style={{
                  background: `linear-gradient(to right, #00a7e1 0%, #00a7e1 ${((hourlyValue - 20) / 180) * 100}%, #e5e7eb ${((hourlyValue - 20) / 180) * 100}%, #e5e7eb 100%)`,
                }}
              />
            </div>
          </div>

          {/* Results Display */}
          <motion.div 
            className="bg-[#00171f] rounded-xl p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <motion.p 
                className="text-xl md:text-2xl font-semibold"
                key={`hours-${displayHours}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                You&apos;re losing ~{displayHours.toLocaleString()} hours/month to repetitive tasks.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl font-semibold"
                key={`cost-${displayCost}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                That&apos;s Rs. {displayCost.toLocaleString()}/month in time costs.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Concluding Statement */}
        <motion.p 
          className="text-center text-lg text-gray-700 mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Praband automates over 80% of academic operations, giving teachers more time to teach — not manage paperwork.
        </motion.p>
      </div>
    </section>
  );
}

