"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/lib/site-config";
import FoldInquiryForm from "@/components/the-fold/FoldInquiryForm";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// The Fold Hero Auto-Fading Slides
const THE_FOLD_HERO_SLIDES = [
  {
    image: "/images/the_fold_executive_lounge.jpg",
    alt: "The Fold Executive Conclave at Hundredfold Headquarters",
    title: "Welcome to The Fold",
    description:
      "The private membership and collaborative syndicate network of Hundredfold Innovation Network Ltd, uniting vetted enterprise leaders and capital allocators across African commercial frontiers.",
  },
  {
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Executive Boardroom Conclave and Private Syndicate Assembly",
    title: "Private Syndicate Conclave",
    description:
      "Assembling exceptional entrepreneurs and institutional allocators into structured cohorts with active governance, audited yields, and collective leverage.",
  },
  {
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Vetted African Enterprise Leadership Cohort",
    title: "Sovereign Capital Network",
    description:
      "Pooling private capital into tangible productive assets with institutional transparency and disciplined risk-adjusted compounding.",
  },
  {
    image: "/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    alt: "Modern Enterprise Infrastructure and High-Yield Venues",
    title: "Generational Wealth Architecture",
    description:
      "Anchored in our constitution with an 85% direct operational return distribution model to participating cohort syndicate members.",
  },
];

