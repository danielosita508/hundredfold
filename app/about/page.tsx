"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingIcon,
  XIcon,
  TargetIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

interface LeaderProfile {
  name: string;
  role: string;
  initials: string;
  focus: string;
  bio: string;
  credentials: string[];
  image: string;
}

const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    name: "Daniel C. Evans",
    role: "Founder & CEO",
    initials: "DE",
    focus: "Strategic Vision & Capital Allocation",
    image: "/images/team_daniel_evans.jpg",
    bio: "Executive leader and founder guiding Hundredfold's strategic vision, commercial alliances, capital allocation, and corporate governance. Anchored in the philosophy of Africapitalism, he steers the group's overarching mandate to build disciplined African enterprise across agriculture, real estate, finance, and technology.",
    credentials: [
      "Executive Leadership & Capital Strategy",
      "Sovereign Commercial Corridor Expansion",
      "Africapitalism Investment Philosophy",
    ],
  },
  {
    name: "Ramson Udoka",
    role: "Executive Director",
    initials: "RU",
    focus: "Commodity Supply Chains & Trade Operations",
    image: "/images/team_ramson_udoka.jpg",
    bio: "Commercial operations leader overseeing agricultural commodity trading pipelines, supplier networks, and operational execution. Directs supply-chain coordination connecting prime agrarian production basins with verified processing hubs and commercial off-takers across Nigeria and West Africa.",
    credentials: [
      "Agro-Commodity Aggregation & Logistics",
      "Off-Taker Contract Structuring",
      "Regional Supply Chain Risk Mitigation",
    ],
  },
  {
    name: "Egwuatu Peter",
    role: "Executive Director",
    initials: "EP",
    focus: "Investment Diligence & Asset Stewardship",
    image: "/images/team_egwuatu_peter.jpg",
    bio: "Strategic investment and enterprise development executive focusing on venture due diligence, valuation, and capital stewardship. Guides the group's tangible asset acquisition frameworks, productive real estate underwriting, and balance-sheet preservation.",
    credentials: [
      "Real Asset Valuation & Land Verification",
      "Balance-Sheet Compounding Frameworks",
      "Enterprise Underwriting & Diligence",
    ],
  },
  {
    name: "Samuel Ajuebor",
    role: "Executive Director",
    initials: "SA",
    focus: "Governance, Compliance & Statutory Oversight",
    image: "/images/team_samuel_ajuebor.jpg",
    bio: "Corporate operations and governance officer managing stakeholder coordination, institutional alliances, and statutory compliance frameworks. Dedicated to embedding institutional standards of transparency, SCUML anti-money laundering controls, and corporate accountability into every transaction.",
    credentials: [
      "Statutory AML / SCUML Compliance Rigour",
      "Corporate Governance & Fiduciary Oversight",
      "Institutional Stakeholder Coordination",
    ],
  },
  {
    name: "Godson Eregare",
    role: "Executive Director",
    initials: "GE",
    focus: "Enterprise Expansion & Syndicate Strategy",
    image: "/images/team_godson_eregare.jpg",
    bio: "Enterprise expansion and community network strategist stewarding private partnership cohorts, regional stakeholder relationships, and commercial collaboration initiatives. Coordinates vetted private syndicates and high-conviction African enterprise development.",
    credentials: [
      "Private Syndicate & Cohort Stewardship",
      "Regional Commercial Alliances",
      "Enterprise Growth Incubation",
    ],
  },
];

interface CorporateValue {
  number: string;
  title: string;
  description: string;
}

