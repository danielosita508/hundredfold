"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/lib/site-config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SproutIcon,
  BuildingIcon,
  HandshakeIcon,
  TrendingUpIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function BusinessPage() {
  const shouldReduceMotion = useReducedMotion();

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
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">
      {/* ─── SECTION 1: HERO & STRATEGIC OVERVIEW ─── */}
      <section className="relative w-full overflow-hidden px-6 lg:px-12 pt-12 pb-20">
        <div className="absolute -top-32 left-1/4 w-[620px] h-[620px] bg-[#ABF67E]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[540px] h-[540px] bg-[#C4ECCE]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={heroFadeVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] w-fit shadow-xs backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#2D6C00] animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider font-bold">
                  COMMERCIAL MANDATE &bull; STRATEGIC PATHWAYS
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={heroFadeVariants}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#00190A] tracking-tight font-semibold leading-[1.08] max-w-3xl"
              >
                Where We Focus. <br />
                <span className="text-[#2D6C00]">Disciplined Capital Stewardship.</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={heroFadeVariants}
                className="text-base sm:text-lg text-[#424842] max-w-2xl leading-relaxed"
              >
                We deploy capital, expertise and network resources across four strategic commercial pillars designed to address structural economic demand across Nigeria and the wider African continent.
              </motion.p>

              {/* Quick Jump Pills */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={heroFadeVariants}
                className="flex flex-wrap items-center gap-2 pt-2"
              >
                <a
                  href="#agro-trading"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/80 backdrop-blur-md text-[#00190A] border border-white shadow-xs hover:bg-white hover:text-[#2D6C00] transition-all"
                >
                  &darr; Agro-Trading
                </a>
                <a
                  href="#asset-acquisition"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/80 backdrop-blur-md text-[#00190A] border border-white shadow-xs hover:bg-white hover:text-[#2D6C00] transition-all"
                >
                  &darr; Asset Acquisition &amp; Real Estate
                </a>
                <a
                  href="#strategic-partnerships"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/80 backdrop-blur-md text-[#00190A] border border-white shadow-xs hover:bg-white hover:text-[#2D6C00] transition-all"
                >
                  &darr; Strategic Partnerships
                </a>
                <a
                  href="#business-ventures"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white/80 backdrop-blur-md text-[#00190A] border border-white shadow-xs hover:bg-white hover:text-[#2D6C00] transition-all"
                >
                  &darr; Business Ventures
                </a>
              </motion.div>
            </div>

            {/* Macro Thesis Glass Metric Box */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={heroFadeVariants}
              className="lg:col-span-4 flex flex-col gap-4"
            >
              <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_12px_40px_-8px_rgba(10,47,27,0.06)] flex flex-col gap-2">
                <div className="flex items-center justify-between text-[#2D6C00]">
                  <span className="text-[10px] uppercase tracking-wider font-bold">
                    Strategic Focus
                  </span>
                  <ShieldCheckIcon className="w-5 h-5 text-[#2D6C00]" />
                </div>
                <span className="font-serif text-3xl font-bold text-[#00190A] tracking-tight">
                  4 Core Pillars
                </span>
                <span className="text-xs text-[#424842] leading-relaxed">
                  Carefully structured strategic pathways targeting real-economy utility, cash-flow visibility, and multi-generational value creation.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/70 backdrop-blur-md border border-white shadow-xs flex flex-col">
                  <span className="text-[10px] uppercase text-[#424842] font-bold tracking-wider">
                    Governance
                  </span>
                  <span className="font-serif text-xl font-bold text-[#00190A] mt-1">
                    CAC &bull; SCUML
                  </span>
                  <span className="text-[11px] text-[#2D6C00] font-semibold mt-0.5">
                    Statutory Integrity
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/70 backdrop-blur-md border border-white shadow-xs flex flex-col">
                  <span className="text-[10px] uppercase text-[#424842] font-bold tracking-wider">
                    Headquarters
                  </span>
                  <span className="font-serif text-xl font-bold text-[#00190A] mt-1">
                    Asaba Hub
                  </span>
                  <span className="text-[11px] text-[#2D6C00] font-semibold mt-0.5">
                    Delta State Nexus
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: 4 DISTINCT VERTICAL DEEP-DIVES ─── */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-12 flex flex-col gap-20">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#def2f4]">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#2D6C00] font-bold">
              COMMERCIAL CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] tracking-tight font-semibold">
              The Four Business Pillars
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#424842] max-w-md">
            Each pillar follows our institutional standard: What we do, why it matters, how we approach it, and potential partners.
          </p>
        </div>

        {/* ── PILLAR 1: AGRO-TRADING ── */}
        <div id="agro-trading" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-xs">
                    <SproutIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D6C00] font-bold">
                      PILLAR 01
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A] tracking-tight">
                      Agro-Trading
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#424842] font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                  Commodity Supply Chains
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#424842] leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Overview
                  </h4>
                  <p>
                    Hundredfold seeks to participate in agricultural commodity trading through sourcing relationships, supply-chain coordination, buyer and supplier partnerships, and commercially viable trading opportunities.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    What We Do
                  </h4>
                  <p>
                    Coordinate procurement, logistics, and trading of essential agricultural commodities connecting rural production with commercial off-takers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Why It Matters
                  </h4>
                  <p>
                    Agriculture is the economic foundation of Africa, offering predictable cash flow and high volume demand as the continent&apos;s population expands.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    How We Approach It
                  </h4>
                  <p>
                    Rigorous vetting of suppliers, pre-contracted off-taker agreements, disciplined quality inspection, and structured financing cycles.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#def2f4]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#2D6C00] mb-2">
                  Potential Partners
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-[#00190A]">
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Commercial Farmers</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Agricultural Cooperatives</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Aggregators</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Food Processors</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Commodity Exporters</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between mt-6 border-t border-[#def2f4]">
              <Link
                href="/partnerships?category=agro"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2F1B] text-white text-xs font-bold hover:bg-[#00190A] transition-colors shadow-xs group"
              >
                <span>Partner in Agro-Trading</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
              </Link>
              <span className="text-[11px] text-[#2D6C00] font-semibold">Commodity Corridors</span>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: PRO_MAX_EASE }}
            className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-white flex flex-col bg-white/80 backdrop-blur-xl"
          >
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src="/images/agri_business_showcase.jpg"
                alt="Agro-Trading and Agricultural Commodity Corridors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold uppercase tracking-wider">Strategic Pathway: Agriculture</span>
                <span className="px-2.5 py-1 rounded-full bg-[#2D6C00] font-bold text-[10px]">Supply Chains</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-[#00190A]">
                  Structured Supply-Chain Framework
                </h4>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Connecting primary agricultural production hubs across the Niger basin and Middle Belt with verified commercial buyers through disciplined counterparty risk management.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#E3F7F9]/80 border border-white flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-[#2D6C00]">Execution Readiness</span>
                <span className="text-xs text-[#00190A] font-semibold">
                  Sourcing relationships &amp; structured off-taker ties under development
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── PILLAR 2: ASSET ACQUISITION & OWNERSHIP ── */}
        <div id="asset-acquisition" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="lg:col-span-5 order-2 lg:order-1 rounded-3xl overflow-hidden shadow-lg border border-white flex flex-col bg-white/80 backdrop-blur-xl"
          >
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src="/images/commercial_real_estate.jpg"
                alt="Productive Commercial Real Estate and Tangible Asset Opportunities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold uppercase tracking-wider">Tangible Assets</span>
                <span className="px-2.5 py-1 rounded-full bg-[#0A2F1B] border border-white/20 font-bold text-[10px]">Real Estate</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-[#00190A]">
                  Prudent Valuation &amp; Clean Title Perfection
                </h4>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Focusing on tangible commercial property, logistics parcel banks, and productive physical infrastructure that generates predictable yields and balance-sheet resilience.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#E3F7F9]/80 border border-white flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-[#2D6C00]">Strategic Criteria</span>
                <span className="text-xs text-[#00190A] font-semibold">
                  Commercial utility, unencumbered titles, and long-term capital preservation
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: PRO_MAX_EASE }}
            className="lg:col-span-7 order-1 lg:order-2 p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A2F1B] text-white flex items-center justify-center shadow-xs">
                    <BuildingIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D6C00] font-bold">
                      PILLAR 02
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A] tracking-tight">
                      Asset Acquisition &amp; Ownership
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#424842] font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                  Productive Capital
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#424842] leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Overview
                  </h4>
                  <p>
                    The company intends to explore ownership of productive assets, including real estate, as part of its long-term commercial strategy.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    What We Do
                  </h4>
                  <p>
                    Identify, acquire, and manage high-utility tangible assets and commercial property with clear yield and appreciation potential.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Why It Matters
                  </h4>
                  <p>
                    Tangible assets provide balance-sheet strength, hedge against currency devaluation, and produce recurring baseline revenues.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    How We Approach It
                  </h4>
                  <p>
                    Prudent valuation, strategic geographic positioning, clean title verification, and asset classes that serve fundamental commercial needs.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#def2f4]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#2D6C00] mb-2">
                  Potential Partners
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-[#00190A]">
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Property Owners</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Institutional Co-Investors</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Asset Managers</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Commercial Developers</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between mt-6 border-t border-[#def2f4]">
              <Link
                href="/partnerships?category=assets"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2F1B] text-white text-xs font-bold hover:bg-[#00190A] transition-colors shadow-xs group"
              >
                <span>Discuss Asset Opportunities</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
              </Link>
              <span className="text-[11px] text-[#2D6C00] font-semibold">Tangible Value</span>
            </div>
          </motion.div>
        </div>

        {/* ── PILLAR 3: STRATEGIC PARTNERSHIPS ── */}
        <div id="strategic-partnerships" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-xs">
                    <HandshakeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D6C00] font-bold">
                      PILLAR 03
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A] tracking-tight">
                      Strategic Partnerships
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#424842] font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                  Collaborative Alliances
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#424842] leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Overview
                  </h4>
                  <p>
                    We seek relationships with businesses, institutions, suppliers and investors where complementary capabilities create mutually beneficial commercial opportunities.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    What We Do
                  </h4>
                  <p>
                    Structure joint alliances, co-investment vehicles, and distribution networks that leverage combined capital and operational strengths.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Why It Matters
                  </h4>
                  <p>
                    Complex commercial ventures scale faster and manage risk better when aligned with trusted, established operators.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    How We Approach It
                  </h4>
                  <p>
                    Clear alignment of objectives, defined governance, equitable risk-reward sharing, and mutual accountability.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#def2f4]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#2D6C00] mb-2">
                  Potential Partners
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-[#00190A]">
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Established Enterprises</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Financial Institutions</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Logistics Providers</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Technical Specialists</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between mt-6 border-t border-[#def2f4]">
              <Link
                href="/partnerships?category=strategic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2F1B] text-white text-xs font-bold hover:bg-[#00190A] transition-colors shadow-xs group"
              >
                <span>Propose a Strategic Partnership</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
              </Link>
              <span className="text-[11px] text-[#2D6C00] font-semibold">Equitable Alignment</span>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: PRO_MAX_EASE }}
            className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-white flex flex-col bg-white/80 backdrop-blur-xl"
          >
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src="/images/strategic_partnerships.jpg"
                alt="Hundredfold Institutional Alliances and Commercial Partnerships"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold uppercase tracking-wider">Joint Alliances</span>
                <span className="px-2.5 py-1 rounded-full bg-[#2D6C00] font-bold text-[10px]">Governance</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-[#00190A]">
                  Aligned Objectives &amp; Defined Governance
                </h4>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  We believe enduring commercial alliances require transparent operating metrics, fiduciary accountability, and balanced risk-reward mechanisms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#E3F7F9]/80 border border-white flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-[#2D6C00]">Collaboration Standard</span>
                <span className="text-xs text-[#00190A] font-semibold">
                  Transparent board reporting, escrow segregation, and statutory oversight
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── PILLAR 4: BUSINESS VENTURES & ENTERPRISE DEVELOPMENT ── */}
        <div id="business-ventures" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="lg:col-span-5 order-2 lg:order-1 rounded-3xl overflow-hidden shadow-lg border border-white flex flex-col bg-white/80 backdrop-blur-xl"
          >
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src="/images/african_business_ventures.jpg"
                alt="Business Ventures & Emerging African Enterprise Incubation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-bold uppercase tracking-wider">Enterprise Growth</span>
                <span className="px-2.5 py-1 rounded-full bg-[#0A2F1B] border border-white/20 font-bold text-[10px]">Venture Incubation</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-[#00190A]">
                  Milestone-Based Enterprise Support
                </h4>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Backing promising indigenous enterprises with capital, governance structure, and market access—anchored in real cash-flow potential over short-term market noise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#E3F7F9]/80 border border-white flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-[#2D6C00]">Strategic Thesis</span>
                <span className="text-xs text-[#00190A] font-semibold">
                  Commercial merit, disciplined unit economics, and operational integrity
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: PRO_MAX_EASE }}
            className="lg:col-span-7 order-1 lg:order-2 p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A2F1B] text-white flex items-center justify-center shadow-xs">
                    <TrendingUpIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D6C00] font-bold">
                      PILLAR 04
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A] tracking-tight">
                      Business Ventures &amp; Enterprise Development
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#424842] font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                  Venture Stewardship
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#424842] leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Overview
                  </h4>
                  <p>
                    We aim to develop, partner with and selectively support promising businesses, including emerging African enterprises, based on strategic fit and commercial merit.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    What We Do
                  </h4>
                  <p>
                    Provide strategic capital, governance guidance, operational support, and commercial access to scalable African businesses.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    Why It Matters
                  </h4>
                  <p>
                    Catalyzing indigenous enterprise accelerates employment, diversifies the economy, and generates substantial commercial returns.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#00190A] mb-1">
                    How We Approach It
                  </h4>
                  <p>
                    Strict venture selection criteria, milestone-based support, commercial viability over hype, and active board-level advisory.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#def2f4]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#2D6C00] mb-2">
                  Potential Partners
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-[#00190A]">
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Growth-Stage Founders</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Business Owners Seeking Expansion Capital</span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] font-medium">Enterprise Incubators</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-between mt-6 border-t border-[#def2f4]">
              <Link
                href="/partnerships?category=venture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2F1B] text-white text-xs font-bold hover:bg-[#00190A] transition-colors shadow-xs group"
              >
                <span>Submit a Venture Proposal</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
              </Link>
              <span className="text-[11px] text-[#2D6C00] font-semibold">Enterprise Scale</span>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ─── SECTION 3: STRATEGIC EXECUTION ROADMAP (PLANNED PATHWAYS) ─── */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
          className="p-8 md:p-14 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_40px_-8px_rgba(10,47,27,0.06)] flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#def2f4]">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] self-start">
                <span className="w-2 h-2 rounded-full bg-[#2D6C00]" />
                <span className="text-[10px] uppercase font-bold tracking-wider">
                  STRATEGIC HORIZON
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] tracking-tight font-semibold">
                Strategic Execution Pathways
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424842] max-w-md">
              A disciplined phased approach designed to evaluate and de-risk commercial opportunities before capital commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#E3F7F9]/80 border border-white flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-[#2D6C00] font-mono">Phase 01</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-[#00190A] text-[10px] font-bold">Planned</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">
                  Foundation &amp; Aggregation
                </h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Securing sourcing relationships, vetting reliable suppliers, and establishing commercial partnerships in key commodity hubs.
                </p>
              </div>
              <div className="pt-3 border-t border-[#def2f4] text-xs text-[#2D6C00] font-semibold flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5" />
                <span>Supplier Due Diligence</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#E3F7F9]/80 border border-white flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-[#00190A] font-mono">Phase 02</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-[#00190A] text-[10px] font-bold">Planned</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">
                  Asset Consolidation
                </h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Evaluating tangible asset ownership opportunities, real estate parcel suitability, and selective business venture partnerships.
                </p>
              </div>
              <div className="pt-3 border-t border-[#def2f4] text-xs text-[#2D6C00] font-semibold flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5" />
                <span>Tangible Asset Screening</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#E3F7F9]/80 border border-white flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-[#00190A] font-mono">Phase 03</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-[#00190A] text-[10px] font-bold">Planned</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">
                  Regional Ecosystem Scaling
                </h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Connecting mature trade corridors, institutional syndicates, and scaling indigenous enterprises across African markets.
                </p>
              </div>
              <div className="pt-3 border-t border-[#def2f4] text-xs text-[#2D6C00] font-semibold flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5" />
                <span>Pan-African Integration</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── SECTION 4: CALL TO ACTION BANNER ─── */}
      <section className="w-full px-6 lg:px-12 pt-8 pb-20">
        <div className="max-w-[1320px] mx-auto p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-[#0A2F1B] via-[#00190A] to-[#0A2F1B] text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/15">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span>COMMERCIAL INQUIRY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to Explore Commercial Opportunities?
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              We welcome dialogue with qualified suppliers, asset owners, institutional investors, and ambitious founders seeking disciplined collaboration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#ABF67E] text-[#00190A] text-sm font-bold shadow-lg hover:bg-[#8ee459] transition-all group"
            >
              <span>Submit a Proposal</span>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Hundredfold%20Innovation%20Network,%20I%20would%20like%20to%20discuss%20a%20commercial%20opportunity.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#ABF67E]" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
