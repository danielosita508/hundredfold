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
import InvestmentPhilosophy from "@/components/about/InvestmentPhilosophy";

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
    image: "/images/photo-1590283603385-17ffb3a7f29f.avif",
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
  images?: string[];
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
    image: "/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
    images: [
      "/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
      "/images/agric.jpg",
      "/images/annie-spratt-IT6aov1ScW0-unsplash.jpg",
    ],
    alt: "Agricultural commodity trading, processing, and agrarian supply-chain operations",
    tagline: "Sovereign Agrarian Corridors & Commodity Supply",
    description:
      "We operate at the vital intersection of primary agrarian production, institutional commodity aggregation, and structured industrial off-take. Through strategic sourcing networks across Nigeria’s high-yield agro-ecological corridors, Hundredfold coordinates supply chains that connect rural smallholder farming basins with commercial food processors, beverage manufacturers, and export markets. Sourcing staple commodities at institutional scale—including grains, oilseeds, and pulses—we deploy rigorous quality inspection, structured warehousing, and reliable logistics. By bridging the structural gap between fragmented rural farm gates and dependable industrial processing demand, we de-risk agricultural value chains, enhance smallholder earning power, and strengthen sovereign food security across West Africa.",
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
    image: "/images/real-estate-modern-development.jpg",
    images: [
      "/images/real-estate-modern-development.jpg",
      "/images/real-estate-land-development.jpg",
      "/images/real-estate-construction-skyline.jpg",
      "/images/real-estate-building-structure.jpg",
    ],
    alt: "Commercial real estate, prime commercial land, and productive physical infrastructure",
    tagline: "Productive Physical Assets & Commercial Real Estate",
    description:
      "We stand as long-term custodians and strategic developers of prime commercial real estate, logistics corridors, and tangible physical assets across high-velocity growth hubs in Nigeria. Structured to hedge against currency depreciation and compound sovereign balance-sheet equity, our property portfolio spans commercial land reserves, industrial warehousing facilities, and mixed-use commercial developments designed for enduring capital appreciation. We prioritize strategic transport junctions, industrial corridors, and expanding commercial urban centres that command steady occupancy, verified title integrity, and resilient cash yields. By combining disciplined site acquisition with institutional asset management, we create balance-sheet stability and enduring institutional wealth across market cycles.",
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
    images: [
      "/images/photo-1590283603385-17ffb3a7f29f.avif",
      "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
      "/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
    ],
    alt: "Institutional financial stewardship, capital deployment, and strategic market analytics",
    tagline: "Disciplined Capital Stewardship & Co-Investment",
    description:
      "We deploy disciplined, patient capital and structure institutional co-investment syndicates designed to accelerate high-conviction African commercial enterprises. Operating with rigorous fiduciary governance and transparent stewardship, Hundredfold bridges the gap between private capital allocators and viable, cash-generating commercial operators in productive economic sectors. Every transaction undergoes thorough balance-sheet stress-testing, legal compliance verification, and cash-flow viability modeling to ensure risk-adjusted capital preservation. Through collective syndicate leverage and structured liquidity facilities, we provide growing enterprises with the non-speculative growth capital they need while delivering protected, compounding returns to participating co-investors.",
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
    image: "/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
    images: [
      "/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
      "/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg",
      "/images/jakub-zerdzicki-WD7S-Lz12Es-unsplash.jpg",
    ],
    alt: "Digital technology infrastructure, enterprise platforms, and scalable African solutions",
    tagline: "Digital Infrastructure & Enterprise Systems",
    description:
      "We invest in foundational digital infrastructure, commercial software systems, and scalable technological platforms that eliminate friction, accelerate trade velocity, and automate operational workflows across African enterprise. Recognizing that true continental scale requires integrating software with physical commerce, Hundredfold focuses on supply-chain digitization, commodity tracking platforms, and enterprise management tools tailored to indigenous operating environments. By equipping real-economy businesses with robust data transparency, automated reconciliation, and scalable digital tools, we reduce transaction overhead, mitigate counterparty risk, and construct durable commercial moats that power modern African commerce.",
    highlights: [
      "Enterprise Automation Platforms",
      "Trade & Commodity Digitization",
      "Scalable Digital Infrastructure",
    ],
  },
];

