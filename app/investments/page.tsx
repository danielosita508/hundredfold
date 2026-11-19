"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// Investment Hero Auto-Fading Slides matching commercial sectors
const INVESTMENT_HERO_SLIDES = [
  {
    image: "/images/pexels-towfiqu-barbhuiya-3440682-14527417.jpg",
    alt: "Commercial Real Estate & Institutional Holdings",
    title: "Investments & Commercial Scope",
    description:
      "Deploying disciplined capital, operational governance, and strategic syndicates into high-conviction African real estate, agriculture, finance, and technology.",
  },
  {
    image: "/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
    alt: "Agriculture & Commodity Supply Chains",
    title: "Sovereign Agrarian Basins",
    description:
      "Aggregating staple agricultural commodities and bridging the gap between fertile agrarian basins and major commercial industrial off-takers.",
  },
  {
    image: "/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
    alt: "Prime Commercial Real Estate & Urban Infrastructure",
    title: "Tangible Real Assets",
    description:
      "Acquiring strategic commercial land and logistics hubs engineered for inflation resistance, long-term wealth compounding, and capital preservation.",
  },
  {
    image: "/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg",
    alt: "Disciplined Capital Stewardship & Financial Solutions",
    title: "Strategic Co-Investment",
    description:
      "Structuring vetted co-investment syndicates with risk-adjusted underwriting to deploy patient capital into generative economic sectors.",
  },
  {
    image: "/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
    alt: "Digital Infrastructure & Scalable Enterprise",
    title: "Foundational Technology",
    description:
      "Investing in scalable enterprise software, commodity trade digitization, and digital tools that automate commerce and expand market connectivity.",
  },
];

interface PortfolioSector {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
  tagline: string;
  description: string;
  highlights: string[];
}

const PORTFOLIO_SECTORS: PortfolioSector[] = [
  {
    id: "agriculture",
    number: "01",
    title: "Agriculture",
    image: "/images/agric.jpg",
    alt: "Agricultural commodity trading, processing, and agrarian supply-chain operations",
    tagline: "Sovereign Agrarian Corridors & Commodity Supply",
    description:
      "We participate in agricultural commodity trading through robust sourcing relationships, supply-chain coordination, and buyer-supplier partnerships connecting rural agrarian basins with commercial off-takers across Nigeria and West Africa. Sourcing staple commodities at institutional scale, we bridge production and industrial demand.",
    highlights: [
      "Agro-Commodity Aggregation",
      "Off-Taker Contract Structuring",
      "Regional Supply Chain Logistics",
    ],
  },
  {
    id: "real-estate",
    number: "02",
    title: "Real Estate",
    image: "/images/business-skyscraper_ZDUJ7AJIQ2.jpg",
    alt: "Commercial real estate, prime commercial land, and productive physical infrastructure",
    tagline: "Productive Physical Assets & Commercial Real Estate",
    description:
      "We acquire and develop prime commercial real estate, logistics hubs, and tangible physical assets designed for long-term capital preservation, income generation, and sovereign balance-sheet compounding. Our focus is on prime commercial corridors that yield steady cash flow and inflation-resilient equity.",
    highlights: [
      "Prime Commercial Land Holdings",
      "Logistics & Warehousing Corridors",
      "Balance-Sheet Compounding Assets",
    ],
  },
  {
    id: "finance",
    number: "03",
    title: "Finance",
    image: "/images/photo-1590283603385-17ffb3a7f29f.avif",
    alt: "Institutional financial stewardship, capital deployment, and strategic market analytics",
    tagline: "Disciplined Capital Stewardship & Co-Investment",
    description:
      "We deploy patient capital and structure institutional financial partnerships to support viable enterprise expansion. Through transparent co-investment syndicates and rigorous risk-adjusted due diligence, we provide structured liquidity and governance-first capital solutions.",
    highlights: [
      "Structured Co-Investment Syndicates",
      "Due Diligence & Valuation Rigour",
      "Long-Term Capital Preservation",
    ],
  },
  {
    id: "technology",
    number: "04",
    title: "Technology",
    image: "/images/premium_photo-1661963212517-830bbb7d76fc.avif",
    alt: "Digital technology infrastructure, enterprise platforms, and scalable African solutions",
    tagline: "Digital Infrastructure & Enterprise Systems",
    description:
      "We invest in foundational digital infrastructure, commercial software platforms, and scalable technological platforms that accelerate trade, automate operations, and expand market access across the continent. By integrating digital efficiency into physical enterprise, we build competitive moats.",
    highlights: [
      "Enterprise Automation Platforms",
      "Trade & Commodity Digitization",
      "Scalable Digital Infrastructure",
    ],
  },
];

