'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const AiSupplyPage = () => {
  return (
    <div id="features" className="min-h-screen bg-[#ffffff] text-[#1F2937] font-sans selection:bg-[#007ea7]">
      
      {/* --- Header Section --- */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ willChange: "transform, opacity" }}
        className="container mx-auto px-6 2xl:px-12 pt-24 2xl:pt-32 pb-16 2xl:pb-24 text-center max-w-6xl 2xl:max-w-[1400px]"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
          className="text-xs 2xl:text-sm font-bold tracking-[0.2em] uppercase mb-6 text-[#003459]"
        >
          Introducing AI Supply
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl 2xl:text-8xl text-[#1F2937] leading-[1.1]"
        >
          AI agents designed to think, <br className="hidden md:block" />
          act, and deliver at scale
        </motion.h1>
      </motion.header>

      {/* --- Main Content Grid --- */}
      <main className="container mx-auto px-6 2xl:px-12 pb-24 2xl:pb-32 max-w-7xl 2xl:max-w-[1600px]">
        
        {/* Top Row: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 mb-6 2xl:mb-10">
          
          {/* Card 1: Data Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            className="bg-white p-8 md:p-12 rounded-sm flex flex-col border border-[#E5E7EB]"
          >
            {/* Graphic Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ willChange: "transform" }}
              className="w-full aspect-[4/3] mb-10 overflow-hidden"
            >
              <Image
                src="/dashboard-interface.png"
                alt="Data Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-normal mb-4 text-[#1F2937]">
                Unify and Analyze All Your Data
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-lg 2xl:text-xl font-light">
                Connect internal docs, third-party tools, and real-time inputs into a single intelligent interface. Let AI surface insights that drive smarter, more confident business decisions.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Workflows */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            style={{ willChange: "transform, opacity" }}
            className="bg-white p-8 md:p-12 rounded-sm flex flex-col border border-[#E5E7EB]"
          >
            {/* Graphic Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ willChange: "transform" }}
              className="w-full aspect-[4/3] mb-10 overflow-hidden"
            >
              <Image
                src="/workflow-automation.png"
                alt="Automated Workflow Interface"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-normal mb-4 text-[#1F2937]">
                Automate High-Frequency Workflows
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-lg 2xl:text-xl font-light">
                AI Supply agents break down complex tasks into clear, traceable steps. Eliminate repetitive work and scale your team's output with unmatched efficiency and precision.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: Wide Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          style={{ willChange: "transform, opacity" }}
          className="bg-gray-50 rounded-sm overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              style={{ willChange: "transform, opacity" }}
              className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-normal mb-6 text-[#1F2937] leading-tight">
                Accelerate Execution <br />
                with Reliable Autonomy
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-lg 2xl:text-xl font-light mb-10 max-w-md">
                Our agents don't just assist — they complete tasks end-to-end with accountability and speed. Track progress, refine outputs, and get results faster.
              </p>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 hidden">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-3">
                    {['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-green-500 to-green-600'].map((gradient, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        className={`w-8 h-8 rounded-full border-2 border-gray-50 bg-gradient-to-br ${gradient}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    <strong>Trusted by</strong> 300+ clients
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Graphic Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
              style={{ willChange: "transform, opacity" }}
              className="w-full md:w-1/2 min-h-[400px] md:min-h-auto bg-[#ffffff] relative"
            >
              <Image
                src="/ImageOne.png"
                alt="Growth and Execution Visualization"
                fill
                className="object-cover mix-blend-multiply opacity-90"
              />
              {/* Overlay to match the slight fade effect of the original design */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/20 pointer-events-none"></div>
            </motion.div>

          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default AiSupplyPage;
