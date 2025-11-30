"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#institutions", label: "Institutions" },
  { href: "#calculator", label: "Calculator" },
  { href: "#features", label: "Features" },
  { href: "#intelligent-features", label: "AI Features" },
  { href: "#role-features", label: "Benefits" },
  { href: "#analytics", label: "Analytics" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQs" },
];

// Map sections to their background type (dark or light)
const sectionBackgrounds: Record<string, 'dark' | 'light'> = {
  'home': 'dark',
  'your-institution': 'light',
  'institutions': 'light',
  'calculator': 'light',
  'features': 'light',
  'intelligent-features': 'light',
  'role-features': 'light',
  'analytics': 'light',
  'security': 'light',
  'faq': 'light',
  'contact': 'dark',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("institutions");
  const [upcomingSection, setUpcomingSection] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const lookAheadDistance = viewportHeight * 0.3; // Look 30% ahead
      
      // Check if we're in the hero section
      const heroSection = document.querySelector("#home");
      let inHeroSection = false;
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom + window.pageYOffset;
        inHeroSection = scrollY < heroBottom - 100; // 100px buffer before showing navbar
      } else {
        // Fallback: use scroll position if hero section not found
        inHeroSection = scrollY < 600;
      }
      
      setIsScrolled(!inHeroSection);

      // All sections including home, your-institution, and contact
      const allSections = ['home', 'your-institution', ...navItems.map((item) => item.href.substring(1)), 'contact'];
      const scrollPosition = scrollY + 150;
      const futureScrollPosition = scrollY + lookAheadDistance;

      // Find current active section
      for (let i = allSections.length - 1; i >= 0; i--) {
        const element = document.querySelector(`#${allSections[i]}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPosition >= elementTop) {
            setActiveSection(allSections[i]);
            break;
          }
        }
      }

      // Find upcoming section (section that will be visible soon)
      let upcomingSectionType: 'dark' | 'light' = 'light';
      for (let i = 0; i < allSections.length; i++) {
        const element = document.querySelector(`#${allSections[i]}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const elementBottom = elementTop + element.getBoundingClientRect().height;
          
          // If this section is coming into view soon
          if (futureScrollPosition >= elementTop && futureScrollPosition < elementBottom) {
            upcomingSectionType = sectionBackgrounds[allSections[i]] || 'light';
            break;
          }
        }
      }

      // If no upcoming section found, check current section
      if (upcomingSectionType === 'light') {
        for (let i = allSections.length - 1; i >= 0; i--) {
          const element = document.querySelector(`#${allSections[i]}`);
          if (element) {
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            if (scrollPosition >= elementTop) {
              upcomingSectionType = sectionBackgrounds[allSections[i]] || 'light';
              break;
            }
          }
        }
      }

      // If we're in a light section (like your-institution), ensure light theme is used
      const currentSectionElement = document.querySelector(`#${activeSection}`);
      if (currentSectionElement && sectionBackgrounds[activeSection] === 'light') {
        upcomingSectionType = 'light';
      }

      setUpcomingSection(upcomingSectionType);
    };

    // Check initial scroll position after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = href.substring(1);
      setActiveSection(section);
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    setIsMobileMenuOpen(false);
  };

  // Determine if navbar should use light or dark theme based on upcoming section
  // Use dark theme only when in hero section with dark background, otherwise use light for visibility
  // Also check if current section is light to ensure navbar is visible
  const useDarkTheme = !isScrolled && upcomingSection === 'dark' && activeSection !== 'your-institution';
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-32px)] lg:max-w-6xl 2xl:max-w-7xl transition-all duration-300 rounded-lg lg:rounded-full ${
        useDarkTheme
          ? "bg-white/10 backdrop-blur-md border-b lg:border border-white/20 shadow-lg"
          : "bg-white/80 backdrop-blur-md border-b lg:border border-gray-200/50 shadow-lg"
      }`}
    >
      <nav className="px-4 py-2.5 lg:rounded-full lg:px-3 lg:py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("institutions");
              }
            }}
          >
            <div className="relative w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9">
              <Image
                src="/praband/logo.jpeg"
                alt="Praband Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-semibold text-sm lg:text-base 2xl:text-lg transition-colors duration-200 ${
                useDarkTheme ? "text-white" : "text-gray-900"
              }`}
            >
              Praband
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center gap-1 rounded-full px-1.5 py-0.5 transition-colors duration-200 ${
              useDarkTheme ? "bg-white/10 backdrop-blur-sm" : "bg-gray-100"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative px-2.5 py-1.5 2xl:px-3 2xl:py-2 text-xs 2xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? useDarkTheme
                        ? "bg-white/20 text-white shadow-sm"
                        : "bg-white text-gray-900 shadow-sm"
                      : useDarkTheme
                        ? "text-white/80 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00a7e1] rounded-full"
                      style={{ bottom: "-2px" }}
                    ></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={handleContactClick}
            className="hidden lg:block px-3 py-1.5 2xl:px-4 2xl:py-2 bg-[#00a7e1] hover:bg-[#007ea7] text-white text-xs 2xl:text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap ml-2"
          >
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              useDarkTheme
                ? "text-white hover:text-white/80"
                : "text-gray-700 hover:text-gray-900"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden overflow-hidden rounded-lg mt-2 ${
                useDarkTheme
                  ? "bg-white/95 backdrop-blur-md shadow-lg"
                  : "bg-white"
              }`}
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <button
                  onClick={handleContactClick}
                  className="px-4 py-2 bg-[#00a7e1] hover:bg-[#007ea7] text-white font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95 mt-2"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
