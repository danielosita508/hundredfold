"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import MaskedTextReveal from "@/components/animations/MaskedTextReveal";
import Tilt3DCard from "@/components/animations/Tilt3DCard";
import AfricaGlobe3D from "@/components/animations/AfricaGlobe3D";

export interface CorporatePillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  showGlobeByDefault?: boolean;
}

const FIVE_PILLARS: CorporatePillar[] = [
  {
    number: "01",
    title: "Unity",
    tagline: "Collective capital and pan-African syndicate strength",
    description:
      "We believe profound economic transformation occurs when visionary operators, patient capital, and regional networks pool their capabilities. Unity transforms fragmented commercial effort into scaled continental leverage.",
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Corporate leadership assembly and collective alliance",
    showGlobeByDefault: true,
  },
  {
    number: "02",
    title: "Discipline",
    description:
      "Structured capital underwriting, strict risk-adjusted modeling, and non-speculative prudence precede every transaction. We reject speculative market hype in favor of cash-generative, defensible commercial balance sheets.",
    tagline: "Structured underwriting and fiduciary prudence",
    image: "/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    alt: "Modern institutional commercial architecture",
  },
  {
    number: "03",
    title: "Governance",
    description:
      "Total statutory compliance, transparent board oversight, SCUML anti-money laundering frameworks, and ethical corporate integrity. Institutional governance protects investor trust and anchors multi-decade asset compounding.",
    tagline: "Statutory adherence and fiduciary transparency",
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Executive boardroom and corporate governance conclave",
  },
  {
    number: "04",
    title: "Strategic Investment",
    description:
      "Deploying patient capital into foundational real-economy pillars: agricultural commodity corridors, productive commercial real estate, structured finance syndicates, and high-utility enterprise digital platforms.",
    tagline: "Patient capital in foundational real-economy sectors",
    image: "/images/real-estate-modern-development.jpg",
    alt: "Strategic real estate and physical infrastructure",
  },
  {
    number: "05",
    title: "Long-Term Wealth",
    description:
      "Constructing resilient, inflation-hedged balance sheets designed to preserve and grow purchasing power across African economic cycles for participating co-investors, communities, and future generations.",
    tagline: "Compounding balance-sheet resilience across cycles",
    image: "/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
    alt: "Pan-African corporate skyline and wealth compounding",
  },
];

const PRO_MAX_EASE = [0.22, 1, 0.36, 1] as const;

export default function PillarsSection({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"globe" | "image">("globe");

  const currentPillar = FIVE_PILLARS[activeIdx];

  return (
    <section
      id="pillars"
      className={`relative w-full px-6 lg:px-12 py-20 lg:py-28 bg-[#0A2F1B] text-white border-t border-white/10 overflow-hidden ${className}`}
    >
      <span id="values" className="sr-only" />

      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#ABF67E]/5 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#2D6C00]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtext & Interactive Accordion */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#ABF67E] block">
              OUR CORE PILLARS
            </span>

            <MaskedTextReveal as="h2">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15] block">
                The pillars that define our enterprise.
              </span>
            </MaskedTextReveal>

            <p className="text-sm sm:text-base text-emerald-100/75 leading-relaxed max-w-xl font-light">
              Our foundational pillars guide every capital allocation, strategic partnership, and operational decision across our business.
            </p>

            {/* Interactive Numbered Accordion */}
            <div className="w-full divide-y divide-white/15 border-t border-b border-white/15 pt-2">
              {FIVE_PILLARS.map((pillar, idx) => {
                const isOpen = activeIdx === idx;
                return (
                  <div key={pillar.number} className="py-4 sm:py-5">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveIdx(idx);
                        if (pillar.showGlobeByDefault) {
                          setViewMode("globe");
                        }
                      }}
                      className="w-full flex items-center justify-between gap-4 text-left group transition-colors cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <span className="text-[#ABF67E] font-bold text-xs sm:text-sm shrink-0 font-mono">
                          {pillar.number}
                        </span>
                        <span
                          className={`text-base sm:text-lg lg:text-xl font-heading transition-colors leading-snug ${
                            isOpen
                              ? "text-white font-semibold"
                              : "text-white/80 font-normal group-hover:text-[#ABF67E]"
                          }`}
                        >
                          {pillar.title}
                        </span>
                      </div>

                      <div className="text-[#ABF67E]/80 group-hover:text-[#ABF67E] transition-colors shrink-0">
                        <span className="text-xl sm:text-2xl font-light leading-none select-none">
                          {isOpen ? "\u2212" : "+"}
                        </span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`accordion-content-${pillar.number}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                              duration: shouldReduceMotion ? 0.2 : 0.35,
                              ease: PRO_MAX_EASE,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              duration: shouldReduceMotion ? 0.15 : 0.25,
                              ease: PRO_MAX_EASE,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pl-8 sm:pl-9 pr-2 space-y-2">
                            <p className="text-xs uppercase tracking-wider text-[#ABF67E] font-medium">
                              {pillar.tagline}
                            </p>
                            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed font-light">
                              {pillar.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tall Visual Container Wrapped in Tilt3DCard */}
          <div className="lg:col-span-6 w-full">
            <Tilt3DCard
              maxTilt={5}
              sheenColor="rgba(171, 246, 126, 0.12)"
              className="w-full rounded-3xl bg-[#00190A] border border-white/15 p-1 sm:p-2 shadow-2xl"
            >
              <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] rounded-[22px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-b from-[#0A2F1B] to-[#001408] group">
                
                {/* Visual View Switcher (Globe vs Editorial Photo) */}
                <div className="relative z-20 flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90">
                    <span className="w-2 h-2 rounded-full bg-[#ABF67E] animate-pulse" />
                    <span className="font-mono text-[11px] tracking-wider uppercase">
                      {currentPillar.number} &bull; {currentPillar.title}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs">
                    <button
                      type="button"
                      onClick={() => setViewMode("globe")}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        viewMode === "globe"
                          ? "bg-[#ABF67E] text-[#00190A] shadow-sm"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      3D Globe
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("image")}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        viewMode === "image"
                          ? "bg-[#ABF67E] text-[#00190A] shadow-sm"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Editorial
                    </button>
                  </div>
                </div>

                {/* Main Visual Display (Crossfades on pillar change with scale 1.04 to 1) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    {viewMode === "globe" ? (
                      <motion.div
                        key="pillar-3d-globe"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
                        className="w-full h-full flex items-center justify-center p-4"
                      >
                        <AfricaGlobe3D size={480} interactive={true} autoRotateSpeed={0.0028} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`pillar-image-${currentPillar.number}`}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={currentPillar.image}
                          alt={currentPillar.alt}
                          fill
                          quality={95}
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover object-center grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Overlay Label */}
                <div className="relative z-20 mt-auto pt-6 flex flex-col gap-1 pointer-events-none">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#ABF67E]">
                    Sovereign Value Creation
                  </span>
                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-white drop-shadow-md">
                    {currentPillar.title} &bull; {currentPillar.tagline}
                  </h4>
                </div>

              </div>
            </Tilt3DCard>
          </div>

        </div>
      </div>
    </section>
  );
}
