"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const TICKER_SECTORS: string[] = [
  "AGRICULTURE",
  "REAL ESTATE",
  "FINANCE",
  "TECHNOLOGY",
  "AFRICAPITALISM",
  "THE FOLD",
  "STATUTORY INTEGRITY",
];

export default function HeroTicker() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items to ensure gapless infinite looping
  const duplicatedItems = [
    ...TICKER_SECTORS,
    ...TICKER_SECTORS,
    ...TICKER_SECTORS,
    ...TICKER_SECTORS,
  ];

  return (
    <div id="ticker" className="relative w-full bg-transparent border-y border-[#DEF2F4] overflow-hidden z-20 select-none py-3.5 sm:py-4">
      
      {/* Subtle edge fade vignettes for smooth boundary entry/exit */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-[#E9FDFF] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-[#E9FDFF] to-transparent z-20 pointer-events-none" />

      {/* Continuous Marquee Track */}
      <motion.div
        className="flex items-center gap-14 sm:gap-18 lg:gap-24 whitespace-nowrap will-change-transform"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((sector, index) => (
          <div
            key={`${sector}-${index}`}
            className="inline-flex items-center tracking-wider"
          >
            <span className="font-heading font-semibold tracking-[0.25em] text-[#00190A] text-xs sm:text-sm uppercase hover:text-[#2D6C00] transition-colors">
              {sector}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