export default function TheFoldPage() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-fading hero carousel timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % THE_FOLD_HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? THE_FOLD_HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % THE_FOLD_HERO_SLIDES.length);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const staggerGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardScrollVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: PRO_MAX_EASE,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[#061D10] text-[#E9FDFF] min-h-screen">
      {/* ─── AMBIENT VIP RADIAL GLOWS ─── */}
      <div className="absolute -top-40 right-1/4 w-[680px] h-[680px] bg-[#ABF67E]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[480px] -left-32 w-[580px] h-[580px] bg-[#2D6C00]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[520px] h-[520px] bg-[#ABF67E]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── SECTION 1: PRESTIGE HERO (Transcorp Style Sharp Panoramic Backdrop Carousel) ─── */}
      <section
        id="overview"
        className="relative w-full min-h-[580px] lg:min-h-[640px] h-[72vh] flex flex-col justify-between overflow-hidden bg-black"
      >
        {/* 100% Crisp Background Slides (Zero Blur / Zero Filter) */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={THE_FOLD_HERO_SLIDES[currentSlide].image}
                alt={THE_FOLD_HERO_SLIDES[currentSlide].alt}
                fill
                priority
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle Dark Overlays (Just enough to be noticed, keeping photo bright & vivid) */}
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent z-10 pointer-events-none" />

        {/* Hero Title Container Layered on Top (z-20, uniform bottom-anchored placement) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 flex-1 flex flex-col justify-end pb-8 sm:pb-10 pt-28">
          <div className="flex flex-col items-start text-left">
            <motion.h1
              key={`fold-h1-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
              className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[580px] text-white drop-shadow-md text-left"
            >
              {THE_FOLD_HERO_SLIDES[currentSlide].title}
            </motion.h1>

            {/* Hundredfold Brand Green Accent Divider */}
            <div className="my-5 sm:my-6 h-[2px] w-[220px] bg-[#9BE564]" />

            <motion.p
              key={`fold-desc-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
              className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
            >
              {THE_FOLD_HERO_SLIDES[currentSlide].description}
            </motion.p>
          </div>
        </div>

        {/* Bottom Hero Controls Container (z-20) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full pb-8 sm:pb-12 z-20 flex items-end justify-between">
          {/* Bottom-Left: Sleek Institutional Carousel Navigation & Progress Controller */}
          <div className="flex items-center gap-3 sm:gap-5 p-2 px-3 sm:px-4 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-xl">
            {/* Slide Index Counter */}
            <div className="font-mono text-xs font-semibold tracking-wider flex items-center gap-1 pl-1 select-none">
              <span className="text-[#ABF67E] font-bold text-sm">0{currentSlide + 1}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">0{THE_FOLD_HERO_SLIDES.length}</span>
            </div>

            {/* Slide Progress Dash Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {THE_FOLD_HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="py-2 cursor-pointer focus:outline-none group"
                >
                  <span
                    className={`block h-1 rounded-full transition-all duration-500 ${
                      currentSlide === idx
                        ? "w-8 sm:w-10 bg-[#ABF67E]"
                        : "w-3 sm:w-4 bg-white/30 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Subtle Frosted Glass Navigation Buttons */}
            <div className="flex items-center gap-1.5 border-l border-white/15 pl-2 sm:pl-3">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#ABF67E] hover:text-[#0A2F1B] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleTogglePause}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#ABF67E] hover:text-[#0A2F1B] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                title={isPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                {isPaused ? (
                  <PlayIcon className="w-3.5 h-3.5 ml-0.5" />
                ) : (
                  <PauseIcon className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                type="button"
                onClick={handleNextSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#ABF67E] hover:text-[#0A2F1B] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom-Right: Quick link and scroll down */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="#join-form"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Request Syndicate Access
            </Link>

            <button
              type="button"
              onClick={() => {
                const formSec = document.getElementById("join-form");
                if (formSec) {
                  formSec.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollBy({ top: window.innerHeight - 76, behavior: "smooth" });
                }
              }}
              className="flex flex-col items-center -space-y-1.5 text-white/90 hover:text-white transition-colors cursor-pointer pt-1"
              aria-label="Scroll to next section"
            >
              <ChevronDownIcon className="w-4 h-4 stroke-[2]" />
              <ChevronDownIcon className="w-4 h-4 stroke-[2]" />
              <ChevronDownIcon className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: 85% / 15% PROFIT DISTRIBUTION & HIGHLIGHT CALLOUTS ─── */}
      <section className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10">

        {/* Prominent Profit Distribution Banner */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A2F1B] via-white/5 to-[#0A2F1B] border border-[#ABF67E]/30 shadow-2xl mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/20 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
                <TrendingUpIcon className="w-4 h-4 text-[#ABF67E]" />
                <span>COMMERCIAL DISTRIBUTION STRUCTURE</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl text-white font-semibold tracking-tight">
                The 85% / 15% Profit Distribution Model
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                In line with our corporate mandate and governance constitution, commercial returns generated from approved trading activities, asset performance, and syndicates are allocated under a transparent, performance-verified framework:
              </p>

              <div className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                  <span><strong className="text-[#ABF67E]">85% Direct Member Allocation:</strong> Distributed directly to participating cohort members based on audited operational yields and board resolutions.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                  <span><strong className="text-[#ABF67E]">15% Network Reserve Stewardship:</strong> Retained by the company for operational management, statutory audit, risk buffering, and infrastructure reinvestment.</span>
                </div>
              </div>
            </div>

            {/* Split Visual Indicator */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold text-white/70">Surplus Distribution Split</span>
                <span className="text-xs font-mono text-[#ABF67E]">MEMART Compliant</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-white">Cohort Members</span>
                    <span className="text-[#ABF67E] font-heading text-2xl font-bold">85%</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#ABF67E] h-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-white/80">Management &amp; Reserve</span>
                    <span className="text-white/80 font-heading text-2xl font-bold">15%</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-white/40 h-full w-[15%]" />
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed italic">
                * Distributions follow Board approvals and verified operational audits. No fixed or guaranteed returns are offered, upholding regulatory compliance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* VIP Callout 3 Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            variants={cardScrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/20 text-[#ABF67E] flex items-center justify-center">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#ABF67E] bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  STRICT CAP
                </span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-white">100 Members</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Per Cohort Matrix
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Strict numerical ceiling preserving high-trust relations, confidentiality, and active peer-level engagement without mass dilution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Governance</span>
              <span className="text-[#ABF67E] font-bold">High-Conviction Cohort</span>
            </div>
          </motion.div>

          <motion.div
            variants={cardScrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/20 text-[#ABF67E] flex items-center justify-center">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#ABF67E] bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  CYCLE 1
                </span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-white">Cycle 1</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Active Executive Cohort
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Applications and onboarding intake review currently open. Founding cohort members participate in the inaugural Strategic Executive Retreat.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Onboarding Window</span>
              <span className="text-[#ABF67E] font-bold">Open for Enquiry</span>
            </div>
          </motion.div>

          <motion.div
            variants={cardScrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/20 text-[#ABF67E] flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#ABF67E] bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  MANDATE
                </span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-white">Hundredfold Vision</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Shared Economic Power
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Pooled network capacity unlocking high-utility commercial ventures across agro-trading, asset ownership, and scalable enterprise.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Focus Sectors</span>
              <span className="text-[#ABF67E] font-bold">Agriculture &bull; Real Assets</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 3: THREE CORE PILLARS OF THE FOLD ─── */}
      <section className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ABF67E] font-bold">
              COMMUNITY ARCHITECTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-semibold mt-2">
              Three Sovereign Pillars of The Fold
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-md">
            Structured to anchor capital into tangible assets, ethical commerce, and compounding inter-generational growth.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerGridVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Pillar 1 */}
          <motion.div
            variants={cardScrollVariants}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>PILLAR // 01</span>
                <BuildingIcon className="w-5 h-5 text-[#ABF67E]" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white">
                Collective Strength &amp; Networking
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Uniting forward-thinking entrepreneurs, professionals, and investors into an organized commercial network capable of undertaking ventures beyond single-party scope.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#ABF67E] flex items-center gap-1.5 font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Network Scale &amp; Syndication</span>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            variants={cardScrollVariants}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>PILLAR // 02</span>
                <ShieldCheckIcon className="w-5 h-5 text-[#ABF67E]" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white">
                Due Diligence &amp; Economic Literacy
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Continuous education in commercial due diligence, asset valuation, risk analysis, and financial literacy. We navigate African macroeconomic realities with disciplined acumen.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#ABF67E] flex items-center gap-1.5 font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Continuous Commercial Literacy</span>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            variants={cardScrollVariants}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>PILLAR // 03</span>
                <TrendingUpIcon className="w-5 h-5 text-[#ABF67E]" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white">
                Exclusive Corporate Access
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Priority visibility into company updates, approved trading activities, and collaborative commercial initiatives across our four business pillars.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#ABF67E] flex items-center gap-1.5 font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Priority Enterprise Access</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SECTION 4: CANDIDATE REGISTRY INTAKE FORM ─── */}
      <section id="join" className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span>CANDIDATE REGISTRY &bull; CYCLE 1</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight">
              Lodge Your Candidate Dossier.
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Admission into The Fold is conducted through a multi-stage review. To initiate confidential review and obtain the Cohort Alpha Prospectus, submit your credentials.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Complete Non-Disclosure &amp; Institutional Governance Compliance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Strict 100-member cohort ceiling maintained at all times</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Executive Secretariat review within 5 business days</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/70">
              <span className="font-bold text-white block mb-1">Direct Board Voucher?</span>
              <span>If you hold a referral from an executive board member, please enter your referral identifier in the form.</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <FoldInquiryForm />
          </div>

        </div>
      </section>
    </div>
  );
}
