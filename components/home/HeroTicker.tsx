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
  "REGIONAL NEXUS",
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
    <div className="relative w-full bg-[#00190A] border-y border-white/15 overflow-hidden z-20 select-none py-3.5 sm:py-4 shadow-lg">
      
      {/* Subtle edge fade vignettes for smooth boundary entry/exit */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-[#00190A] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-[#00190A] to-transparent z-20 pointer-events-none" />

      {/* Continuous Marquee Track */}
      <motion.div
        className="flex items-center gap-12 sm:gap-16 lg:gap-20 whitespace-nowrap will-change-transform"
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
            className="inline-flex items-center gap-3 sm:gap-4 tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ABF67E] shrink-0" />
            <span className="font-serif font-bold tracking-widest text-white text-sm sm:text-base uppercase">
              {sector}
            </span>
            <span className="text-white/20 pl-6 sm:pl-8">&bull;</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

