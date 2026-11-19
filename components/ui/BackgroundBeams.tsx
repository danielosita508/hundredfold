"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundBeams({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden opacity-35 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-100 120 C 300 240, 700 20, 1100 220"
          stroke="url(#beam-gradient-1)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          initial={{ pathOffset: 0 }}
          animate={shouldReduceMotion ? {} : { pathOffset: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-100 450 C 400 320, 600 520, 1100 380"
          stroke="url(#beam-gradient-2)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          initial={{ pathOffset: 0 }}
          animate={shouldReduceMotion ? {} : { pathOffset: -1 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="beam-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2D6C00" stopOpacity="0" />
            <stop offset="50%" stopColor="#9BE564" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#00190A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A2F1B" stopOpacity="0" />
            <stop offset="50%" stopColor="#ABF67E" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#2D6C00" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