// Interactive Living Banner for each Investment Sector with graceful cross-fading imagery
function SectorBannerRow({
  sector,
  index,
}: {
  sector: PortfolioSector;
  index: number;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!sector.images || sector.images.length <= 1) return;
    const intervalTime = 5500 + index * 1200;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sector.images!.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [sector.images, index]);

  const activeImage =
    sector.images && sector.images.length > 0
      ? sector.images[currentIdx]
      : sector.image;

  return (
    <div
      key={sector.title}
      id={sector.id}
      className="scroll-mt-20 relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-black group select-none cursor-pointer border-b border-black/40 last:border-b-0"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={activeImage}
            alt={sector.alt}
            fill
            quality={100}
            sizes="100vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Base Dark Layer for Photo Richness, deepening to Dark Backdrop on Hover (Zero Blur) */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/65 transition-all duration-700 ease-out pointer-events-none" />

      {/* Sector Name & Description: Invisible Until Hovered Upon (Wider width, smaller elegant font) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 sm:p-10 text-center pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col items-center max-w-5xl lg:max-w-6xl w-full px-4">
          {/* Sector Title */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
            {sector.title}
          </h2>

          {/* Accent Line */}
          <div className="my-3.5 sm:my-4 h-[2px] w-16 sm:w-24 bg-[#9BE564] drop-shadow-md" />

          {/* Sector Description Paragraph: Wide horizontally, smaller refined typography */}
          <p className="font-sans text-xs sm:text-sm lg:text-[14.5px] text-white/95 max-w-4xl lg:max-w-5xl leading-[1.75] sm:leading-[1.85] font-normal drop-shadow-md px-2 sm:px-4">
            {sector.description}
          </p>
        </div>
      </div>
    </div>
  );
}

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
      <section id="overview" className="relative w-full h-[calc(100vh-65px)] min-h-[540px] sm:min-h-[580px] flex flex-col justify-end overflow-hidden bg-black">
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

        {/* Hero Bottom Container (Unified Left Writeup + Right Actions) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 pb-7 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          {/* Left: Headline & Writeup sitting at the bottom-left */}
          <div className="flex flex-col items-start max-w-[580px]">
            <motion.h1
              key={`invest-h1-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
              className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-md text-left"
            >
              {INVESTMENT_HERO_SLIDES[currentSlide].title}
            </motion.h1>

            {/* Hundredfold Brand Green Accent Divider */}
            <div className="my-4 sm:my-5 h-[2px] w-[200px] bg-[#9BE564]" />

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

          {/* Right: Quick link and scroll down */}
          <div className="flex flex-col items-start lg:items-center gap-3 shrink-0">
            <Link
              href="#sectors"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Explore Sectors
            </Link>

            <button
              type="button"
              onClick={() => {
                const sectorsSec = document.getElementById("sectors");
                if (sectorsSec) {
                  sectorsSec.scrollIntoView({ behavior: "smooth" });
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
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.3rem] text-[#00190A] leading-snug sm:leading-relaxed font-semibold tracking-tight">
              We invest in sectors that provide strong long-term returns and have the ability to transform Africa&apos;s economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STEP 2.5: OUR INVESTMENT PHILOSOPHY (Radial Sector Wheel & Tenets) ─── */}
      <InvestmentPhilosophy />

      {/* ─── STEP 3: THE 4 INVESTMENT SECTORS (Full-Width Photographic Banners, Invisible Writeup until Hover) ─── */}
      <section id="sectors" className="w-full bg-black flex flex-col">
        {PORTFOLIO_SECTORS.map((sector, index) => (
          <SectorBannerRow key={sector.title} sector={sector} index={index} />
        ))}
      </section>

      {/* ─── STEP 4: CLEAN CTA SECTION (Compact Banner) ─── */}
      <section className="w-full px-6 lg:px-12 py-10 sm:py-12 bg-[#00190A] text-white border-t border-white/10">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#ABF67E] font-bold">
              CO-INVESTMENT &amp; ALLIANCES
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
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
