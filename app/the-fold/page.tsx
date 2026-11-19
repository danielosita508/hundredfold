"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FoldInquiryForm from "@/components/the-fold/FoldInquiryForm";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  TrendingUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// The Fold Hero Auto-Fading Slides (Ultra-Concise Copy)
const THE_FOLD_HERO_SLIDES = [
  {
    image: "/images/pexels-artem-korolev-2159253660-38320074.jpg",
    alt: "The Fold Executive Conclave at Hundredfold Headquarters",
    title: "Welcome to The Fold",
    description:
      "A private syndicate of vetted enterprise leaders pooling capital into productive African frontiers.",
  },
  {
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Executive Boardroom Conclave and Private Syndicate Assembly",
    title: "Private Syndicate Conclave",
    description:
      "Collective leverage and structured cohorts anchored in institutional governance.",
  },
  {
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Vetted African Enterprise Leadership Cohort",
    title: "Sovereign Capital Network",
    description:
      "Pooling capital into tangible assets with disciplined, risk-adjusted compounding.",
  },
  {
    image: "/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    alt: "Modern Enterprise Infrastructure and High-Yield Venues",
    title: "Disciplined Stewardship",
    description:
      "Direct 85% operational distribution model for participating syndicate members.",
  },
];

// Three Sovereign Pillars of The Fold (Summarized to Essential Points)
const FOLD_PILLARS = [
  {
    number: "01",
    tag: "SCALE",
    title: "Collective Leverage",
    description:
      "Pooled capital and commercial scale to execute ventures beyond individual reach.",
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Executive syndicate assembly and institutional boardroom meeting",
  },
  {
    number: "02",
    tag: "TRUST",
    title: "Strict 100 Cap",
    description:
      "Deliberate cohort ceiling preserving confidentiality, alignment, and high trust.",
    image: "/images/istockphoto-2189200243-612x612.jpg",
    alt: "Curated peer cohort and executive boardroom discussion",
  },
  {
    number: "03",
    tag: "RIGOUR",
    title: "Audited Yields",
    description:
      "Disciplined due diligence, risk governance, and board-approved yield distribution.",
    image: "/images/photo-1590283603385-17ffb3a7f29f.avif",
    alt: "Financial data analytics, commercial due diligence, and capital stewardship",
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

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: PRO_MAX_EASE,
      },
    },
  };

  const staggerGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const cardScrollVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: PRO_MAX_EASE,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20] font-sans">

      {/* ─── SECTION 1: PRESTIGE HERO CAROUSEL ─── */}
      <section
        id="overview"
        className="relative w-full h-[calc(100vh-90px)] min-h-[460px] sm:min-h-[500px] max-h-[720px] flex flex-col justify-between overflow-hidden bg-black"
      >
        {/* Crisp Background Slides */}
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
                quality={100}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Hero Title Container */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 flex-1 flex flex-col justify-end pb-4 sm:pb-6 pt-20 sm:pt-24">
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

        {/* Bottom Hero Controls Container (z-20, pushed up with generous bottom padding) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full pb-12 sm:pb-16 lg:pb-20 mb-1 sm:mb-2 z-20 flex items-end justify-between">
          {/* Bottom-Left: Carousel Navigation & Progress Controller */}
          <div className="flex items-center gap-3 sm:gap-5 p-2 px-3 sm:px-4 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-xl">
            <div className="font-mono text-xs font-semibold tracking-wider flex items-center gap-1 pl-1 select-none">
              <span className="text-[#ABF67E] font-bold text-sm">0{currentSlide + 1}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">0{THE_FOLD_HERO_SLIDES.length}</span>
            </div>

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
              href="#join"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Request Access
            </Link>

            <button
              type="button"
              onClick={() => {
                const quoteSec = document.getElementById("conclave-statement");
                if (quoteSec) {
                  quoteSec.scrollIntoView({ behavior: "smooth" });
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

      {/* ─── SECTION 2: CONCLAVE HIGHLIGHT (Single Focused Sentence) ─── */}
      <section id="conclave-statement" className="w-full py-12 sm:py-16 px-6 lg:px-12 bg-white/90 border-b border-[#DEF2F4] scroll-mt-20">
        <div className="max-w-[960px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="space-y-3"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
              THE FOLD CONCLAVE
            </span>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#00190A] leading-snug sm:leading-relaxed font-semibold tracking-tight">
              A private syndicate of 100 vetted enterprise leaders pooling capital into Africa&apos;s most productive commercial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: 85% / 15% ALLOCATION MODEL (Clean, Summarized Visual Split) ─── */}
      <section className="relative w-full py-14 sm:py-18 px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Clean Image with Minimal Caption */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-[#0A2F1B] group">
                <Image
                  src="/images/istockphoto-2189200243-612x612.jpg"
                  alt="Executive roundtable and syndicate cohort assembly"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col gap-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                    SURPLUS FRAMEWORK
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                    85% / 15% Allocation Model
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Clean Summarized Split Card */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
                  DISTRIBUTION STRUCTURE
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#00190A] tracking-tight mt-1">
                  85% / 15% Surplus Model
                </h2>
              </div>

              {/* Visual Split Cards (Clean & Minimal) */}
              <div className="p-6 rounded-2xl bg-white border border-[#DEF2F4] shadow-md space-y-5">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-2">
                    <span className="text-[#00190A] font-bold">Cohort Members</span>
                    <span className="text-[#2D6C00] font-heading text-2xl font-bold">85%</span>
                  </div>
                  <div className="w-full bg-[#E9FDFF] h-3 rounded-full overflow-hidden border border-[#DEF2F4]">
                    <div className="bg-[#2D6C00] h-full w-[85%] rounded-full" />
                  </div>
                  <span className="text-xs text-[#556358] block mt-1.5">
                    Distributed directly to members based on audited operational yields.
                  </span>
                </div>

                <div className="pt-4 border-t border-[#DEF2F4]">
                  <div className="flex justify-between items-center text-sm font-semibold mb-2">
                    <span className="text-[#00190A] font-bold">Reserve &amp; Governance</span>
                    <span className="text-[#0A2F1B] font-heading text-2xl font-bold">15%</span>
                  </div>
                  <div className="w-full bg-[#E9FDFF] h-3 rounded-full overflow-hidden border border-[#DEF2F4]">
                    <div className="bg-[#0A2F1B]/60 h-full w-[15%] rounded-full" />
                  </div>
                  <span className="text-xs text-[#556358] block mt-1.5">
                    Retained for statutory audits, operations, and risk buffering.
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#718275] italic">
                * Distributions follow Board approvals and verified operational audits.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THREE PILLARS (Clean Photographic Cards) ─── */}
      <section className="relative w-full py-14 sm:py-18 px-6 lg:px-12 bg-white/70 border-y border-[#DEF2F4]">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
              ARCHITECTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#00190A] tracking-tight mt-1">
              Three Pillars of The Fold
            </h2>
          </div>

          {/* 3 Summarized Photographic Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {FOLD_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={cardScrollVariants}
                className="rounded-3xl overflow-hidden bg-white border border-[#DEF2F4] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A2F1B]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#ABF67E] text-[10px] font-mono font-bold tracking-wider uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="font-heading text-xl font-bold text-[#00190A] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: FULL-BLEED PANORAMIC IMAGE BREAK ─── */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-black flex items-center justify-center">
        <Image
          src="/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg"
          alt="African corporate skyline and sovereign asset development"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />

        <div className="relative max-w-[800px] mx-auto px-6 text-center z-10 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#ABF67E] block">
            THE FOLD MANDATE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-xl">
            Disciplined Capital. Compounding Enterprise.
          </h2>
        </div>
      </section>

      {/* ─── SECTION 6: CANDIDATE REGISTRY INTAKE FORM ─── */}
      <section id="join" className="relative w-full py-14 sm:py-20 px-6 lg:px-12 bg-[#E9FDFF] text-[#0C1E20] border-t border-[#DEF2F4] scroll-mt-28">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Magazine Feature Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-[#0A2F1B] group">
                <Image
                  src="/images/istockphoto-2211042706-612x612.jpg"
                  alt="The Fold Strategic Alliances and Executive Conclave"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col gap-2 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                    CYCLE 1 ADMISSIONS
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Join The Fold
                  </h3>

                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    Confidential syndicate admissions strictly limited to 100 members.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-mono text-white border border-white/20">
                      Strict 100 Cap
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-mono text-white border border-white/20">
                      Confidential Review
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Intake Form */}
            <div className="lg:col-span-7">
              <FoldInquiryForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}