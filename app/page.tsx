"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroTicker from "@/components/home/HeroTicker";
import siteConfig from "@/lib/site-config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRightIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// Strategic Business Sectors conforming to Heirs Holdings panoramic strip architecture
const BUSINESS_SECTORS = [
  {
    title: "Agriculture",
    href: "/business#agriculture",
    image: "/images/agri_business_showcase.jpg",
    alt: "Agriculture and agricultural commodity supply chains",
  },
  {
    title: "Real Estate",
    href: "/business#real-estate",
    image: "/images/commercial_real_estate.jpg",
    alt: "Commercial real estate and productive tangible assets",
  },
  {
    title: "Finance",
    href: "/business#finance",
    image: "/images/strategic_partnerships.jpg",
    alt: "Financial capital stewardship and strategic investment",
  },
  {
    title: "Technology",
    href: "/business#technology",
    image: "/images/african_business_ventures.jpg",
    alt: "Technology infrastructure and digital enterprise solutions",
  },
];

// Summarized high-impact operational principles
const SUMMARIZED_PRINCIPLES = [
  {
    name: "Integrity",
    description: "Total commercial transparency and ethical corporate governance.",
  },
  {
    name: "Due Diligence",
    description: "Disciplined research and risk assessment preceding every allocation.",
  },
  {
    name: "Execution",
    description: "Focused operational delivery and active governance across ventures.",
  },
  {
    name: "Long-Term Value",
    description: "Building generative assets that endure across economic cycles.",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants conforming to UI/UX Pro Max directives (asymmetric easing, 0 CLS, GPU-accelerated)
  const heroFadeVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : custom * 0.08,
        ease: PRO_MAX_EASE,
      },
    }),
  };

  const staggerGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardScrollVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: PRO_MAX_EASE,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">

      {/* ─── SECTION 1: HERO (Cinematic Aerial Industrial Picture Background — Heirs Holdings Conglomerate Aesthetic) ─── */}
      <section className="relative w-full min-h-screen flex flex-col justify-end pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#0A2F1B]">

        {/* Full-bleed Aerial Industrial Photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_aerial.jpg"
            alt="Developed industrial economic zone, maritime infrastructure, and modern skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Ambient subtle movement with industrial poster */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_industrial_aerial.jpg"
          className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none opacity-30 mix-blend-overlay"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Cinematic Vignette & Gradient Overlay (Heirs Holdings Style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/70 z-[2]" />

        {/* Ambient subtle emerald glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#2D6C00]/25 rounded-full blur-[140px] pointer-events-none z-[3]" />

        {/* Content Container positioned lower-left just like Heirs Holdings */}
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 w-full z-10">

          <div className="flex flex-col items-start max-w-4xl">

            {/* Tagline / Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: PRO_MAX_EASE }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.05] drop-shadow-lg"
            >
              Redefining <br className="hidden sm:inline" />
              Partnerships.
            </motion.h1>

            {/* Sub-Headline Description (Two-line width, lowered spacing) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: PRO_MAX_EASE }}
              className="text-sm sm:text-base md:text-lg text-white/85 max-w-4xl lg:max-w-[860px] font-normal leading-relaxed mt-5 sm:mt-6 drop-shadow-sm"
            >
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying high-impact commercial opportunities, building strategic relationships, and developing ventures with long-term potential.
            </motion.p>

            {/* Strategic Pillars Horizontal Ribbon (Sectors Below Description) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: PRO_MAX_EASE }}
              className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm text-white/90 font-medium tracking-wide mt-4 drop-shadow-sm"
            >
              <span>Agriculture</span>
              <span className="text-white/40 font-light">|</span>
              <span>Real Estate</span>
              <span className="text-white/40 font-light">|</span>
              <span>Finance</span>
              <span className="text-white/40 font-light">|</span>
              <span>Technology</span>
            </motion.div>

            {/* Clean Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: PRO_MAX_EASE }}
              className="flex flex-wrap items-center gap-4 mt-8 pt-2"
            >
              <Link
                href="/business"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#0A2F1B] hover:bg-[#ABF67E] hover:text-[#00190A] transition-all duration-300 text-sm font-semibold tracking-wide shadow-xl group"
              >
                <span>Explore Our Business</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all duration-300 text-sm font-semibold tracking-wide shadow-xl"
              >
                <span>Partner With Us</span>
              </Link>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ─── CONTINUOUS INSTITUTIONAL MANDATE TICKER (Directly Below Hero) ─── */}
      <HeroTicker />

      {/* ─── SECTION 2: WHO WE ARE (Scroll In-View Animation) ─── */}
      <section className="relative w-full pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white/40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="max-w-4xl mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_40px_-8px_rgba(10,47,27,0.06)] p-8 sm:p-12 lg:p-14 text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
              A Network Built Around Opportunity.
            </h2>

            <p className="text-base sm:text-lg text-[#424842] max-w-3xl mx-auto leading-relaxed">
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold hover:bg-[#00190A] transition-colors shadow-sm"
              >
                <span>Discover Hundredfold</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: STRATEGIC BUSINESS SECTORS (Heirs Holdings Style 2-Up 2-Down Full Bleed) ─── */}
      <section className="relative w-full pt-8 lg:pt-12 pb-0 bg-[#E9FDFF] overflow-hidden">
        {/* Section Header */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                <span>OUR BUSINESS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
                Where We Focus
              </h2>

              <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                We deploy capital, expertise and network resources across four strategic commercial pillars.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/business"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#2D6C00] font-bold hover:text-[#00190A] transition-colors"
              >
                <span>View Full Business Scope</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Heirs Holdings Style 2 Up 2 Down Edge-to-Edge Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
            {BUSINESS_SECTORS.map((sector, index) => {
              // 2 up 2 down border logic:
              // index 0: Top-Left -> border-b, md:border-r
              // index 1: Top-Right -> border-b
              // index 2: Bottom-Left -> md:border-r, border-b md:border-b-0
              // index 3: Bottom-Right -> no border on desktop
              const borderClasses =
                index === 0
                  ? "border-b border-white/15 md:border-r"
                  : index === 1
                  ? "border-b border-white/15"
                  : index === 2
                  ? "border-b md:border-b-0 border-white/15 md:border-r"
                  : "";

              return (
                <Link
                  key={sector.title}
                  href={sector.href}
                  className={`group relative w-full h-[400px] sm:h-[460px] lg:h-[500px] overflow-hidden bg-[#0A2F1B] flex flex-col justify-end p-8 sm:p-12 lg:p-14 ${borderClasses} cursor-pointer select-none`}
                >
                  {/* Background Photographic Image (Full Natural Colors) */}
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Base subtle vignette for mobile readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-700 sm:opacity-0" />

                  {/* Rich Emerald Green Overlay on Hover (Fades in slowly to match title slide) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00190A]/95 via-[#0A2F1B]/80 to-[#0A2F1B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />

                  {/* Sector Title (Bottom-Left, Uppercase, Bold White - Slides slowly into picture on hover) */}
                  <div className="relative z-10 overflow-hidden">
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white drop-shadow-xl opacity-100 sm:opacity-0 sm:translate-y-10 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-700 ease-out">
                      {sector.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: OUR APPROACH (Summarized & Sleek) ─── */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 bg-white/70">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="max-w-2xl mb-10 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span>OUR APPROACH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
              Opportunity With Purpose. <br />
              Growth With Discipline.
            </h2>
            <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
              We approach every venture with research-led judgment, disciplined risk management, and long-term commitment.
            </p>
          </motion.div>

          {/* 4 Guiding Principles Staggered Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {SUMMARIZED_PRINCIPLES.map((principle, idx) => (
              <motion.div
                key={principle.name}
                variants={cardScrollVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-[#DEF2F4] hover:border-[#2D6C00]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold text-[#2D6C00]">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#00190A]">
                    {principle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 5: THE COMMUNITY / THE FOLD ─── */}
      <section className="relative w-full py-20 lg:py-28 bg-[#E9FDFF]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.25 } }}
            className="relative rounded-3xl bg-white/85 backdrop-blur-xl p-8 sm:p-12 lg:p-14 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-shadow overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ABF67E]/15 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#2D6C00]" />
                  <span>THE COMMUNITY</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00190A] tracking-tight">
                  Welcome to The Fold
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  The Fold is the private membership and community arm of Hundredfold Innovation Network Ltd. It convenes forward-thinking individuals, business leaders, and investors who share a common commitment to disciplined growth, ethical commerce, and collective economic advancement.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Strict 100 Member Cap
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Cycle 1: Jan 2027
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Governed Admissions
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/the-fold"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold shadow-md hover:bg-[#00190A] transition-all group"
                >
                  <span>Enquire About Joining The Fold</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