const CORPORATE_VALUES: CorporateValue[] = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Uncompromising honesty, transparent dealings, and rigorous moral accountability in every commercial transaction.",
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "High institutional standards of execution, diligence, and operational rigor across all our business pillars.",
  },
  {
    number: "03",
    title: "Enterprise & Innovation",
    description:
      "Bold commercial initiative, innovative problem-solving, and disciplined value creation across Africa's high-growth sectors.",
  },
  {
    number: "04",
    title: "Governance & Accountability",
    description:
      "Total fiduciary responsibility to our partners, statutory compliance (CAC & SCUML), and transparent board oversight.",
  },
  {
    number: "05",
    title: "Community & Stewardship",
    description:
      "Fostering shared prosperity, strategic network collaboration, and generational economic advancement across Africa.",
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);
  const [openValueIndex, setOpenValueIndex] = useState<number | null>(0);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedLeader(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
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

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">

      {/* ─── SECTION 1: EDITORIAL HERO BANNER (Heirs Holdings Style with Photographic Backdrop) ─── */}
      <section id="overview" className="relative w-full overflow-hidden min-h-[440px] lg:min-h-[500px] pt-32 lg:pt-36 pb-16 lg:pb-20 flex flex-col justify-end bg-[#0A2F1B]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/african_business_ventures.jpg"
            alt="Hundredfold Pan-African Enterprise"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Cinematic Vignette & Gradient Overlay (Heirs Holdings Style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/75 z-[1]" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight font-semibold leading-[1.08] drop-shadow-md"
            >
              Building Businesses. <br />
              Creating Lasting Value.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInVariants}
              className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed mt-2 drop-shadow-xs"
            >
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying high-impact commercial opportunities, building strategic relationships, and developing ventures with long-term potential.
            </motion.p>

            {/* Sovereign & Regulatory Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6"
            >
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md shadow-xs border border-white/20 text-white">
                <BuildingIcon className="w-5 h-5 text-[#ABF67E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#ABF67E] font-bold">
                    HQ Nexus
                  </span>
                  <span className="text-xs font-semibold">
                    Asaba, Delta State &bull; Nigeria
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md shadow-xs border border-white/20 text-white">
                <CheckCircleIcon className="w-5 h-5 text-[#ABF67E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#ABF67E] font-bold">
                    Statutory Framework
                  </span>
                  <span className="text-xs font-semibold">
                    CAC Registered &bull; SCUML Certified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STEP 2: "ABOUT US" SECTION (Executive Story with CEO Portrait & Full-Width Continuation) ─── */}
      <section id="story" className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-white/70 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="space-y-8"
          >
            {/* Main Story & Founder Feature Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Heading and Narrative Paragraphs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                    <span>ABOUT US</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00190A] tracking-tight">
                    Founded for African Enterprise.
                  </h2>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-[#374138] leading-relaxed">
                  <p>
                    Hundredfold Innovation Network Ltd was established to address the structural gap between African commercial opportunity and disciplined institutional execution. While Africa possesses abundant natural resources, vibrant markets and ambitious entrepreneurs, sustainable wealth creation requires pooled resources, rigorous governance and strategic operational frameworks.
                  </p>

                  <p>
                    Hundredfold was created to bridge this divide, building resilient businesses and generative commercial platforms across agriculture, real estate, finance, and technology.
                  </p>

                  <p>
                    We are a private, member-based investment network incorporated under Nigerian law. A limited number of committed individuals pool capital and skills to invest in opportunities that would be hard to reach alone, and each cohort is deliberately capped to keep accountability strong as the network grows.
                  </p>

                  <p>
                    We begin with agriculture, in a country that is Africa&apos;s largest food market and still cannot meet its own demand. Real estate and other productive assets follow as part of our long-term strategy. Every opportunity is reviewed by the Investment Committee and approved by the Board before any capital is committed, and no fixed return is promised.
                  </p>

                  <p>
                    Inspired by Africapitalism, we believe African enterprise can create economic prosperity and social wealth together. At the centre of the network is The Fold, our community of members, with mentorship, financial education and a voice in governance.
                  </p>
                </div>

                {/* Link CTA */}
                <div className="pt-4 border-t border-[#DEF2F4]">
                  <Link
                    href="/business"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-[#2D6C00] underline underline-offset-8 decoration-2 decoration-[#2D6C00] hover:text-[#00190A] hover:decoration-[#00190A] transition-all"
                  >
                    <span>Explore Our Commercial Scope</span>
                    <ArrowRightIcon className="w-4 h-4 text-[#2D6C00] group-hover:translate-x-1 group-hover:text-[#00190A] transition-all" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Large Portrait of Founder & CEO with Quote and Name Underneath */}
              <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-28">
                {/* Large Portrait Image */}
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-[#0A2F1B]">
                  <Image
                    src="/images/team_daniel_evans.jpg"
                    alt="Daniel C. Evans — Founder & CEO, Hundredfold Innovation Network Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Executive Quote and Name Underneath */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DEF2F4] shadow-md space-y-4">
                  <div className="text-3xl font-serif text-[#2D6C00] leading-none select-none">
                    &ldquo;
                  </div>
                  <blockquote className="font-serif text-base sm:text-lg text-[#00190A] italic leading-relaxed -mt-3">
                    Sustainable African wealth is not built on short-term speculation, but on disciplined enterprise, strategic capital allocation, and long-term ownership of productive assets.
                  </blockquote>
                  <div className="pt-3 border-t border-[#DEF2F4] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#00190A]">
                        Daniel C. Evans
                      </h4>
                      <p className="text-xs uppercase tracking-wider text-[#2D6C00] font-bold mt-0.5">
                        Founder &amp; Chief Executive Officer
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#0A2F1B] text-[#ABF67E] flex items-center justify-center font-serif text-xs font-bold shadow-xs">
                      HIN
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STEP 3: "OUR LEADERSHIP" SECTION (Intro + 5 Large Portrait Columns) ─── */}
      <section id="leadership" className="w-full px-6 lg:px-12 py-20 lg:py-28 bg-[#E9FDFF] border-t border-[#c1c8c0]/30">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-14">

          {/* Leadership Intro Header (Centered without "Governed for Longevity") */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span>OUR LEADERSHIP</span>
            </div>

            <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
              Providing strategic oversight and driving operational excellence, our leadership team upholds the principles of good governance, active stewardship, and long-term value creation. Guided by institutional standards of corporate governance, transparency, and accountability, our directors combine deep sector expertise across agriculture, real estate, finance, and technology.
            </p>
          </motion.div>

          {/* Unified Leadership Showcase: 5 Pictures with No Space Between (gap-0) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerGridVariants}
            className="w-full overflow-hidden rounded-3xl shadow-2xl border border-white/80 bg-[#0A2F1B]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 w-full">
              {LEADERSHIP_TEAM.map((member, index) => (
                <div
                  key={member.name}
                  onClick={() => setSelectedLeader(member)}
                  className={`group relative h-[480px] sm:h-[540px] lg:h-[620px] w-full overflow-hidden cursor-pointer select-none bg-[#0A2F1B] border-b border-white/10 lg:border-b-0 lg:border-r last:border-none ${
                    index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Portrait Photograph */}
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={index < 2}
                  />

                  {/* Overlay: Name, Title & Extra Writeups are INVISIBLE by default, ONLY show when hovered above */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-7 z-10">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out space-y-1.5">
                      {/* Title / Role */}
                      <p className="text-xs uppercase font-bold tracking-wider text-[#ABF67E] drop-shadow-sm">
                        {member.role}
                      </p>

                      {/* Name */}
                      <h3 className="font-serif text-2xl lg:text-2xl xl:text-3xl font-bold text-white tracking-tight drop-shadow-md leading-snug">
                        {member.name}
                      </h3>

                      {/* Extra writeup: Focus / Mandate */}
                      <p className="text-xs sm:text-sm text-white/85 leading-snug drop-shadow-sm line-clamp-2">
                        {member.focus}
                      </p>

                      {/* Extra writeup: Interactive Hint */}
                      <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#ABF67E] drop-shadow-sm">
                        <span>Click to view executive profile &amp; credentials</span>
                        <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── INTERACTIVE OUR VALUES SECTION (Redesigned with Brand Colors & Font) ─── */}
      <section id="values" className="w-full px-6 lg:px-12 py-20 lg:py-28 bg-[#0A2F1B] text-white scroll-mt-20 border-t border-white/10 relative overflow-hidden">
        {/* Subtle decorative brand glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ABF67E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Eyebrow badge & Serif Headline */}
            <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/20 border border-[#ABF67E]/30 text-[#ABF67E] text-xs uppercase font-bold tracking-wider w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ABF67E]" />
                <span>Our Values</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.12]">
                The values that define our enterprise.
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/75 leading-relaxed max-w-md">
                Our institutional commitments guide every capital allocation, commercial alliance, and operational decision across our business.
              </p>
            </div>

            {/* Right Column: Interactive Numbered Accordion (Refined Font Scale) */}
            <div className="lg:col-span-7 divide-y divide-white/15 border-t border-b border-white/15">
              {CORPORATE_VALUES.map((val, idx) => {
                const isOpen = openValueIndex === idx;
                return (
                  <div key={val.number} className="py-4 sm:py-5">
                    <button
                      onClick={() => setOpenValueIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left group transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-5">
                        <span className="text-[#ABF67E] font-bold text-xs sm:text-sm shrink-0 font-mono">
                          {val.number}
                        </span>
                        <span className="text-base sm:text-lg lg:text-xl font-serif font-medium text-white group-hover:text-[#ABF67E] transition-colors leading-snug">
                          {val.title}
                        </span>
                      </div>
                      <div className="text-[#ABF67E]/80 group-hover:text-[#ABF67E] transition-colors shrink-0">
                        {isOpen ? (
                          <span className="text-lg sm:text-xl font-light leading-none select-none">&minus;</span>
                        ) : (
                          <span className="text-lg sm:text-xl font-light leading-none select-none">&#43;</span>
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: PRO_MAX_EASE }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 pl-7 sm:pl-9 text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-2xl font-normal">
                            {val.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ─── STEP 4: LEADERSHIP BIO REVEAL MODAL (Interactive Modal Overlay) ─── */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: PRO_MAX_EASE }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-white overflow-hidden z-10 my-8"
            >
              {/* Header Banner */}
              <div className="relative h-44 sm:h-48 w-full bg-gradient-to-r from-[#00190A] via-[#0A2F1B] to-[#123E25] p-6 sm:p-8 flex items-end justify-between">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#ABF67E] overflow-hidden relative shadow-lg shrink-0">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#ABF67E] font-bold">
                      {selectedLeader.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {selectedLeader.name}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
                  aria-label="Close biography dialog"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Biography Body */}
              <div className="p-6 sm:p-10 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#2D6C00] font-bold mb-1.5">
                    Executive Portfolio &bull; {selectedLeader.focus}
                  </h4>
                  <p className="text-base sm:text-lg text-[#00190A] font-serif leading-snug">
                    {selectedLeader.focus}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#424842] font-bold">
                    Official Biography
                  </h4>
                  <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                    {selectedLeader.bio}
                  </p>
                </div>

                {/* Governance Credentials */}
                <div className="pt-4 border-t border-[#def2f4] space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-[#00190A] font-bold">
                    Key Governance Competencies
                  </h4>
                  <ul className="space-y-2">
                    {selectedLeader.credentials.map((cred) => (
                      <li key={cred} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#424842]">
                        <CheckCircleIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-[#def2f4] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#424842]">
                    Hundredfold Innovation Network Ltd
                  </span>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#0A2F1B] hover:bg-[#00190A] text-white text-xs font-semibold transition-colors"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── VISION & MISSION STATEMENT (Bottom Section) ─── */}
      <section id="vision-mission" className="w-full px-6 lg:px-12 py-16 lg:py-24 bg-white border-t border-[#c1c8c0]/25 scroll-mt-20">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-semibold">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#E9FDFF] border border-[#DEF2F4] shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6C00] text-white text-[11px] uppercase font-bold tracking-wider w-fit">
                  <span>OUR VISION</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A]">
                  Enduring Economic Value
                </h3>
                <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                  To build a leading African investment and business development network that creates enduring economic value, fosters enterprise, and transforms commercial opportunities into long-term wealth.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#E9FDFF] border border-[#DEF2F4] shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6C00] text-white text-[11px] uppercase font-bold tracking-wider w-fit">
                  <span>OUR MISSION</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A]">
                  Disciplined Scaling
                </h3>
                <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                  To identify, structure and scale viable commercial ventures across key African sectors through disciplined research, strategic partnerships, collective strength, and unwavering governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
