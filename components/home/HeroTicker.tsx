"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TickerItem {
  sector: string;
  focus: string;
}

const TICKER_ITEMS: TickerItem[] = [
  { sector: "AGRICULTURE", focus: "Commodity Value Chains & Direct Sourcing" },
  { sector: "REAL ESTATE", focus: "Tangible Productive Land & Infrastructure" },
  { sector: "STRATEGIC PARTNERSHIPS", focus: "Joint Venture Co-Investment & SPVs" },
  { sector: "BUSINESS VENTURES", focus: "Scaling High-Utility African Enterprises" },
  { sector: "AFRICAPITALISM", focus: "Private-Sector Sovereign Transformation" },
  { sector: "THE FOLD", focus: "Private Executive Syndicate & Cohort" },
  { sector: "REGIONAL NEXUS", focus: "Asaba & Strategic Niger Delta Corridors" },
  { sector: "STATUTORY INTEGRITY", focus: "Strict Institutional Corporate Governance" },
];

export default function HeroTicker() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items twice to ensure gapless infinite looping
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full bg-[#00190A] border-y border-white/15 overflow-hidden z-20 select-none py-3.5 sm:py-4 shadow-lg">
      
      {/* Left Static Badge (Desktop) */}
      <div className="hidden lg:flex absolute left-0 inset-y-0 z-30 items-center pl-6 pr-10 bg-gradient-to-r from-[#00190A] via-[#00190A]/95 to-transparent pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xs pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#ABF67E] animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
            MANDATE TICKER
          </span>
        </div>
      </div>

      {/* Right Edge Fade Vignette */}
      <div className="absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-[#00190A] to-transparent z-20 pointer-events-none" />

      {/* Continuous Marquee Track */}
      <motion.div
        className="flex items-center gap-10 sm:gap-14 whitespace-nowrap will-change-transform"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.sector}-${index}`}
            className="inline-flex items-center gap-3 text-xs sm:text-sm tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ABF67E] shrink-0" />
            <span className="font-serif font-bold tracking-wider text-white text-sm sm:text-base">
              {item.sector}
            </span>
            <span className="text-white/45 font-mono text-[11px] sm:text-xs">
              [{item.focus}]
            </span>
            <span className="text-white/20 pl-4 sm:pl-6">&bull;</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

