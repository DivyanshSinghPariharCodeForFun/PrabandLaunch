'use client'
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

const serviceOptions = [
  'Demo Request',
  'Pricing Info',
  'Technical Support',
  'Partnership',
  'Other',
];

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState('Demo Request');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institute: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', institute: '', message: '' });
    }, 1000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-4 md:mx-16 2xl:mx-24 my-8 2xl:my-12"
    >
      <div className="bg-[#003459] rounded-[24px] md:rounded-[40px] px-6 py-12 md:px-16 md:py-24 2xl:px-24 2xl:py-32">
        <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full md:w-1/2"
            >
              <span className="text-[#ffffff] text-sm">Contact Form</span>
              
              <h2 className="text-[32px] md:text-[48px] 2xl:text-[60px] leading-[1.1] font-bold text-white mt-4 mb-8">
                Let&apos;s transform<br />
                your institute{' '}
                <span className="text-[#007ea7]">together</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>contact@praband.com</span>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-[#007ea7] rounded-full px-6 py-4 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>Chandigarh, India</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8 md:mt-12">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-[#007ea7]/50 rounded-full flex items-center justify-center text-white hover:bg-[#007ea7] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <label className="text-gray-900 font-medium">I&apos;m interested in...</label>
                
                <div className="flex flex-wrap gap-3 mt-4 mb-8">
                  {serviceOptions.map((option) => (
                    <motion.button
                      key={option}
                      type="button"
                      onClick={() => setSelectedService(option)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedService === option
                          ? 'bg-[#007ea7] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#007ea7] transition-colors bg-transparent"
                  />
                  
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#007ea7] transition-colors bg-transparent"
                  />
                  
                  <input
                    type="text"
                    name="institute"
                    value={formData.institute}
                    onChange={handleChange}
                    placeholder="Institute name"
                    className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#007ea7] transition-colors bg-transparent"
                  />
                  
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message"
                    className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent resize-none"
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#007ea7] hover:bg-[#003459] text-white rounded-full px-8 py-4 flex items-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
