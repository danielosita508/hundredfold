"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/lib/site-config";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingIcon,
  TargetIcon,
  CrossIcon,
  UnityIcon,
  UsersIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
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
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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

  const coreValuesList = [
    {
      name: "Integrity",
      icon: ShieldCheckIcon,
      tag: "Value 01",
      description:
        "Uncompromising honesty and ethical conduct in all dealings. Total transparency, anti-corruption discipline, and adherence to statutory compliance.",
    },
    {
      name: "Purpose",
      icon: TargetIcon,
      tag: "Value 02",
      description:
        "Intentional commercial action—ensuring every capital allocation serves genuine market needs, real economic utility, and compounding long-term growth.",
    },
    {
      name: "Christ-Driven",
      icon: CrossIcon,
      tag: "Value 03",
      description:
        "Governed by servant leadership, biblical stewardship principles, ethical excellence, and faith-inspired commercial diligence.",
    },
    {
      name: "Community",
      icon: UnityIcon,
      tag: "Value 04",
      description:
        "Collective power and shared prosperity—believing greater economic outcomes are achieved together through collaborative partnerships and indigenous enterprise.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">
      {/* ─── SECTION 1: EDITORIAL HEADER & AMBIENT BACKDROPS ─── */}
      <section className="relative w-full overflow-hidden px-6 lg:px-12 pt-12 pb-20">
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#ABF67E]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#C4ECCE]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={heroFadeVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 shadow-xs backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00] animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-[#2D6C00] font-bold">
                WHO WE ARE
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={heroFadeVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#00190A] tracking-tight font-semibold leading-[1.08]"
            >
              Founded for African Enterprise.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={heroFadeVariants}
              className="text-base sm:text-lg text-[#424842] max-w-3xl leading-relaxed mt-2"
            >
              Hundredfold Innovation Network Ltd was established to address the structural gap between African commercial opportunity and disciplined institutional execution. While Africa possesses abundant natural resources, vibrant markets and ambitious entrepreneurs, sustainable wealth creation requires pooled resources, rigorous governance and strategic operational frameworks.
            </motion.p>

            {/* Sovereign & Regulatory Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={heroFadeVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6"
            >
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-white">
                <BuildingIcon className="w-5 h-5 text-[#2D6C00]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#424842] uppercase font-bold tracking-wider">
                    Sovereign Focus
                  </span>
                  <span className="text-sm font-bold text-[#00190A]">
                    Asaba, Delta State HQ
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-white">
                <ShieldCheckIcon className="w-5 h-5 text-[#2D6C00]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#424842] uppercase font-bold tracking-wider">
                    Statutory Rigour
                  </span>
                  <span className="text-sm font-bold text-[#00190A]">
                    CAC &amp; SCUML Regulated
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-md shadow-xs border border-white">
                <TargetIcon className="w-5 h-5 text-[#2D6C00]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#424842] uppercase font-bold tracking-wider">
                    Mandate Horizon
                  </span>
                  <span className="text-sm font-bold text-[#00190A]">
                    Multi-Generational Value
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: OUR STORY & NARRATIVE MATRIX ─── */}
      <section className="w-full px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Deep Institutional Narrative */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
              className="lg:col-span-6 flex flex-col gap-6 p-8 lg:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_40px_-8px_rgba(10,47,27,0.06)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-[#2D6C00]">
                  Our Genesis &amp; Footprint
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#DEF2F4] text-[#00190A] font-semibold">
                  Asaba Nexus
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#00190A] tracking-tight font-semibold">
                Bridging Opportunity and Institutional Execution
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#424842] leading-relaxed">
                <p>
                  Hundredfold Innovation Network Ltd was established to address the structural gap between African commercial opportunity and disciplined institutional execution. While Africa possesses abundant natural resources, vibrant markets and ambitious entrepreneurs, sustainable wealth creation requires pooled resources, rigorous governance and strategic operational frameworks.
                </p>
                <p>
                  Rooted with corporate headquarters in Asaba, Delta State—a focal commercial nexus along the Niger River corridor—we leverage geographic centrality and strategic commercial positioning to anchor transformative operations across agriculture, asset ownership, and scalable enterprise ventures.
                </p>
              </div>

              {/* Regional Hub Strip */}
              <div className="p-5 rounded-2xl bg-[#E3F7F9]/80 backdrop-blur-md flex flex-col gap-2 border border-white/60">
                <div className="flex items-center gap-2 text-[#00190A] font-bold text-sm">
                  <BuildingIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>Regional Headquarters: Asaba, Delta State</span>
                </div>
                <p className="text-xs text-[#424842] leading-relaxed">
                  Strategic proximity to maritime shipping routes, river basin fertile agricultural corridors, and key inter-state commercial freight junctions connecting Eastern, South-South, and Northern economic centers.
                </p>
              </div>

              {/* Verified Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] shadow-md border border-white">
                <img
                  src="/images/hero_corporate_asaba.jpg"
                  alt="Hundredfold Innovation Network Corporate Platform in Asaba"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#0A2F1B]/90 backdrop-blur-md text-white text-xs font-semibold">
                  Hundredfold Executive Base &bull; Asaba
                </div>
              </div>
            </motion.div>

            {/* Right: Vision, Mission & Fiduciary Glass Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
                className="relative p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] flex flex-col gap-4 overflow-hidden group"
              >
                <div className="absolute -right-12 -top-12 w-44 h-44 bg-[#ABF67E]/25 rounded-full blur-2xl group-hover:bg-[#ABF67E]/40 transition-colors pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase tracking-wider font-bold">
                    OUR VISION
                  </span>
                  <TargetIcon className="w-5 h-5 text-[#2D6C00]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                  To build a leading African investment and business development network that creates enduring economic value, fosters enterprise, and transforms commercial opportunities into long-term wealth.
                </h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  We envision resilient African enterprises uncoupled from cyclical volatility, fortified by institutional governance, regional integration, and sovereign asset compounding.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.08, ease: PRO_MAX_EASE }}
                className="relative p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] flex flex-col gap-4 overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#DEF2F4] text-[#00190A] text-xs uppercase tracking-wider font-bold">
                    OUR MISSION
                  </span>
                  <BuildingIcon className="w-5 h-5 text-[#2D6C00]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                  To identify, structure and scale viable commercial ventures across key African sectors through disciplined research, strategic partnerships, collective strength, and unwavering governance.
                </h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Translating patient capital into productive commercial pathways across agro-trading, asset acquisition, strategic corporate alliances, and high-impact business ventures.
                </p>
              </motion.div>

              {/* Governance & Compliance Card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.16, ease: PRO_MAX_EASE }}
                className="p-8 lg:p-10 rounded-3xl bg-[#0A2F1B] text-white shadow-xl flex flex-col gap-4 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/15 text-[#ABF67E] text-xs uppercase tracking-wider font-bold">
                    FIDUCIARY ARCHITECTURE
                  </span>
                  <ShieldCheckIcon className="w-5 h-5 text-[#ABF67E]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  SCUML Protocol, Board Governance &amp; Statutory Integrity
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Operating under strict adherence to Nigerian Corporate Affairs Commission (CAC) statutory guidelines and certified by the Special Control Unit Against Money Laundering (SCUML). Independent board oversight ensures institutional risk mitigation at every commercial phase.
                </p>
                <div className="flex items-center gap-4 pt-2 border-t border-white/10 text-xs text-[#ABF67E] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-[#ABF67E]" />
                    Zero-Tolerance Compliance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-[#ABF67E]" />
                    CAC Incorporated
                  </span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: INVESTMENT PHILOSOPHY (Africapitalism) ─── */}
      <section className="w-full px-6 lg:px-12 py-16 bg-white/50">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="max-w-3xl mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider mb-3">
              <span>OUR PHILOSOPHY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00190A] tracking-tight">
              Sound Commercial Judgment. <br />
              Disciplined Growth.
            </h2>
            <p className="text-base text-[#424842] mt-2">
              We anchor our operational thesis in Africapitalism—the belief that Africa&apos;s economic transformation is led by the private sector through long-term investments in strategic, generative sectors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={cardScrollVariants}
              className="p-7 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2D6C00]">01</span>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">Opportunity Evaluation</h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  We evaluate opportunities based on fundamental market demand, clear cash-flow pathways, and operational viability—rejecting speculative hype in favour of tangible utility.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardScrollVariants}
              className="p-7 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2D6C00]">02</span>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">Risk Assessment</h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Every venture undergoes disciplined stress-testing against market volatility, regulatory parameters, counterparty integrity, and real supply chain conditions.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardScrollVariants}
              className="p-7 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#2D6C00]">03</span>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">Long-Term Value Creation</h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  We prioritize productive, cash-generating assets and scalable ventures designed to compound value over multi-year horizons, building enduring institutional resilience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: CORE VALUES (2x2 Glass Grid) ─── */}
      <section className="w-full px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 mb-3 shadow-xs">
                <span className="text-xs uppercase tracking-wider font-bold text-[#2D6C00]">
                  OUR CORE VALUES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-semibold">
                Principles Guiding Commercial Action
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424842] max-w-md">
              Our foundational values ensure ethical alignment, resilience under macroeconomic shifts, and responsible stewardship for all stakeholders.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {coreValuesList.map((val) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.name}
                  variants={cardScrollVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.25 } }}
                  className="p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] uppercase tracking-widest text-[#424842] font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                      {val.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#def2f4] mt-6 flex items-center gap-2 text-xs font-semibold text-[#2D6C00]">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Hundredfold Foundational Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: BOARD OF DIRECTORS & EXECUTIVE LEADERSHIP (5 Verified Profiles) ─── */}
      <section className="w-full px-6 lg:px-12 py-16 lg:py-24 bg-white/40">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 mb-3 shadow-xs">
                <span className="text-xs uppercase tracking-wider font-bold text-[#2D6C00]">
                  GOVERNANCE &amp; STEWARDSHIP
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-semibold">
                Governed for Longevity
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424842] max-w-lg leading-relaxed">
              Hundredfold Innovation Network Ltd is guided by executive leadership and a Board of Directors committed to institutional standards of corporate governance, transparency, and accountability.
            </p>
          </div>

          {/* 5 Real Leadership Cards from docs/content.md */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {siteConfig.team.map((member, index) => {
              // Generate clean initials for monogram avatar
              const initials = member.name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .join("")
                .slice(0, 2);

              return (
                <motion.div
                  key={member.name}
                  variants={cardScrollVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.25 } }}
                  className={`flex flex-col rounded-3xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] overflow-hidden transition-all duration-300 ${
                    index === 3 || index === 4 ? "lg:col-span-1" : ""
                  }`}
                >
                  {/* Executive Portrait Slab with Monogram Emblem */}
                  <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-[#0A2F1B] via-[#00190A] to-[#123E25] flex flex-col items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#ABF67E_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-[#ABF67E]/40 flex items-center justify-center text-white font-serif text-3xl font-bold tracking-wider shadow-inner">
                      {initials}
                    </div>

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#ABF67E] text-[10px] uppercase font-bold tracking-wider">
                      Executive Leadership
                    </div>

                    <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] text-white/75 font-mono">
                      <span>Delta State &bull; HQ</span>
                    </div>
                  </div>

                  {/* Card Bio Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-4">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-[10px] uppercase tracking-wider font-bold mb-2">
                        {member.role}
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#00190A]">
                        {member.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#424842] mt-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#def2f4] flex items-center justify-between text-xs text-[#2D6C00] font-medium">
                      <span className="flex items-center gap-1">
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                        Executive Board
                      </span>
                      <span className="text-[#424842] font-mono text-[11px]">Asaba Hub</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 6: INSTITUTIONAL COMMITMENT & CTA BANNER ─── */}
      <section className="w-full px-6 lg:px-12 pt-8 pb-20">
        <div className="max-w-[1320px] mx-auto p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-[#0A2F1B] via-[#00190A] to-[#0A2F1B] text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/15">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span>OUR COMMITMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
              Building Enduring Value with Africa&apos;s Brightest Minds.
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Whether you are an agricultural aggregator, an institutional investor, or an enterprise founder, we invite you to explore disciplined commercial growth with Hundredfold.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#ABF67E] text-[#00190A] text-sm font-bold shadow-lg hover:bg-[#8ee459] transition-all group"
            >
              <span>Partner With Us</span>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/the-fold"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>Explore The Fold</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
