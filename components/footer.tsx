"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, slideUp } from "@/lib/animations";

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
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
  };

  return (
    <footer className="bg-[#00171f] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Quick Links Column */}
          <motion.div
            variants={slideUp}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "#home")}
                  className="text-sm text-gray-300 hover:text-[#00a7e1] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  onClick={(e) => handleSmoothScroll(e, "#features")}
                  className="text-sm text-gray-300 hover:text-[#00a7e1] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  onClick={(e) => handleSmoothScroll(e, "#security")}
                  className="text-sm text-gray-300 hover:text-[#00a7e1] transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, "#faq")}
                  className="text-sm text-gray-300 hover:text-[#00a7e1] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us Column */}
          <motion.div
            variants={slideUp}
            className="md:justify-self-end"
          >
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00a7e1] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Chandigarh, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00a7e1] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00a7e1] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">contact@Praband.in</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-[#003459] mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center text-sm text-gray-300">
            <p>© 2025 Praband. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

