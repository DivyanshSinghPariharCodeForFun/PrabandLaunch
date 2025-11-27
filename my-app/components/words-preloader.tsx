'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const greetingSets = [
    // Original "Good morning maam"
    [
        'Goooood',
        'Morninggg',
        'Maaaaaaam',
    ],
    // Creative variation 1
    [
        'Namaste',
        'Teacherrr',
        'Ji!',
    ],
    // Creative variation 2
    [
        'Hello',
        'Beautiful',
        'Mind!',
    ],
    // Creative variation 3
    [
        'Welcome',
        'To',
        'Praband!',
    ],
    // Creative variation 4
    [
        'Ready',
        'To',
        'Learn?',
    ],
    // Creative variation 5
    [
        'Let\'s',
        'Begin',
        'Today!',
    ],
]

export function WordsPreloader() {
    const [greetings, setGreetings] = useState<string[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Randomly select a greeting set on component mount (every refresh)
        const randomSet = greetingSets[Math.floor(Math.random() * greetingSets.length)]
        setGreetings(randomSet)
    }, [])

    useEffect(() => {
        if (greetings.length === 0) return
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length)
        }, 600)

        return () => clearInterval(interval)
    }, [greetings])

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
                >
                    <AnimatePresence mode="wait">
                        {greetings.length > 0 && (
                            <motion.h1
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-7xl md:text-9xl font-light tracking-tight text-black dark:text-white"
                                style={{
                                    fontFamily: 'var(--font-noto-sans), system-ui, -apple-system, sans-serif',
                                }}
                            >
                                {greetings[currentIndex]}
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export function useWordsPreloader(duration: number = 2500) {
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    return showPreloader
}

