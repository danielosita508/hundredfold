"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

interface PortfolioSector {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

const PORTFOLIO_SECTORS: PortfolioSector[] = [
  {
    id: "agriculture",
    title: "Agriculture",
    image: "/images/agri_business_showcase.jpg",
    alt: "Agricultural commodity trading, processing, and supply-chain operations",
    description:
      "We participate in agricultural commodity trading through sourcing relationships, supply-chain coordination, and buyer-supplier partnerships connecting rural agrarian basins with commercial off-takers across Nigeria and West Africa.",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    image: "/images/commercial_real_estate.jpg",
    alt: "Commercial real estate, prime commercial land, and productive physical infrastructure",
    description:
      "We acquire and develop prime commercial real estate, logistics hubs, and tangible physical assets designed for long-term capital preservation, income generation, and sovereign balance-sheet compounding.",
  },
  {
    id: "finance",
    title: "Finance",
    image: "/images/strategic_partnerships.jpg",
    alt: "Institutional financial stewardship, capital deployment, and strategic alliances",
    description:
      "We deploy patient capital and structure institutional financial partnerships to support viable enterprise expansion, providing structured liquidity and transparent co-investment vehicles.",
  },
  {
    id: "technology",
    title: "Technology",
    image: "/images/african_business_ventures.jpg",
    alt: "Digital technology infrastructure, enterprise platforms, and scalable African solutions",
    description:
      "We invest in foundational digital infrastructure, commercial software platforms, and scalable technological platforms that accelerate trade, automate operations, and expand market access across the continent.",
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

      {/* ─── STEP 1: THE HERO SECTION (Massive Skyline Image & Clean Title Only) ─── */}
      <section id="overview" className="relative w-full min-h-screen flex flex-col justify-end pb-8 sm:pb-10 lg:pb-12 pt-32 overflow-hidden bg-[#0A2F1B]">
        {/* Full-Bleed Corporate Skyscraper / Skyline Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_aerial.jpg"
            alt="Our Holdings - Hundredfold Pan-African Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Cinematic Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/60 z-[1]" />

        {/* Hero Title Container: Shifted to the left and placed lower */}
        <div className="w-full px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: PRO_MAX_EASE }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight font-medium leading-[1.08] drop-shadow-2xl text-left whitespace-nowrap"
          >
            Investment Portfolio
          </motion.h1>
        </div>
      </section>

      {/* ─── STEP 2: PORTFOLIO HIGHLIGHT (Concise Single Summary Statement) ─── */}
      <section className="w-full py-8 sm:py-10 lg:py-12 px-6 lg:px-12 bg-white/90 border-b border-[#DEF2F4]">
        <div className="max-w-[960px] mx-auto text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#00190A] leading-relaxed font-normal tracking-tight"
          >
            We invest in sectors that provide strong long-term returns and have the ability to transform Africa&apos;s economy.
          </motion.p>
        </div>
      </section>

      {/* ─── STEP 3: THE 4 INVESTMENT SECTORS (Clean, Image-Driven Portfolio Blocks) ─── */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-20 lg:pb-32 px-6 lg:px-12 bg-[#E9FDFF]">
        <div className="max-w-[1240px] mx-auto space-y-24 sm:space-y-32 lg:space-y-40">
          {PORTFOLIO_SECTORS.map((sector) => (
            <motion.div
              key={sector.title}
              id={sector.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              className="scroll-mt-28 flex flex-col gap-6 sm:gap-8"
            >
              {/* Wide High-Quality Sector Image */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.35/1] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-white/60">
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title and Short Summary Paragraph Directly Below */}
              <div className="space-y-3 max-w-3xl">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00190A] tracking-tight">
                  {sector.title}
                </h2>
                <p className="font-sans text-base sm:text-lg lg:text-xl text-[#424842] leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── STEP 4: CLEAN CTA SECTION (Compact Banner) ─── */}
      <section className="w-full px-6 lg:px-12 py-7 sm:py-8 bg-[#00190A] text-white">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#ABF67E] font-bold">
              CO-INVESTMENT &amp; ALLIANCES
            </span>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We welcome dialogue with institutional partners, qualified co-investors, and commercial collaborators across our 4 strategic sectors.
            </p>
          </div>

          <div className="flex items-center shrink-0">
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#ABF67E] text-[#00190A] hover:bg-white transition-colors text-sm font-bold shadow-md"
            >
              <span>Partner With Us</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
