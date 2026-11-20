"use client";

import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export interface ScrollProgressBarProps {
  className?: string;
}

export default function ScrollProgressBar({ className = "" }: ScrollProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 h-[2px] bg-[#ABF67E] z-[9999] origin-left pointer-events-none shadow-[0_0_8px_rgba(171,246,126,0.85)] ${className}`}
    />
  );
}
