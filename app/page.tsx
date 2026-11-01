"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/lib/site-config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  BuildingIcon,
  SproutIcon,
  HandshakeIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants conforming to UI/UX Pro Max directives (asymmetric easing, 0 CLS, GPU-accelerated)
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: PRO_MAX_EASE,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">
      
      {/* ─── SECTION 1: HERO (Stitch Glassmorphism with Framer Motion Fade-Ins) ─── */}
      <section className="relative w-full pt-8 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
        
        {/* Ambient Radial Glows (Stitch Design Signature) */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-[#ABF67E]/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-[#C4ECCE]/30 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[480px] h-[480px] bg-[#ABF67E]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          
          {/* Top Micro-Trust Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={heroFadeVariants}
            className="flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2D6C00] animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-[#00190A] font-bold">
                CAC REGISTERED &bull; SCUML CERTIFIED &bull; ASABA, DELTA STATE
              </span>
            </div>
          </motion.div>

          {/* Main Glassmorphic Hero Slab */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={heroFadeVariants}
            className="relative rounded-3xl bg-white/75 backdrop-blur-[22px] border border-white/70 shadow-[0_24px_64px_-12px_rgba(10,47,27,0.08)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-14 lg:p-16 items-center">
              
              {/* Left Column: Core Narrative */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                
                {/* Eyebrow */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={heroFadeVariants}
                  className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>{siteConfig.company.eyebrow}</span>
                </motion.div>

                {/* Headline (EB Garamond Serif) */}
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  variants={heroFadeVariants}
                  className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#00190A] tracking-tight font-semibold leading-[1.08]"
                >
                  Building Businesses. <br />
                  <span className="text-[#2D6C00]">
                    Creating Lasting Value.
                  </span>
                </motion.h1>

                {/* Sub-headline from docs/content.md */}
                <motion.p
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  variants={heroFadeVariants}
                  className="text-base sm:text-lg text-[#424842] max-w-2xl leading-relaxed font-normal"
                >
                  We identify opportunities, build strategic partnerships and develop commercial ventures that contribute to Africa&apos;s long-term economic growth.
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  variants={heroFadeVariants}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <Link
                    href="/business"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0A2F1B] text-white text-base font-semibold tracking-wide border-t border-white/20 shadow-[0_12px_28px_-6px_rgba(10,47,27,0.25)] hover:bg-[#00190A] hover:shadow-[0_16px_32px_-4px_rgba(45,108,0,0.3)] transition-all duration-300 group"
                  >
                    <span>Explore Our Business</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
                  </Link>

                  <Link
                    href="/partnerships"
                    className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/70 backdrop-blur-md text-[#00190A] text-base font-semibold border border-white shadow-xs hover:bg-white hover:text-[#2D6C00] transition-all duration-300"
                  >
                    <span>Partner With Us</span>
                  </Link>

                  <Link
                    href="/the-fold"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2D6C00] hover:text-[#00190A] transition-colors py-2 px-1"
                  >
                    <UsersIcon className="w-4 h-4 text-[#2D6C00]" />
                    <span>The Fold &rarr;</span>
                  </Link>
                </motion.div>

                {/* Verified Regulatory Assurance */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={6}
                  variants={heroFadeVariants}
                  className="flex flex-wrap items-center gap-5 pt-4 text-xs text-[#424842]"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircleIcon className="w-4 h-4 text-[#2D6C00]" />
                    CAC Incorporated
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
                    SCUML Certified
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <BuildingIcon className="w-4 h-4 text-[#2D6C00]" />
                    Asaba Headquarters
                  </span>
                </motion.div>

              </div>

              {/* Right Column: Visual Architecture */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={heroFadeVariants}
                className="lg:col-span-5 relative flex flex-col gap-5"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11] border-2 border-white bg-white group">
                  <img
                    src="/images/hero_corporate_asaba.jpg"
                    alt="Hundredfold Innovation Network Executive Headquarters"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/75 via-transparent to-transparent" />

                  {/* Floating Institutional Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00190A] shadow-xs">
                      <ShieldCheckIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                      <span>Corporate Governance</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#2D6C00] text-white text-[11px] font-bold shadow-xs">
                      Asaba Hub
                    </span>
                  </div>

                  {/* Bottom Floating Info Strip */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#2D6C00] font-bold block">
                        COMMERCIAL PLATFORM
                      </span>
                      <span className="text-sm font-bold text-[#00190A] block">
                        Disciplined Capital Stewardship
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#ABF67E]/30 text-[#2D6C00] text-xs font-bold">
                      Phase 1
                    </span>
                  </div>
                </div>

                {/* Grounded Indicator Card */}
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-xs flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[#424842] font-bold tracking-wider">
                      Private Membership Wing
                    </span>
                    <span className="font-serif text-lg text-[#00190A] font-semibold">
                      The Fold &bull; Cycle 1
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#DEF2F4] text-[#00190A] text-xs font-bold font-mono">
                    Jan 2027
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Verified Metrics Ribbon */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={heroFadeVariants}
              className="bg-[#E3F7F9]/80 backdrop-blur-md px-8 py-5 md:px-14 border-t border-white/60"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-[#00190A]">
                    CAC
                  </span>
                  <span className="text-xs text-[#424842] font-medium mt-0.5">
                    Incorporated in Nigeria
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-[#2D6C00]">
                    SCUML
                  </span>
                  <span className="text-xs text-[#424842] font-medium mt-0.5">
                    Protocol Certified
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-[#00190A]">
                    4 Pillars
                  </span>
                  <span className="text-xs text-[#424842] font-medium mt-0.5">
                    Strategic Focus Areas
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-[#2D6C00]">
                    100 Cap
                  </span>
                  <span className="text-xs text-[#424842] font-medium mt-0.5">
                    Governed Member Cohort
                  </span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 2: WHO WE ARE (Scroll In-View Animation) ─── */}
      <section className="relative w-full py-16 lg:py-24 bg-white/40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="max-w-4xl mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_40px_-8px_rgba(10,47,27,0.06)] p-8 sm:p-12 lg:p-16 text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
              A Network Built Around Opportunity.
            </h2>

            <p className="text-base sm:text-lg text-[#424842] max-w-3xl mx-auto leading-relaxed">
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold hover:bg-[#00190A] transition-colors shadow-sm"
              >
                <span>Discover Hundredfold</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: 4 BUSINESS PILLARS (Framer Motion In-View Fade-In & Stagger) ─── */}
      <section className="relative w-full py-20 lg:py-28 bg-[#E9FDFF]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          {/* Section Header with In-View Trigger */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                <span>OUR BUSINESS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
                Where We Focus
              </h2>

              <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                We deploy capital, expertise and network resources across four strategic commercial pillars.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/business"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#2D6C00] font-bold hover:text-[#00190A] transition-colors"
              >
                <span>View Full Business Scope</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 4 Bento Cards Grid: In-View Scroll Stagger with Pro-Max Easing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            
            {/* Pillar 1: Agro-Trading Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/75 backdrop-blur-xl p-8 lg:p-10 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-inner">
                    <SproutIcon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 01
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                  Agro-Trading
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  Participating in agricultural commodity trading through sourcing relationships, supply-chain coordination, buyer-supplier partnerships and commercially viable trading opportunities.
                </p>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#424842]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Sourcing relationships across agricultural production corridors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Supply-chain coordination and buyer-supplier integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Commercially disciplined trading structures and off-taker ties</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-[#def2f4] mt-6">
                <Link
                  href="/business#agro-trading"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#00190A] font-bold group-hover:text-[#2D6C00] transition-colors"
                >
                  <span>Explore Pillar</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#2D6C00] font-semibold">Commodity Chains</span>
              </div>
            </motion.div>

            {/* Pillar 2: Asset Acquisition & Ownership Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/75 backdrop-blur-xl p-8 lg:p-10 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2F1B] text-white flex items-center justify-center shadow-inner">
                    <BuildingIcon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 02
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                  Asset Acquisition &amp; Ownership
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  Exploring ownership of productive assets, including real estate, as part of our disciplined long-term commercial strategy.
                </p>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#424842]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Identification of high-utility tangible commercial assets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Commercial real estate with verifiable utility and cash-flow potential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Clean title verification, prudent valuation, and balance-sheet resilience</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-[#def2f4] mt-6">
                <Link
                  href="/business#asset-acquisition"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#00190A] font-bold group-hover:text-[#2D6C00] transition-colors"
                >
                  <span>Explore Pillar</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#2D6C00] font-semibold">Productive Capital</span>
              </div>
            </motion.div>

            {/* Pillar 3: Strategic Partnerships Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/75 backdrop-blur-xl p-8 lg:p-10 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-inner">
                    <HandshakeIcon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 03
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                  Strategic Partnerships
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  Collaborating with businesses, institutions, suppliers and investors where complementary capabilities create mutually beneficial commercial opportunities.
                </p>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#424842]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Commercial joint alliances combining capital and operational reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Aligned commercial objectives with defined corporate governance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Equitable risk-reward sharing and transparent accountability</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-[#def2f4] mt-6">
                <Link
                  href="/business#strategic-partnerships"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#00190A] font-bold group-hover:text-[#2D6C00] transition-colors"
                >
                  <span>Explore Pillar</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#2D6C00] font-semibold">Collaborative Value</span>
              </div>
            </motion.div>

            {/* Pillar 4: Business Ventures & Enterprise Development Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/75 backdrop-blur-xl p-8 lg:p-10 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2F1B] text-white flex items-center justify-center shadow-inner">
                    <TrendingUpIcon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 04
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                  Business Ventures &amp; Enterprise Development
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  Developing, partnering with and selectively supporting promising businesses, including emerging African enterprises, based on strategic fit and commercial merit.
                </p>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#424842]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Selective venture support anchored on cash flow viability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Strategic capital, operational stewardship, and commercial network access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                    <span>Milestone-based progress oversight and governance advisory</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-[#def2f4] mt-6">
                <Link
                  href="/business#business-ventures"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#00190A] font-bold group-hover:text-[#2D6C00] transition-colors"
                >
                  <span>Explore Pillar</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#2D6C00] font-semibold">Enterprise Incubation</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 4: OUR APPROACH (Scroll In-View Principles) ─── */}
      <section className="relative w-full py-20 lg:py-24 bg-white/60">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="max-w-3xl mb-14 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span>OUR APPROACH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#00190A] tracking-tight">
              Opportunity With Purpose. <br />
              Growth With Discipline.
            </h2>
            <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
              We approach business through research, sound commercial judgment, responsible decision-making and a commitment to transparent partnerships.
            </p>
          </motion.div>

          {/* 4 Guiding Principles Staggered Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {siteConfig.operatingPrinciples.map((principle, idx) => (
              <motion.div
                key={principle.name}
                variants={cardScrollVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#2D6C00]">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#00190A]">
                    {principle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#def2f4] mt-4 flex items-center gap-1.5 text-[11px] text-[#2D6C00] font-semibold">
                  <CheckCircleIcon className="w-3.5 h-3.5" />
                  <span>Operational Standard</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 5: DUAL PATHWAYS (Scroll In-View Fade-In) ─── */}
      <section className="relative w-full py-20 lg:py-28 bg-[#E9FDFF]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            
            {/* Pathway 1: The Fold */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 md:p-12 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-shadow flex flex-col justify-between overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ABF67E]/20 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#2D6C00]" />
                  <span>THE COMMUNITY</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A] tracking-tight">
                  Welcome to The Fold
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  The Fold is the private membership and community arm of Hundredfold Innovation Network Ltd. It convenes forward-thinking individuals, business leaders, and investors who share a common commitment to disciplined growth, ethical commerce, and collective economic advancement.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Strict 100 Member Cap
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Cycle 1: Jan 2027
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Governed Admissions
                  </span>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/the-fold"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold shadow-md hover:bg-[#00190A] transition-all group"
                >
                  <span>Enquire About Joining The Fold</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
                </Link>
              </div>
            </motion.div>

            {/* Pathway 2: Commercial Collaboration */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 md:p-12 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-shadow flex flex-col justify-between overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4ECCE]/30 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2F1B] text-white text-xs uppercase font-bold tracking-wider">
                  <HandshakeIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                  <span>COMMERCIAL COLLABORATION</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A] tracking-tight">
                  Let&apos;s Explore What We Can Build Together.
                </h3>

                <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                  We welcome conversations with businesses, entrepreneurs, suppliers and organisations seeking meaningful commercial collaboration across our four business pillars.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Agro-Trading &amp; Supply
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Asset &amp; Real Estate
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] text-xs font-semibold">
                    Joint Ventures
                  </span>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold shadow-md hover:bg-[#00190A] transition-all group"
                >
                  <span>Submit a Partnership Enquiry</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Hundredfold%20Innovation%20Network,%20I%20would%20like%20to%20inquire%20about%20a%20commercial%20partnership.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#2D6C00]/30 text-[#00190A] text-sm font-semibold hover:bg-[#ABF67E]/20 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
