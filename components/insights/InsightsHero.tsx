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
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-end pb-12 sm:pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#0A2F1B]"
    >
      {/* Full-Bleed Photographic Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/insights_agro_corridor.jpg"
          alt="Hundredfold Pan-African Enterprise — News & Insights"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic Dark Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 pointer-events-none" />

      {/* Dark Cinematic Vignette & Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/60 z-10 pointer-events-none" />

      {/* Subtle emerald brand glow */}
      <div className="absolute bottom-0 left-0 w-[550px] h-[340px] bg-[#2D6C00]/25 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* Hero Title Container Layered on Top (z-20) */}
      <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-start text-left">
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: PRO_MAX_EASE }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight font-medium leading-[1.05] drop-shadow-2xl text-left"
        >
          News &amp; Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: PRO_MAX_EASE }}
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl font-light leading-relaxed mt-4 drop-shadow-md"
        >
          Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.
        </motion.p>
      </div>
    </section>
  );
}
