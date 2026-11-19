"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroTicker from "@/components/home/HeroTicker";
import siteConfig from "@/lib/site-config";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PauseIcon,
  PlayIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// Hero Auto-Fading Slides with sharp corporate Transcorp typography
const HERO_SLIDES = [
  {
    image: "/images/pexels-thomas-haney-175964438-20812782.jpg",
    alt: "Global African commercial partnership and investment landscape",
    title: "Redefining Partnerships.",
    description:
      "Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying high-impact commercial opportunities, building strategic relationships, and developing ventures with long-term potential.",
  },
  {
    image: "/images/cytonn-photography-n95VMLxqM2I-unsplash.jpg",
    alt: "Modern African corporate skyline and sovereign asset development",
    title: "Building Businesses. Creating Value.",
    description:
      "Grounded in institutional governance and disciplined capital stewardship, we pool capabilities and participate in high-conviction ventures across key sovereign sectors.",
  },
  {
    image: "/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
    alt: "Agricultural commodity corridors and fertile agro-processing basins",
    title: "Agrarian Corridors & Food Security.",
    description:
      "Coordinating large-scale agricultural commodity aggregation, supply chain logistics, and strategic off-taker partnerships connecting rural basins with industrial demand.",
  },
  {
    image: "/images/sean-pollock-PhYq704ffdA-unsplash.jpg",
    alt: "Productive commercial real estate and prime logistics hubs",
    title: "Disciplined Capital. Real Assets.",
    description:
      "Acquiring prime commercial land, logistics hubs, and productive tangible assets engineered for long-term purchasing power preservation and sovereign balance-sheet compounding.",
  },
  {
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Executive boardroom conclave and institutional governance assembly",
    title: "Generative Enterprise. Lasting Impact.",
    description:
      "Guided by the philosophy of Africapitalism, we build enduring commercial institutions that create compounding economic value for investors, partners, and communities.",
  },
  {
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Strategic African leadership and executive enterprise collaboration",
    title: "Strategic Alliances. Scaled Impact.",
    description:
      "Convening exceptional African operators and sovereign syndicates to pool capital, mitigate operational risk, and capture high-conviction economic growth.",
  },
  {
    image: "/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    alt: "Modern commercial architecture and institutional infrastructure",
    title: "Institutional Rigour. Sovereign Vision.",
    description:
      "Operating with unyielding adherence to compliance, statutory governance, and corporate transparency across West Africa's expanding commercial frontiers.",
  },
];

