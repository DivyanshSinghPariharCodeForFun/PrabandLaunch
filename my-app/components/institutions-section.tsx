'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Building2, 
  BookOpen, 
  FileText,
  Heart,
  Bus
} from 'lucide-react'

interface Institution {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const institutions: Institution[] = [
  {
    id: 'tuition-teachers',
    name: 'Tuition Teachers',
    description: 'Streamline individual teaching operations with automated scheduling, student management, and progress tracking.',
    icon: Building2
  },
  {
    id: 'coaching-institutes',
    name: 'Coaching Institutes',
    description: 'Manage multiple courses, batches, and students with comprehensive workflow automation and analytics.',
    icon: BookOpen
  },
  {
    id: 'training-centers',
    name: 'Training Centers',
    description: 'Efficiently manage skill development programs, certifications, and professional training courses.',
    icon: Bus
  },
  {
    id: 'departments',
    name: 'Departments',
    description: 'Organize and manage departmental workflows across educational institutions.',
    icon: Heart
  }
]

const floatingButtons = [
  { name: 'Departments', Icon: Heart },
  { name: 'Training Centers', Icon: Bus },
  { name: 'Tuition Teachers', Icon: Building2 },
  { name: 'Coaching Institutes', Icon: BookOpen }
]

export default function InstitutionsSection() {
  const [expandedId, setExpandedId] = useState<string>('tuition-teachers')

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? '' : id)
  }

  return (
    <section id="institutions" className="bg-white py-20 md:py-32 2xl:py-40">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-6 2xl:px-12">
        <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 items-stretch min-h-[600px] 2xl:min-h-[700px]">
          
          {/* Left Side - Gradient Background with Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ willChange: "transform, opacity" }}
            className="relative rounded-lg overflow-hidden bg-gradient-to-br from-[#007ea7] via-[#007ea7] to-[#007ea7] p-8 md:p-12"
          >
            {/* Floating UI Elements */}
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
              {/* SaaS Tab */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{ willChange: "transform, opacity" }}
                className="bg-[#003459] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 shadow-lg z-10"
              >
                <FileText className="w-4 h-4" />
                <span>SaaS</span>
              </motion.div>

              {/* Floating Buttons - Vertical Layout */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                {floatingButtons.map((button, index) => {
                  const { Icon, name } = button
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                        delay: 0.3 + index * 0.1
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{ willChange: "transform, opacity" }}
                      className="bg-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - White Background with Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ willChange: "transform, opacity" }}
            className="bg-white rounded-lg p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              {/* Small Heading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
                className="text-xs font-bold uppercase tracking-wider text-[#003459] mb-6"
              >
                INSTITUTIONS
              </motion.p>

              {/* Large Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-foreground mb-12 leading-tight"
              >
                Built for real classroom <br />
                Across every type of
              </motion.h2>

              {/* Accordion List */}
              <div className="space-y-0 mb-8">
                {institutions.map((institution, index) => {
                  const isExpanded = expandedId === institution.id
                  
                  return (
                    <motion.div
                      key={institution.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 + index * 0.1 }}
                      className="border-b border-border last:border-b-0"
                    >
                      <motion.button
                        onClick={() => toggleExpanded(institution.id)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ willChange: "transform" }}
                        className="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
                      >
                        <span className="text-lg 2xl:text-xl font-medium text-foreground">
                          {institution.name}
                        </span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-foreground text-xl"
                        >
                          {isExpanded ? '×' : '+'}
                        </motion.span>
                      </motion.button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pb-4 text-muted-foreground leading-relaxed">
                              {institution.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

