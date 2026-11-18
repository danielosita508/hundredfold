"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

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

export default function BusinessPage() {
  const shouldReduceMotion = useReducedMotion();

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

      {/* ─── STEP 1: THE HERO SECTION (Massive Skyline with Frosted Glass Overlay) ─── */}
      <section id="overview" className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-end pb-12 sm:pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#0A2F1B]">
        {/* Full-Bleed Corporate Skyscraper / Skyline Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pexels-towfiqu-barbhuiya-3440682-14527417.jpg"
            alt="Our Holdings - Hundredfold Pan-African Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Dark Frosted Glass Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 pointer-events-none" />

        {/* Dark Cinematic Vignette & Directional Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/60 z-10 pointer-events-none" />

        {/* Subtle emerald brand glow */}
        <div className="absolute bottom-0 left-0 w-[550px] h-[320px] bg-[#2D6C00]/25 rounded-full blur-[140px] pointer-events-none z-10" />

        {/* Hero Title Container Layered on Top (z-20) */}
        <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: PRO_MAX_EASE }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight font-medium leading-[1.05] drop-shadow-2xl text-left"
          >
            Investment Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: PRO_MAX_EASE }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl font-light leading-relaxed mt-4 drop-shadow-md"
          >
            Deploying capital, rigorous diligence, and strategic networks across four foundational African commercial pillars.
          </motion.p>
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
                  sizes="(max-width: 1320px) 100vw, 1320px"
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
              href="/partnerships"
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
