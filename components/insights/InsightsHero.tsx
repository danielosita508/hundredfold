"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function InsightsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="overview"
      className="relative w-full min-h-[500px] lg:min-h-[560px] flex flex-col justify-between pb-12 sm:pb-16 overflow-hidden bg-black"
    >
      {/* Full-Bleed Photographic Backdrop (Zero Blur / Zero Filter) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/insights_agro_corridor.jpg"
          alt="Hundredfold Pan-African Enterprise — News & Insights"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Crisp Directional Gradient Overlay (Dark text backdrop on left, 100% bright & sharp on right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Hero Title Container Layered on Top (z-20, positioned comfortably down from navbar) */}
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12 relative z-20 pt-28 sm:pt-36 lg:pt-44 xl:pt-48 flex flex-col items-start text-left">
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
          className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[550px] text-white drop-shadow-md text-left"
        >
          News &amp; Insights
        </motion.h1>

        {/* Hundredfold Brand Green Accent Divider */}
        <div className="my-6 h-[2px] w-[220px] bg-[#9BE564]" />

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
          className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
        >
          Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.
        </motion.p>
      </div>
    </section>
  );
}
