'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Twitter, Linkedin, Facebook, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'motion/react'

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
  ],
  contactUs: [
    { name: 'Chandigarh, India', href: '#', icon: 'location' },
    { name: '+91 98765 43210', href: 'tel:+919876543210', icon: 'phone' },
    { name: 'contact@prabhand.in', href: 'mailto:contact@prabhand.in', icon: 'mail' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms Of Service', href: '#terms' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-[#2C2C2C]">
      {/* Main Content Area - Light Background */}
      <div className="bg-[#F5F5F5]">
        <div className="relative mx-auto max-w-7xl 2xl:max-w-[1600px] px-6 py-12 md:py-16 2xl:py-20 lg:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-[#1F2937]">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] transition-colors duration-150 hover:text-[#1F2937]"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="mb-4 text-sm font-semibold text-[#1F2937]">Contact Us</h3>
              <ul className="space-y-3">
                {footerLinks.contactUs.map((link, index) => {
                  const IconComponent = link.icon === 'location' ? MapPin : link.icon === 'phone' ? Phone : Mail
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-[#6B7280] transition-colors duration-150 hover:text-[#1F2937]"
                      >
                        <IconComponent className="h-4 w-4 text-[#003459]" />
                        {link.name}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-[#1F2937]">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] transition-colors duration-150 hover:text-[#1F2937]"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar - Dark Background */}
      <div className="border-t border-[#404040] bg-[#2C2C2C]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo Box with Dotted Border */}
            <div className="flex items-center">
              <div className="flex h-10 items-center justify-center rounded border-2 border-dashed border-[#6B7280] px-4">
                <Link href="/" aria-label="home">
                  <Logo className="[&_span]:!text-white [&_span]:!bg-none" />
                </Link>
              </div>
            </div>

            {/* Center Links */}
            <div className="flex items-center gap-6 text-sm text-[#9CA3AF]">
              <Link
                href="#terms"
                className="transition-colors duration-150 hover:text-white"
              >
                Terms
              </Link>
              <Link
                href="#privacy"
                className="transition-colors duration-150 hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="#cookies"
                className="transition-colors duration-150 hover:text-white"
              >
                Cookies
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#404040] text-white transition-colors duration-200 hover:bg-[#007ea7]"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

