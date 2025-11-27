'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Institutions', href: '#institutions' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState('')
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScrollBg = () => {
            setIsScrolled(window.scrollY > 600)
        }
        window.addEventListener('scroll', handleScrollBg)
        handleScrollBg()
        return () => window.removeEventListener('scroll', handleScrollBg)
    }, [])

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.href.replace('#', ''))
            const scrollPosition = window.scrollY + 150

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            const headerOffset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-50 w-full lg:w-[calc(100%-32px)] lg:max-w-4xl 2xl:max-w-5xl"
        >
            <nav className={`px-6 py-3 lg:rounded-full lg:px-4 lg:py-2 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b lg:border border-gray-200/50 shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-md lg:bg-transparent lg:shadow-none lg:backdrop-blur-none'}`}>
                <div className="flex items-center justify-between">
                    {/* Left - Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#003459] rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <span className={`font-semibold 2xl:text-lg transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}>Praband</span>
                    </Link>

                    {/* Center - Navigation pills (desktop) */}
                    <div className={`hidden lg:flex items-center rounded-full px-1 py-1 transition-colors duration-300 ${isScrolled ? 'bg-gray-100' : 'bg-white/10'}`}>
                        {menuItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '')
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollToSection(item.href)
                                    }}
                                    className={`relative px-3 py-1.5 2xl:px-4 2xl:py-2 text-sm 2xl:text-base font-medium rounded-full transition-all duration-200 ${
                                        isActive
                                            ? isScrolled ? 'text-gray-900 bg-white shadow-sm' : 'text-white bg-white/20 shadow-sm'
                                            : isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00171f] rounded-full" />
                                    )}
                                </a>
                            )
                        })}
                    </div>

                    {/* Right - CTA button (desktop) */}
                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('#contact')
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:block bg-[#007ea7] text-white text-sm 2xl:text-base font-medium px-4 py-2 2xl:px-6 2xl:py-2.5 rounded-full hover:bg-[#003459] transition-colors"
                    >
                        Contact Us
                    </motion.a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                        className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-600'}`}
                    >
                        {menuState ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {menuState && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden mt-4 pb-4"
                    >
                        <div className="flex flex-col gap-2">
                            {menuItems.map((item) => {
                                const isActive = activeSection === item.href.replace('#', '')
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setMenuState(false)
                                            scrollToSection(item.href)
                                        }}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                            isActive
                                                ? 'text-gray-900 bg-gray-100'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                )
                            })}
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setMenuState(false)
                                    scrollToSection('#contact')
                                }}
                                className="mt-2 bg-[#007ea7] text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-[#003459] transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )
}