// Strategic Investment Sectors conforming to panoramic strip architecture
const BUSINESS_SECTORS = [
  {
    title: "Agriculture",
    href: "/investments#agriculture",
    image: "/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
    alt: "Agriculture and agricultural commodity supply chains",
  },
  {
    title: "Real Estate",
    href: "/investments#real-estate",
    image: "/images/sean-pollock-PhYq704ffdA-unsplash.jpg",
    alt: "Commercial real estate and productive tangible assets",
  },
  {
    title: "Finance",
    href: "/investments#finance",
    image: "/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg",
    alt: "Financial capital stewardship and strategic investment",
  },
  {
    title: "Technology",
    href: "/investments#technology",
    image: "/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
    alt: "Technology infrastructure and digital enterprise solutions",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-fading hero carousel timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">

      {/* ─── SECTION 1: HERO (Transcorp Style Sharp Panoramic Carousel) ─── */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black flex flex-col justify-between">

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
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].alt}
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

        {/* Hero Content Container (Layered on Top z-20, flexed down toward the bottom controls for uniform placement) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 flex-1 flex flex-col justify-end pb-8 sm:pb-10 pt-28">
          <div className="flex flex-col items-start">

            {/* Headline in Poppins (Sans-Serif, Corporate Bold) */}
            <motion.h1
              key={`hero-h1-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
              className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[500px] text-white drop-shadow-md"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>

            {/* Hundredfold Brand Green Accent Divider */}
            <div className="my-6 h-[2px] w-[220px] bg-[#9BE564]" />

            {/* Compact Sub-Headline Description */}
            <motion.p
              key={`hero-desc-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
              className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[400px] text-white/90 drop-shadow-sm"
            >
              {HERO_SLIDES[currentSlide].description}
            </motion.p>

          </div>
        </div>


        {/* Bottom Hero Controls Container (z-20) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full pb-8 sm:pb-12 z-20 flex items-end justify-end">

          {/* Bottom-Right: Translucent white-bordered pill button & stacked downward chevrons */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/investments"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Explore Our Investments
            </Link>

            <button
              type="button"
              onClick={() => {
                const ticker = document.getElementById("ticker");
                if (ticker) {
                  ticker.scrollIntoView({ behavior: "smooth" });
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

      {/* ─── CONTINUOUS INSTITUTIONAL MANDATE TICKER (Directly Below Hero) ─── */}
      <HeroTicker />

      {/* ─── SECTION 2: ABOUT US SNIPPET (Paired with Boardroom Presentation Image) ─── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white/60 border-b border-[#DEF2F4]/60">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Short Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
                WHO WE ARE
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight leading-[1.12]">
                A Network Built Around Opportunity.
              </h2>

              <p className="text-base sm:text-lg text-[#424842] leading-relaxed font-normal">
                Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.
              </p>

              <p className="text-sm sm:text-base text-[#424842]/80 leading-relaxed font-light">
                Grounded in institutional governance and disciplined capital stewardship, we bring together committed enterprise leaders to pool capabilities, acquire productive tangible assets, and participate in high-conviction ventures across key sovereign sectors.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A2F1B] text-white text-sm font-semibold hover:bg-[#00190A] hover:shadow-lg transition-all shadow-sm group"
                >
                  <span>Discover Hundredfold</span>
                  <ArrowRightIcon className="w-4 h-4 text-[#ABF67E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Boardroom Presentation Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: PRO_MAX_EASE }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-[#0A2F1B] group">
                <Image
                  src="/images/premium_photo-1707155465391-5cfc46746a34.avif"
                  alt="Executive boardroom presentation and institutional strategic briefing"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Glassmorphism Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col gap-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                    Executive Stewardship
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-medium text-white tracking-wide">
                    Institutional Governance &amp; Strategic Alignment
                  </h4>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: STRATEGIC BUSINESS SECTORS (Heirs Holdings Style 2-Up 2-Down Full Bleed) ─── */}
      <section className="relative w-full pt-12 lg:pt-16 pb-0 bg-[#E9FDFF] overflow-hidden">
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
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
                INVESTMENTS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
                Where We Focus
              </h2>

              <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                We deploy capital, expertise and network resources across four strategic commercial pillars.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/investments"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#2D6C00] font-bold hover:text-[#00190A] transition-colors"
              >
                <span>View Full Investment Scope</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Transcorp Style Panoramic Multi-Sector Strip (Full-Bleed Grayscale-to-Color Architecture) */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 w-full border-t border-b border-white/20">
            {BUSINESS_SECTORS.map((sector, index) => (
              <Link
                key={sector.title}
                href={sector.href}
                className="group relative w-full h-[240px] sm:h-[280px] lg:h-[340px] overflow-hidden bg-black flex flex-col justify-end border-r border-white/20 last:border-r-0 cursor-pointer select-none"
              >
                {/* Background Photographic Image: Grayscale by default to match Transcorp strip, blooms to full color on hover */}
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Base subtle dark gradient for text legibility (no colored tints) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Sector Title: Completely invisible until hovered, slides smoothly up into view */}
                <div className="relative z-10 p-5 sm:p-6 lg:p-8 flex flex-col justify-end h-full pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="font-poppins text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-white drop-shadow-lg">
                      {sector.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: OUR APPROACH (Simple Centralized Summary) ─── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white/70">
        <div className="max-w-[860px] mx-auto px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="flex flex-col items-center space-y-4 sm:space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
              OUR APPROACH
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
              Opportunity With Purpose. <br className="hidden sm:inline" />
              Growth With Discipline.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#424842] leading-relaxed font-light">
              We approach every venture with research-led judgment, disciplined risk management, and long-term commitment. Guided by commercial integrity, rigorous due diligence, and active execution, we build generative assets that endure across economic cycles.
            </p>
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
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
                  THE COMMUNITY
                </span>

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
                  <span>Join The Fold</span>
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
