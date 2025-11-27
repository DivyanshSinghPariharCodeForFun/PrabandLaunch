'use client'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { motion } from 'motion/react'

export const LogoCloud = () => {
    return (
        <section className="section-secondary py-16 md:py-24">
            <div className="group relative m-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline md:max-w-44 md:border-r md:border-[#003459]/20 md:pr-6 mb-4 md:mb-0"
                    >
                        <p className="text-end text-sm text-[#003459]/70">Trusted by educators</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative py-6 md:w-[calc(100%-11rem)] w-full"
                    >
                        <div className="relative overflow-hidden">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={60}
                                className="w-full">
                                <span className="text-[#003459]/60 whitespace-nowrap text-sm font-medium px-4">Tuition Teachers</span>
                                <span className="text-[#003459]/60 whitespace-nowrap text-sm font-medium px-4">Coaching Institutes</span>
                                <span className="text-[#003459]/60 whitespace-nowrap text-sm font-medium px-4">Online Tutors</span>
                                <span className="text-[#003459]/60 whitespace-nowrap text-sm font-medium px-4">Test Prep Centers</span>
                                <span className="text-[#003459]/60 whitespace-nowrap text-sm font-medium px-4">Skill Training Institutes</span>
                            </InfiniteSlider>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#ffffff] to-transparent z-10"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
