'use client'
import React from 'react'
import { motion } from 'motion/react'

// Icons
const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
)

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)

const ClockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
)

const UsersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const FileIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
)

const ChartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
)

export default function ProcessSection() {
    return (
        <section id="process" className="bg-white py-20 md:py-32 2xl:py-40">
            <div className="mx-auto max-w-6xl 2xl:max-w-[1400px] px-6 2xl:px-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#007ea7] text-[#003459] text-sm font-medium mb-6"
                    >
                        <StarIcon />
                        <span>Key Features</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-[56px] 2xl:text-[72px] font-bold leading-[1.1]"
                    >
                        <span className="text-gray-900">Explore Our</span>
                        <br />
                        <span className="text-[#007ea7] italic">Powerful Features</span>
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 gap-6 2xl:gap-10">
                    {/* Left Card - Attendance & Scheduling */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative bg-gradient-to-br from-[#ffffff] to-[#ffffff]/50 rounded-3xl p-8 2xl:p-12 min-h-[500px] 2xl:min-h-[600px] overflow-hidden border border-gray-200"
                    >
                        {/* Floating Icons */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-green-500"
                        >
                            <CheckIcon />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="absolute top-12 right-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#007ea7]"
                        >
                            <CalendarIcon />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="absolute bottom-32 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-amber-500"
                        >
                            <ClockIcon />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            className="absolute top-1/3 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-purple-500"
                        >
                            <UsersIcon />
                        </motion.div>

                        {/* Dashboard Card */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -12 }}
                            whileInView={{ opacity: 1, rotate: -6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-[#003459] rounded-2xl p-5 shadow-2xl"
                        >
                            <h4 className="text-white text-sm font-semibold mb-4">Today's Schedule</h4>
                            <div className="space-y-3">
                                {[
                                    { color: 'bg-green-400', label: 'Mathematics', time: '9:00 AM' },
                                    { color: 'bg-amber-400', label: 'Physics', time: '11:00 AM' },
                                    { color: 'bg-purple-400', label: 'Chemistry', time: '2:00 PM' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/80 text-xs">
                                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                        <span className="flex-1">{item.label}</span>
                                        <span className="text-white/50">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Title at bottom */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900 mb-2">Attendance & Scheduling</h3>
                            <p className="text-gray-500 text-sm 2xl:text-base">Automate attendance tracking and class scheduling with smart tools.</p>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 2xl:gap-10">
                        {/* Card 2 - Exams & Assignments */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-[#ffffff] to-[#ffffff]/50 rounded-3xl p-6 2xl:p-8 flex-1 border border-gray-200"
                        >
                            <h3 className="text-lg 2xl:text-xl font-bold text-gray-900 mb-1">Exams & Assignments</h3>
                            <p className="text-gray-500 text-sm 2xl:text-base mb-4">Manage exams and track assignment submissions effortlessly.</p>
                            
                            <div className="space-y-3">
                                {[
                                    { icon: <FileIcon />, title: 'Mid-Term Exam', subtitle: 'Mathematics', stat: '45 students', badge: 'Scheduled' },
                                    { icon: <FileIcon />, title: 'Assignment #3', subtitle: 'Physics Lab', stat: '38/42 submitted', badge: 'Active' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                        className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm"
                                    >
                                        <div className="w-10 h-10 bg-[#ffffff] rounded-lg flex items-center justify-center text-[#003459]">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                                            <p className="text-xs text-gray-400">{item.subtitle}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500">{item.stat}</p>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${i === 0 ? 'bg-[#ffffff] text-[#003459]' : 'bg-green-100 text-green-600'}`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Card 3 - CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative bg-[#007ea7] rounded-3xl p-6 2xl:p-8 h-64 2xl:h-72 overflow-hidden border border-[#007ea7]"
                        >
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 400 256" preserveAspectRatio="none">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="256" stroke="white" strokeWidth="1" />
                                    ))}
                                    {Array.from({ length: 13 }).map((_, i) => (
                                        <line key={`h-${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="white" strokeWidth="1" />
                                    ))}
                                </svg>
                            </div>
                            
                            {/* Faded Icon */}
                            <div className="absolute -right-4 -bottom-4 text-white/10">
                                <svg width="160" height="160" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl 2xl:text-3xl font-bold text-white mb-4">Try Prabhand Free</h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-[#007ea7] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#ffffff] transition-colors"
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Row - Analytics Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6 2xl:mt-10 bg-gradient-to-br from-[#ffffff] to-[#ffffff]/50 rounded-3xl p-8 2xl:p-12 min-h-[400px] 2xl:min-h-[500px] flex flex-col md:flex-row items-center gap-8 2xl:gap-12 border border-gray-200"
                >
                    {/* Left Content */}
                    <div className="flex-1">
                        <h3 className="text-2xl 2xl:text-3xl font-bold text-gray-900 mb-3">AI-Powered Analytics</h3>
                        <p className="text-gray-500 2xl:text-lg max-w-md">
                            Get intelligent insights and predictions to make data-driven decisions for your institute's growth.
                        </p>
                    </div>

                    {/* Right Visual */}
                    <div className="flex-1 relative flex items-center justify-center gap-4">
                        {/* Chart Card */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 6 }}
                            whileInView={{ opacity: 1, rotate: 3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-[#003459] rounded-2xl p-6 w-48 shadow-xl"
                        >
                            <div className="text-white/60 mb-4">
                                <ChartIcon />
                            </div>
                            <h4 className="text-white text-sm font-semibold mb-1">Performance</h4>
                            <p className="text-white/60 text-xs">Monthly Report</p>
                        </motion.div>

                        {/* Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="bg-white rounded-3xl p-4 w-40 shadow-xl border border-gray-100"
                        >
                            <div className="flex items-end justify-center gap-2 h-32">
                                {[60, 80, 45, 90, 70].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                                        className={`w-4 rounded-t-md ${i % 2 === 0 ? 'bg-[#003459]' : 'bg-[#007ea7]'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-3">Weekly Stats</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Second Section - Education Workflows Bento Grid */}
            <div className="mx-auto max-w-6xl 2xl:max-w-[1400px] px-6 2xl:px-12 mt-24 2xl:mt-32">
                <div className="grid md:grid-cols-3 gap-6 2xl:gap-10">
                    {/* Left Large Card - Dark Blue */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#003459] rounded-3xl p-8 2xl:p-12 md:row-span-2 flex flex-col justify-between min-h-[480px] 2xl:min-h-[560px]"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-white leading-tight mb-4">
                                Designed for real-world education workflows
                            </h3>
                            <p className="text-white/60 text-sm 2xl:text-base leading-relaxed">
                                From setup to daily use, Prabhand streamlines academic workflows — making attendance, exams, and reporting feel simple from day one.
                            </p>
                        </div>
                        
                        {/* Icons Row */}
                        <div className="flex gap-3 my-6">
                            {[
                                <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
                                <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
                                <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            ].map((icon, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/80"
                                >
                                    {icon}
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#007ea7] text-white py-4 rounded-xl font-semibold text-sm hover:bg-[#94ab00] transition-colors"
                        >
                            Get started with Prabhand
                        </motion.button>
                    </motion.div>

                    {/* Top Right Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border border-gray-200 rounded-3xl p-6 2xl:p-8"
                    >
                        <div className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12 6 12 12 16 14"/>
                            </svg>
                        </div>
                        <h4 className="text-lg 2xl:text-xl font-bold text-gray-900 mb-2">Easy onboarding</h4>
                        <p className="text-gray-500 text-sm 2xl:text-base leading-relaxed">
                            Guided setup and hands-on support help your team feel confident with Prabhand in just a few days.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white border border-gray-200 rounded-3xl p-6 2xl:p-8"
                    >
                        <div className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                            </svg>
                        </div>
                        <h4 className="text-lg 2xl:text-xl font-bold text-gray-900 mb-2">Fast adoption</h4>
                        <p className="text-gray-500 text-sm 2xl:text-base leading-relaxed">
                            Prabhand's clean workflows make it easy for educators and staff to jump in and get value quickly.
                        </p>
                    </motion.div>

                    {/* Bottom Right Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white border border-gray-200 rounded-3xl p-6 2xl:p-8"
                    >
                        <div className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="7 17 17 7"/>
                                <polyline points="7 7 17 7 17 17"/>
                            </svg>
                        </div>
                        <h4 className="text-lg 2xl:text-xl font-bold text-gray-900 mb-2">Flexible integrations</h4>
                        <p className="text-gray-500 text-sm 2xl:text-base leading-relaxed">
                            Connect with payment gateways, communication tools, and student portals — no disruption to your flow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-white border border-gray-200 rounded-3xl p-6 2xl:p-8"
                    >
                        <div className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"/>
                                <line x1="12" y1="20" x2="12" y2="4"/>
                                <line x1="6" y1="20" x2="6" y2="14"/>
                            </svg>
                        </div>
                        <h4 className="text-lg 2xl:text-xl font-bold text-gray-900 mb-2">Scalable for growth</h4>
                        <p className="text-gray-500 text-sm 2xl:text-base leading-relaxed">
                            Prabhand adapts as you scale with role-based access, multi-branch support, and advanced controls.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
