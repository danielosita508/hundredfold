"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FoldInquiryForm from "@/components/the-fold/FoldInquiryForm";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
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
    title: "Disciplined Stewardship",
    description:
      "Anchored in our constitution with an 85% direct operational return distribution model to participating cohort syndicate members.",
  },
];

// Three Sovereign Pillars of The Fold with Rich High-Res Photography
const FOLD_PILLARS = [
  {
    number: "01",
    tag: "SYNDICATE SCALE",
    title: "Collective Leverage",
    description:
      "Uniting vetted entrepreneurs and allocators into an organized network capable of executing commercial ventures beyond individual scope.",
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Executive syndicate assembly and institutional boardroom meeting",
  },
  {
    number: "02",
    tag: "STRICT CEILING",
    title: "100-Member Cap",
    description:
      "A strict numerical limit per cohort preserving confidentiality, high-trust peer relations, and active participation without mass dilution.",
    image: "/images/istockphoto-2189200243-612x612.jpg",
    alt: "Curated peer cohort and executive boardroom discussion",
  },
  {
    number: "03",
    tag: "DUE DILIGENCE",
    title: "Audited Governance",
    description:
      "Continuous commercial due diligence, risk analysis, and priority access to approved trading activities and sovereign assets.",
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: PRO_MAX_EASE,
      },
    },
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20] font-sans">

      {/* ─── SECTION 1: PRESTIGE HERO CAROUSEL ─── */}
      <section
        id="overview"
        className="relative w-full min-h-[580px] lg:min-h-[640px] h-[72vh] flex flex-col justify-between overflow-hidden bg-black"
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

        {/* ─── Side Navigation Arrows (Matching About & Home pages) ─── */}
        <button
          type="button"
          onClick={handlePrevSlide}
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 group focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#ABF67E] transition-colors" />
        </button>

        <button
          type="button"
          onClick={handleNextSlide}
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 group focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#ABF67E] transition-colors" />
        </button>

        {/* Bottom Hero Controls Container (z-20) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full pb-8 sm:pb-12 z-20 flex items-end justify-between">
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
              Request Syndicate Access
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

      {/* ─── SECTION 2: CONCLAVE HIGHLIGHT (Concise Institutional Summary Banner) ─── */}
      <section id="conclave-statement" className="w-full py-12 sm:py-16 lg:py-20 px-6 lg:px-12 bg-white/90 border-b border-[#DEF2F4] scroll-mt-20">
        <div className="max-w-[1020px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
              <span>THE FOLD CONCLAVE</span>
            </div>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] text-[#00190A] leading-snug sm:leading-relaxed font-semibold tracking-tight">
              A private syndicate of vetted enterprise leaders pooling capital into Africa&apos;s most productive commercial frontiers.
            </p>
            <p className="text-sm sm:text-base text-[#424842] max-w-2xl mx-auto">
              Deliberately capped at 100 members per cohort to preserve high trust, confidentiality, and active peer participation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: MAGAZINE SPLIT FEATURE (85% / 15% Surplus Allocation) ─── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: High-End Photographic Feature Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: PRO_MAX_EASE }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-[#0A2F1B] group">
                <Image
                  src="/images/istockphoto-2189200243-612x612.jpg"
                  alt="Executive roundtable and syndicate cohort assembly"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col gap-1.5 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                    Statutory Governance &bull; Audited Yields
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
                    Surplus Performance Framework
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 max-w-md">
                    Structured allocation model compliant with corporate MEMART and verified operational yields.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Clean Editorial 85% / 15% Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                <TrendingUpIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                <span>DISTRIBUTION STRUCTURE</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#00190A] tracking-tight">
                The 85% / 15% Profit Allocation Model
              </h2>

              <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                Commercial returns generated from approved trading activities, asset performance, and syndicates are allocated under a transparent, board-approved structure:
              </p>

              {/* Visual Split Cards */}
              <div className="p-6 rounded-2xl bg-white border border-[#DEF2F4] shadow-md space-y-5">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1.5">
                    <span className="text-[#00190A] font-bold">Participating Cohort Members</span>
                    <span className="text-[#2D6C00] font-heading text-2xl font-bold">85%</span>
                  </div>
                  <div className="w-full bg-[#E9FDFF] h-3 rounded-full overflow-hidden border border-[#DEF2F4]">
                    <div className="bg-[#2D6C00] h-full w-[85%] rounded-full" />
                  </div>
                  <p className="text-xs text-[#556358] mt-1.5">
                    Distributed directly to members based on audited operational yields and board resolutions.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DEF2F4]">
                  <div className="flex justify-between items-center text-sm font-semibold mb-1.5">
                    <span className="text-[#00190A] font-bold">Network Reserve Stewardship</span>
                    <span className="text-[#0A2F1B] font-heading text-2xl font-bold">15%</span>
                  </div>
                  <div className="w-full bg-[#E9FDFF] h-3 rounded-full overflow-hidden border border-[#DEF2F4]">
                    <div className="bg-[#0A2F1B]/60 h-full w-[15%] rounded-full" />
                  </div>
                  <p className="text-xs text-[#556358] mt-1.5">
                    Retained for corporate governance, statutory audits, risk buffering, and operational management.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#718275] leading-relaxed italic">
                * Distributions follow Board approvals and verified operational audits. No fixed or guaranteed returns are offered, upholding regulatory compliance.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THREE SOVEREIGN PILLARS (Rich Photographic Cards) ─── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-6 lg:px-12 bg-white/70 border-y border-[#DEF2F4]">
        <div className="max-w-[1320px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                <span>COMMUNITY ARCHITECTURE</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
                Three Pillars of The Fold
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424842] max-w-md leading-relaxed">
              Structured to anchor private capital into tangible productive assets, ethical commerce, and compounding growth.
            </p>
          </div>

          {/* 3 High-End Photographic Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {FOLD_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={cardScrollVariants}
                className="rounded-3xl overflow-hidden bg-white border border-[#DEF2F4] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Photographic Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A2F1B]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#ABF67E] text-[10px] font-mono font-bold tracking-wider uppercase">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 z-10 text-white/70 font-mono text-xs">
                    PILLAR // {pillar.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-[#00190A] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#424842] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DEF2F4] flex items-center justify-between text-xs font-semibold text-[#2D6C00]">
                    <span>Cohort Sovereign Mandate</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: FULL-BLEED PANORAMIC IMAGE BREAK ─── */}
      <section className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden bg-black flex items-center justify-center">
        <Image
          src="/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg"
          alt="African corporate skyline and sovereign asset development"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 pointer-events-none" />

        <div className="relative max-w-[900px] mx-auto px-6 text-center z-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/20 border border-[#ABF67E]/40 text-[#ABF67E] text-xs uppercase font-bold tracking-widest">
            THE FOLD MANDATE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-xl">
            Disciplined Capital. Compounding Enterprise.
          </h2>
          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto font-light">
            Preserving sovereign purchasing power across generations through organized private syndicate ownership.
          </p>
        </div>
      </section>

      {/* ─── SECTION 6: CANDIDATE REGISTRY INTAKE FORM ─── */}
      <section id="join" className="relative w-full py-16 sm:py-20 lg:py-24 px-6 lg:px-12 bg-[#E9FDFF] text-[#0C1E20] border-t border-[#DEF2F4] scroll-mt-28">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Prominent Magazine Editorial Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-[#0A2F1B] group">
                <Image
                  src="/images/strategic_partnerships.jpg"
                  alt="The Fold Strategic Alliances and Executive Conclave"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                {/* Overlaid Executive Caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col gap-2.5 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                    CYCLE 1 ADMISSIONS
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Join The Fold
                  </h3>

                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                    A private syndicate of 100 vetted enterprise operators and capital allocators pooling resources into Africa&apos;s most productive sectors.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-mono text-white border border-white/20">
                      Strict 100 Cap
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-mono text-white border border-white/20">
                      Confidential Review
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-mono text-white border border-white/20">
                      85% Member Surplus
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