export default function InvestmentsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-fading hero carousel timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % INVESTMENT_HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? INVESTMENT_HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % INVESTMENT_HERO_SLIDES.length);
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
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: PRO_MAX_EASE,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20] font-sans">

      {/* ─── STEP 1: THE HERO SECTION (Transcorp Style Sharp Panoramic Backdrop Carousel) ─── */}
      <section id="overview" className="relative w-full min-h-[580px] lg:min-h-[640px] h-[72vh] flex flex-col justify-between overflow-hidden bg-black">
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
                src={INVESTMENT_HERO_SLIDES[currentSlide].image}
                alt={INVESTMENT_HERO_SLIDES[currentSlide].alt}
                fill
                priority
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dark Cinematic Overlays (Sharp Photo, Rich Executive Tone) */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/70 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent z-10 pointer-events-none" />

        {/* Hero Title Container Layered on Top (z-20, uniform bottom-anchored placement) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 flex-1 flex flex-col justify-end pb-8 sm:pb-10 pt-28">
          <div className="flex flex-col items-start text-left">
            <motion.h1
              key={`invest-h1-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
              className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[580px] text-white drop-shadow-md text-left"
            >
              {INVESTMENT_HERO_SLIDES[currentSlide].title}
            </motion.h1>

            {/* Hundredfold Brand Green Accent Divider */}
            <div className="my-5 sm:my-6 h-[2px] w-[220px] bg-[#9BE564]" />

            <motion.p
              key={`invest-desc-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
              className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
            >
              {INVESTMENT_HERO_SLIDES[currentSlide].description}
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
              <span className="text-white/60">0{INVESTMENT_HERO_SLIDES.length}</span>
            </div>

            {/* Slide Progress Dash Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {INVESTMENT_HERO_SLIDES.map((_, idx) => (
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
              href="#sectors"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Explore Our Sectors
            </Link>

            <button
              type="button"
              onClick={() => {
                const sec = document.getElementById("sectors");
                if (sec) {
                  sec.scrollIntoView({ behavior: "smooth" });
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

      {/* ─── STEP 2: PORTFOLIO HIGHLIGHT (Concise Single Summary Statement) ─── */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-6 lg:px-12 bg-white/90 border-b border-[#DEF2F4]">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-widest text-[#2D6C00] font-bold">
              STRATEGIC ASSET ALLOCATION
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#00190A] leading-relaxed font-normal tracking-tight">
              We invest in sectors that provide strong long-term returns and have the ability to transform Africa&apos;s economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STEP 3: THE 4 INVESTMENT SECTORS (Massive Edge-to-Edge Banners with Glass Overlays) ─── */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#E9FDFF]">
        <div className="max-w-[1320px] mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
          {PORTFOLIO_SECTORS.map((sector) => (
            <motion.div
              key={sector.title}
              id={sector.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className="scroll-mt-28 relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0A2F1B] border border-white/60 group"
            >
              {/* Massive Full-Bleed Image Background */}
              <div className="relative w-full h-[500px] sm:h-[580px] lg:h-[640px] overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  quality={100}
                  sizes="100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Cinematic Dark Frosted Glass Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 pointer-events-none" />

                {/* Additional Vignette & Directional Lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 z-10 pointer-events-none" />

                {/* Overlaid Glass-Morphism Content Card (Layered on top at z-20) */}
                <div className="absolute inset-0 z-20 p-6 sm:p-10 lg:p-16 flex flex-col justify-end">
                  <div className="max-w-3xl space-y-4 sm:space-y-5 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[#ABF67E] font-mono text-sm sm:text-base font-bold tracking-wider">
                        {sector.number}
                      </span>
                      <span className="w-8 h-px bg-[#ABF67E]/60" />
                      <span className="text-xs uppercase tracking-widest font-bold text-white/80">
                        {sector.tagline}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.08] drop-shadow-md">
                      {sector.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-light drop-shadow-xs">
                      {sector.description}
                    </p>

                    {/* Sector Highlights Chips */}
                    <div className="pt-2 flex flex-wrap gap-2 sm:gap-2.5">
                      {sector.highlights.map((item) => (
                        <span
                          key={item}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/15 backdrop-blur-md text-[#ABF67E] border border-white/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── STEP 4: CLEAN CTA SECTION (Compact Banner) ─── */}
      <section className="w-full px-6 lg:px-12 py-10 sm:py-12 bg-[#00190A] text-white border-t border-white/10">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#ABF67E] font-bold">
              CO-INVESTMENT &amp; ALLIANCES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Partner Across Our Strategic Sectors
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We welcome dialogue with institutional partners, qualified co-investors, and commercial collaborators across our 4 strategic pillars.
            </p>
          </div>

          <div className="flex items-center shrink-0">
            <Link
              href="/the-fold#join"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#ABF67E] text-[#00190A] hover:bg-white transition-colors text-sm font-bold shadow-lg group"
            >
              <span>Partner With Us</span>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
