"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroTicker from "@/components/home/HeroTicker";
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

      {/* ─── SECTION 1: HERO (Cinematic Aerial Industrial Picture Background — Heirs Holdings Conglomerate Aesthetic) ─── */}
      <section className="relative w-full min-h-screen flex flex-col justify-end pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#0A2F1B]">

        {/* Full-bleed Aerial Industrial Photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_aerial.jpg"
            alt="Developed industrial economic zone, maritime infrastructure, and modern skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Ambient subtle movement with industrial poster */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_industrial_aerial.jpg"
          className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none opacity-30 mix-blend-overlay"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Cinematic Vignette & Gradient Overlay (Heirs Holdings Style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/70 z-[2]" />

        {/* Ambient subtle emerald glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#2D6C00]/25 rounded-full blur-[140px] pointer-events-none z-[3]" />

        {/* Content Container positioned lower-left just like Heirs Holdings */}
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 w-full z-10">

          <div className="flex flex-col items-start max-w-4xl">

            {/* Tagline / Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: PRO_MAX_EASE }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.05] drop-shadow-lg"
            >
              Redefining <br className="hidden sm:inline" />
              Partnerships.
            </motion.h1>

            {/* Strategic Pillars Horizontal Ribbon (Heirs Holdings Style: Energy | Power | Banking...) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: PRO_MAX_EASE }}
              className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm md:text-base text-white/85 font-medium tracking-wide mt-5 md:mt-7 drop-shadow-sm"
            >
              <span>Agriculture</span>
              <span className="text-white/40 font-light">|</span>
              <span>Real Estate</span>
              <span className="text-white/40 font-light">|</span>
              <span>Strategic Partnerships</span>
              <span className="text-white/40 font-light">|</span>
              <span>Emerging African Ventures</span>
            </motion.div>

            {/* Clean Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: PRO_MAX_EASE }}
              className="flex flex-wrap items-center gap-4 mt-8 pt-2"
            >
              <Link
                href="/business"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#0A2F1B] hover:bg-[#ABF67E] hover:text-[#00190A] transition-all duration-300 text-sm font-semibold tracking-wide shadow-xl group"
              >
                <span>Explore Our Business</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all duration-300 text-sm font-semibold tracking-wide shadow-xl"
              >
                <span>Partner With Us</span>
              </Link>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ─── CONTINUOUS INSTITUTIONAL MANDATE TICKER (Directly Below Hero) ─── */}
      <HeroTicker />

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

            {/* Pillar 1: Agriculture Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 lg:p-9 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-inner">
                    <SproutIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 01
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                    Agriculture
                  </h3>
                  <p className="text-sm text-[#424842] leading-relaxed mt-1.5">
                    Sourcing, processing, and trading essential agricultural commodities across high-yield African corridors.
                  </p>
                </div>

                {/* Section Showcase Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-xs">
                  <Image
                    src="/images/agri_business_showcase.jpg"
                    alt="Agriculture and agricultural commodity supply chains"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#def2f4] mt-6">
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

            {/* Pillar 2: Real Estate Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 lg:p-9 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-[#0A2F1B] text-white flex items-center justify-center shadow-inner">
                    <BuildingIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 02
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                    Real Estate
                  </h3>
                  <p className="text-sm text-[#424842] leading-relaxed mt-1.5">
                    Acquiring productive commercial land, logistics infrastructure, and tangible physical assets for long-term compounding.
                  </p>
                </div>

                {/* Section Showcase Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-xs">
                  <Image
                    src="/images/commercial_real_estate.jpg"
                    alt="Commercial real estate and productive tangible assets"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#def2f4] mt-6">
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
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 lg:p-9 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-inner">
                    <HandshakeIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 03
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                    Strategic Partnerships
                  </h3>
                  <p className="text-sm text-[#424842] leading-relaxed mt-1.5">
                    Aligning capital, operational capability, and institutional co-investment through structured joint ventures and commercial alliances.
                  </p>
                </div>

                {/* Section Showcase Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-xs">
                  <Image
                    src="/images/strategic_partnerships.jpg"
                    alt="Strategic institutional partnerships and commercial co-investment"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#def2f4] mt-6">
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

            {/* Pillar 4: Business Ventures Card */}
            <motion.div
              variants={cardScrollVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl p-8 lg:p-9 border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.14)] transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-[#0A2F1B] text-white flex items-center justify-center shadow-inner">
                    <TrendingUpIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#424842] font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                    Area 04
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                    Business Ventures
                  </h3>
                  <p className="text-sm text-[#424842] leading-relaxed mt-1.5">
                    Backing and scaling promising high-growth African enterprises with patient capital, governance support, and market access.
                  </p>
                </div>

                {/* Section Showcase Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-xs">
                  <Image
                    src="/images/african_business_ventures.jpg"
                    alt="African business ventures and scalable enterprise development"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#def2f4] mt-6">
                <Link
                  href="/business#business-ventures"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#00190A] font-bold group-hover:text-[#2D6C00] transition-colors"
                >
                  <span>Explore Pillar</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#2D6C00] font-semibold">Enterprise Scale</span>
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
