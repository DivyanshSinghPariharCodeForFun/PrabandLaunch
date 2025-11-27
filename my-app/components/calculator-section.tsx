'use client'
import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { motion } from 'motion/react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function CalculatorSection() {
    const [numTeachers, setNumTeachers] = useState(12)
    const [weeklyHours, setWeeklyHours] = useState(11)
    const [hourlyValue, setHourlyValue] = useState(40)

    const calculations = useMemo(() => {
        // Calculate monthly hours: weekly hours * 4.33 weeks per month * number of teachers
        const monthlyHours = weeklyHours * 4.33 * numTeachers
        // Calculate monthly cost: monthly hours * hourly value
        const monthlyCost = monthlyHours * hourlyValue

        return {
            monthlyHours: Math.round(monthlyHours),
            monthlyCost: Math.round(monthlyCost),
        }
    }, [numTeachers, weeklyHours, hourlyValue])

    return (
        <section id="calculator" className="bg-[#ffffff] py-20 md:py-32 2xl:py-40">
            <div className="mx-auto max-w-4xl 2xl:max-w-5xl px-6 2xl:px-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-sm 2xl:text-base font-semibold uppercase tracking-wider text-[#003459] mb-4">
                        CALCULATOR
                    </TextEffect>
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.2}
                        as="h3"
                        className="text-3xl font-bold md:text-4xl 2xl:text-5xl">
                        Quantify the cost of not automating.
                    </TextEffect>
                </div>

                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="space-y-8"
                >
                    {/* Input Fields */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                        style={{ willChange: "transform, opacity" }}
                        className="bg-white border border-[#E5E7EB] rounded-xl p-8 2xl:p-12 space-y-8 2xl:space-y-10"
                    >
                        {/* Number of Teachers */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-base 2xl:text-lg font-medium text-foreground">
                                    Number of Teachers
                                </label>
                                <motion.span
                                    key={numTeachers}
                                    initial={{ scale: 1.2, color: '#007ea7' }}
                                    animate={{ scale: 1, color: 'inherit' }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{ willChange: "transform" }}
                                    className="text-lg font-semibold text-foreground"
                                >
                                    {numTeachers}
                                </motion.span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={numTeachers}
                                onChange={(e) => setNumTeachers(Number(e.target.value))}
                                className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#007ea7]"
                            />
                        </motion.div>

                        {/* Weekly manual admin hours */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-base 2xl:text-lg font-medium text-foreground">
                                    Weekly manual admin hours per teacher
                                </label>
                                <motion.span
                                    key={weeklyHours}
                                    initial={{ scale: 1.2, color: '#007ea7' }}
                                    animate={{ scale: 1, color: 'inherit' }}
                                    transition={{ duration: 0.3 }}
                                    className="text-lg font-semibold text-foreground"
                                >
                                    {weeklyHours}
                                </motion.span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                How many hours per week each team teacher spends on manual tasks (estimated).
                            </p>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={weeklyHours}
                                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                                className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#007ea7]"
                            />
                        </motion.div>

                        {/* Teacher hourly value */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-base 2xl:text-lg font-medium text-foreground">
                                    Teacher hourly value
                                </label>
                                <motion.span
                                    key={hourlyValue}
                                    initial={{ scale: 1.2, color: '#007ea7' }}
                                    animate={{ scale: 1, color: 'inherit' }}
                                    transition={{ duration: 0.3 }}
                                    className="text-lg font-semibold text-foreground"
                                >
                                    Rs. {hourlyValue}
                                </motion.span>
                            </div>
                            <input
                                type="range"
                                min="20"
                                max="200"
                                step="10"
                                value={hourlyValue}
                                onChange={(e) => setHourlyValue(Number(e.target.value))}
                                className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#007ea7]"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
                            style={{ willChange: "transform, opacity" }}
                            className="bg-[#003459] text-white rounded-xl p-8"
                        >
                            <div className="space-y-4">
                                <motion.p
                                    key={calculations.monthlyHours}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-xl font-semibold text-white"
                                >
                                    You&apos;re losing ~{calculations.monthlyHours} hours/month to repetitive tasks.
                                </motion.p>
                                <motion.p
                                    key={calculations.monthlyCost}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="text-xl font-semibold text-white"
                                >
                                    That&apos;s Rs. {calculations.monthlyCost.toLocaleString('en-IN')}/month in time costs.
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
                        style={{ willChange: "transform, opacity" }}
                        className="space-y-6"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-muted-foreground leading-relaxed text-base 2xl:text-lg text-center max-w-2xl mx-auto"
                        >
                            Prabhand automates over 80% of academic operations, giving teachers more time to teach — not manage paperwork.
                        </motion.p>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{ willChange: "transform" }}
                        >
                        </motion.div>
                    </motion.div>

                </AnimatedGroup>
            </div>
        </section>
    )
}

