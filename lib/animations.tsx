"use client";

import { motion } from "framer-motion";

// Fade in animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Slide up animation variants
export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Slide down animation variants
export const slideDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

// Slide left animation variants
export const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// Slide right animation variants
export const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

// Scale animation variants
export const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Stagger container for children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Default animation transition
export const defaultTransition = {
  duration: 0.6,
};

// Quick transition
export const quickTransition = {
  duration: 0.3,
};

// Scroll-triggered animation options
export const scrollReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

// Scroll-triggered with stagger
export const scrollRevealStagger = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" },
  variants: staggerContainer,
};

// Hover scale animation
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

// Tap scale animation
export const tapScale = {
  scale: 0.95,
};

