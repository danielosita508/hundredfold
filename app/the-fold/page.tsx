"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FoldInquiryForm from "@/components/the-fold/FoldInquiryForm";
import MaskedTextReveal from "@/components/animations/MaskedTextReveal";
import ParallaxImageFrame from "@/components/animations/ParallaxImageFrame";
import Tilt3DCard from "@/components/animations/Tilt3DCard";
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

// The Fold Hero Auto-Fading Background Slides (Fixed Hero Copy)
const THE_FOLD_HERO_SLIDES = [
  {
    image: "/images/pexels-artem-korolev-2159253660-38320074.jpg",
    alt: "The Fold Executive Conclave at Hundredfold Headquarters",
  },
  {
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Executive Boardroom Conclave and Private Syndicate Assembly",
  },
  {
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Vetted African Enterprise Leadership Cohort",
  },
  {
    image: "/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    alt: "Modern Enterprise Infrastructure and High-Yield Venues",
  },
];

// Five Progressive Stages of The Fold Journey
const FOLD_JOURNEY_STAGES = [
  {
    number: "01",
    title: "1. LEARN",
    description:
      "Develop your understanding of business, investment, entrepreneurship, financial responsibility and wealth creation through shared knowledge, educational initiatives and community engagement.",
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Business and investment literacy through shared knowledge",
  },
  {
    number: "02",
    title: "2. CONNECT",
    description:
      "Build meaningful relationships with individuals who share your commitment to growth. Engage, exchange ideas and develop relationships that can create value beyond the community.",
    image: "/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
    alt: "Building meaningful relationships within The Fold community",
  },
  {
    number: "03",
    title: "3. COLLABORATE",
    description:
      "Contribute your skills, experience, knowledge and ideas. Explore areas of mutual interest and identify opportunities to work with other members.",
    image: "/images/istockphoto-2189200243-612x612.jpg",
    alt: "Members collaborating and exchanging strategic ideas",
  },
  {
    number: "04",
    title: "4. BUILD",
    description:
      "Move from conversations to meaningful action. Participate in approved initiatives, business ventures, strategic partnerships and other opportunities that align with the Network’s objectives.",
    image: "/images/real-estate-construction-skyline.jpg",
    alt: "Participating in approved ventures and commercial infrastructure",
  },
  {
    number: "05",
    title: "5. GROW",
    description:
      "Grow through experience, responsible participation, shared achievements and long-term relationships. Contribute to a network that seeks to create value for its members and the wider African economy.",
    image: "/images/vitaly-gariev-OZnnv0FCA6Y-unsplash.jpg",
    alt: "Shared growth, achievement, and long-term economic value",
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
        className="relative w-full h-[calc(100vh-65px)] min-h-[540px] sm:min-h-[580px] flex flex-col justify-end overflow-hidden bg-black"
      >
        {/* Crisp Background Slides with Parallax Frame */}
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
              <ParallaxImageFrame
                containerClassName="w-full h-full"
                className="w-full h-full"
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
              </ParallaxImageFrame>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Hero Bottom Container (Unified Left Writeup + Right Actions) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 pb-7 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          {/* Left: Fixed Hero Headline & Writeup sitting at the bottom-left */}
          <div className="flex flex-col items-start max-w-[580px]">
            <MaskedTextReveal
              as="h1"
              animate
              className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-md text-left"
            >
              Welcome to The Fold
            </MaskedTextReveal>

            {/* Hundredfold Brand Green Accent Divider */}
            <div className="my-4 sm:my-5 h-[2px] w-[200px] bg-[#9BE564]" />

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
              className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
            >
              The Fold is the community at the heart of Hundredfold Innovation Network Ltd, bringing together individuals who believe in the power of collaboration, responsible enterprise and collective progress.
            </motion.p>
          </div>

          {/* Right: Quick link and scroll down */}
          <div className="flex flex-col items-start lg:items-center gap-3 shrink-0">
            <Link
              href="#join"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Join The Fold
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
              className="hidden lg:flex flex-col items-center -space-y-1.5 text-white/90 hover:text-white transition-colors cursor-pointer pt-1"
              aria-label="Scroll to next section"
            >
              <ChevronDownIcon className="w-4 h-4 stroke-[2]" />
              <ChevronDownIcon className="w-4 h-4 stroke-[2]" />
              <ChevronDownIcon className="w-4 h-4 stroke-[2]" />
            </button>
          </div>

        </div>

      </section>

      {/* ─── SECTION 2: WHY WE EXIST ─── */}
      <section id="conclave-statement" className="w-full py-12 sm:py-16 px-6 lg:px-12 bg-white/90 border-b border-[#DEF2F4] scroll-mt-20">
        <div className="max-w-[820px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            className="space-y-5"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
              WHY WE EXIST
            </span>
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#00190A] leading-relaxed font-normal">
              <p>
                We recognise that Africa&rsquo;s potential is enormous, but unlocking it requires more than individual ambition. It requires trust, structure, access to knowledge, strategic relationships and a willingness to build together. Our goal is to cultivate a community where members can learn, connect, exchange ideas, explore opportunities and contribute to ventures that create lasting economic and social value. We are not simply building a membership community. We are building a culture of participation, responsibility, integrity and shared progress.
              </p>
              <p className="font-semibold text-lg sm:text-xl text-[#00190A] pt-2">
                The Fold exists to bring these elements together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: INVESTMENT PARTICIPATION STRUCTURE ─── */}
      <section className="relative w-full py-14 sm:py-18 px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Clean Image stretched to align flush with Right Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
              className="lg:col-span-5 flex"
            >
              <div className="relative w-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-white bg-[#0A2F1B] group flex-1">
                <Image
                  src="/images/istockphoto-2189200243-612x612.jpg"
                  alt="Executive roundtable and syndicate cohort assembly"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col gap-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                    STRUCTURED SYNDICATES
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                    Capital Mobilisation Framework
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Unified Single Card combining Writeup & Participation Structure */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
              className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DEF2F4] shadow-xl space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
                    THE FOLD
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#00190A] tracking-tight mt-1">
                    Investment Participation Structure
                  </h2>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-[#424842] leading-relaxed font-normal">
                  <p>
                    The Fold operates through structured investment participation groups of varying sizes, bringing members together to mobilise capital towards defined investment opportunities.
                  </p>
                  <p>
                    Each participation structure is determined by the capital requirements, financial commitments and operational considerations of the proposed investment.
                  </p>
                  <p>
                    Participation sizes are not restricted to specific industries or business categories. Instead, each investment opportunity determines the appropriate participation structure and capital threshold.
                  </p>
                </div>
              </div>

              {/* Integrated Participation Structure Table (Aligned flush inside the same container) */}
              <div className="pt-5 border-t border-[#DEF2F4]">
                <div className="flex items-center justify-between pb-3 border-b border-[#DEF2F4] text-xs font-bold uppercase tracking-wider text-[#2D6C00]">
                  <span>Participation structure</span>
                  <span className="text-right">Number of participants</span>
                </div>
                <div className="divide-y divide-[#DEF2F4]/60">
                  {[
                    { structure: "Unit 10", participants: "10 Members" },
                    { structure: "Unit 20", participants: "20 Members" },
                    { structure: "Unit 50", participants: "50 Members" },
                    { structure: "Unit 60", participants: "60 Members" },
                    { structure: "Unit 100", participants: "100 Members" },
                  ].map((row) => (
                    <div
                      key={row.structure}
                      className="flex items-center justify-between py-2.5 text-sm transition-colors hover:bg-[#E9FDFF]/50 rounded-md px-1 -mx-1"
                    >
                      <span className="font-semibold text-[#00190A] tracking-wide">{row.structure}</span>
                      <span className="text-[#424842] font-semibold text-right">{row.participants}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: UNDERSTANDING YOUR JOURNEY (Five Progressive Stage Cards) ─── */}
      <section className="relative w-full py-14 sm:py-18 px-6 lg:px-12 bg-white/70 border-y border-[#DEF2F4]">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
              UNDERSTANDING YOUR JOURNEY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#00190A] tracking-tight mt-1.5 max-w-3xl">
              Your experience within The Fold is built around five progressive stages:
            </h2>
          </div>

          {/* 5 Photographic Stage Cards (3 top row + 2 centered bottom row on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8"
          >
            {FOLD_JOURNEY_STAGES.map((stage) => (
              <motion.div
                key={stage.title}
                variants={cardScrollVariants}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex"
              >
                <Tilt3DCard
                  maxTilt={6}
                  sheen={true}
                  className="w-full rounded-3xl overflow-hidden bg-white border border-[#DEF2F4] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A2F1B]">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-start space-y-2.5">
                    <h3 className="font-heading text-xl font-bold text-[#00190A] tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: FULL-BLEED PANORAMIC IMAGE BREAK ─── */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-black flex items-center justify-center group">
        <ParallaxImageFrame
          containerClassName="absolute inset-0 w-full h-full pointer-events-none"
          className="w-full h-full"
        >
          <Image
            src="/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg"
            alt="African corporate skyline and sovereign asset development"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
        </ParallaxImageFrame>

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

            {/* Left Column: Magazine Feature Image (Clean photograph of executive leaders overlooking city skyline) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-[#0A2F1B] group">
                <Image
                  src="/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg"
                  alt="The Fold Private Investment Network and Executive Members"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
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