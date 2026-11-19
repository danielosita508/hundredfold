"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRightIcon,
  XIcon,
  TargetIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// Editorial Hero Auto-Fading Slides
const ABOUT_HERO_SLIDES = [
  {
    image: "/images/pexels-artem-korolev-2159253660-38320074.jpg",
    alt: "Hundredfold Pan-African Enterprise - Redefining Partnerships",
    title: "Redefining Partnerships.",
    description:
      "An institutional African business and investment network building disciplined, generative enterprises across vital economic frontiers.",
  },
  {
    image: "/images/benjamin-child-GWe0dlVD9e0-unsplash.jpg",
    alt: "Institutional Governance & Executive Boardroom Assembly",
    title: "Governed for Generations.",
    description:
      "Embedding uncompromising statutory transparency, fiduciary accountability, and board oversight into every venture we launch or capitalize.",
  },
  {
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Strategic African Leadership & Commercial Strategy",
    title: "Africapitalism in Action.",
    description:
      "Championing private-sector enterprise to drive sustainable economic transformation, regional trade connectivity, and generational wealth.",
  },
  {
    image: "/images/charles-forerunner-3fPXt37X6UQ-unsplash.jpg",
    alt: "Enduring Enterprise Architecture & Asset Expansion",
    title: "Institutional Stewardship.",
    description:
      "Bridging the gap between ambitious African opportunity and world-class operational execution through disciplined syndicate architecture.",
  },
];

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
    image: "/images/team_daniel_evans_v3.jpg",
    bio: "Executive leader and founder guiding Hundredfold's strategic vision, commercial alliances, capital allocation, and corporate governance. Anchored in the philosophy of Africapitalism, he steers the group's overarching mandate to build disciplined African enterprise across agriculture, real estate, finance, and technology.",
    credentials: [
      "Executive Leadership & Capital Strategy",
      "Sovereign Commercial Corridor Expansion",
      "Africapitalism Investment Philosophy",
    ],
  },
  {
    name: "Nkwoboko Ramson",
    role: "Co-Founder & Executive Secretary",
    initials: "NR",
    focus: "Corporate Governance & Executive Administration",
    image: "/images/team_nkwoboko_ramson_v1.jpg",
    bio: "Executive Secretary and co-founder overseeing institutional administration, board secretarial governance, and statutory stakeholder coordination. Directs corporate operational execution and regulatory frameworks connecting Hundredfold's enterprise entities across Nigeria and West Africa.",
    credentials: [
      "Executive Secretarial Administration & Board Governance",
      "Statutory Compliance & Legal Documentation",
      "Cross-Sector Operational Coordination",
    ],
  },
  {
    name: "Ajuebor Samuel",
    role: "Co-Founder & Director of Compliance & Governance",
    initials: "AS",
    focus: "Governance, Statutory Compliance & Institutional Oversight",
    image: "/images/team_ajuebor_samuel_v1.jpg",
    bio: "Co-Founder and Director of Compliance & Governance managing statutory adherence, institutional alliances, and anti-money laundering controls. Dedicated to embedding institutional standards of transparency, SCUML anti-money laundering frameworks, and corporate accountability into every transaction.",
    credentials: [
      "Statutory AML / SCUML Compliance Rigour",
      "Corporate Governance & Fiduciary Oversight",
      "Institutional Stakeholder Coordination",
    ],
  },
  {
    name: "Egwuatu Peter",
    role: "Co-Founder & Director of Strategy & Business Development",
    initials: "EP",
    focus: "Strategy, Commercial Expansion & Asset Stewardship",
    image: "/images/team_egwuatu_peter_v2.jpg",
    bio: "Co-Founder and Director of Strategy & Business Development focusing on strategic expansion, commercial alliances, and disciplined capital allocation. Guides the group's tangible asset acquisition frameworks, enterprise underwriting, and long-term business compounding.",
    credentials: [
      "Strategic Corporate Expansion & Joint Ventures",
      "Enterprise Underwriting & Due Diligence",
      "Commercial Model Structuring & Scaling",
    ],
  },
  {
    name: "Eregare Godson",
    role: "Co-Founder & Director of Membership & Investor Relations",
    initials: "GE",
    focus: "Membership Expansion, Investor Relations & Syndicate Strategy",
    image: "/images/team_eregare_godson_v1.jpg",
    bio: "Co-Founder and Director of Membership & Investor Relations stewarding private partnership cohorts, investor engagement, and community network expansion. Coordinates vetted private syndicates, investor communications, and strategic relationship development for The Fold and Hundredfold initiatives.",
    credentials: [
      "Investor Relations & Capital Cohort Stewardship",
      "Private Syndicate & Network Growth",
      "Stakeholder Engagement & Fiduciary Communications",
    ],
  },
];

interface CorporatePillar {
  number: string;
  title: string;
  description: string;
}

const FIVE_PILLARS: CorporatePillar[] = [
  {
    number: "01",
    title: "Unity",
    description: "Collective capital and shared opportunity",
  },
  {
    number: "02",
    title: "Discipline",
    description: "Structured contributions and responsible investing",
  },
  {
    number: "03",
    title: "Governance",
    description: "Transparency, accountability, and leadership oversight",
  },
  {
    number: "04",
    title: "Strategic Investment",
    description: "Focus on productive economic sectors",
  },
  {
    number: "05",
    title: "Long-Term Wealth",
    description: "Building sustainable financial growth",
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);
  const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const ceo = LEADERSHIP_TEAM[0];
  const directors = LEADERSHIP_TEAM.slice(1);

  // Auto-fading hero carousel timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? ABOUT_HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ABOUT_HERO_SLIDES.length);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

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

      {/* ─── SECTION 1: EDITORIAL HERO BANNER (Transcorp Style Sharp Panoramic Backdrop Carousel) ─── */}
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
                src={ABOUT_HERO_SLIDES[currentSlide].image}
                alt={ABOUT_HERO_SLIDES[currentSlide].alt}
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

        {/* Hero Title Container Layered on Top (z-20, uniform bottom-anchored placement) */}
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full z-20 flex-1 flex flex-col justify-end pb-8 sm:pb-10 pt-28">
          <div className="flex flex-col items-start text-left">
            <motion.h1
              key={`about-h1-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
              className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[580px] text-white drop-shadow-md text-left"
            >
              {ABOUT_HERO_SLIDES[currentSlide].title}
            </motion.h1>

            {/* Hundredfold Brand Green Accent Divider */}
            <div className="my-5 sm:my-6 h-[2px] w-[220px] bg-[#9BE564]" />

            <motion.p
              key={`about-desc-${currentSlide}`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
              className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
            >
              {ABOUT_HERO_SLIDES[currentSlide].description}
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
              <span className="text-white/60">0{ABOUT_HERO_SLIDES.length}</span>
            </div>

            {/* Slide Progress Dash Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {ABOUT_HERO_SLIDES.map((_, idx) => (
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
              href="#story"
              className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
            >
              Explore Our Story
            </Link>

            <button
              type="button"
              onClick={() => {
                const storySec = document.getElementById("story");
                if (storySec) {
                  storySec.scrollIntoView({ behavior: "smooth" });
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

      {/* ─── STEP 2: "ABOUT US" SECTION (High-End Magazine Feature with B&W Editorial Portrait) ─── */}
      <section id="story" className="relative w-full pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20 px-6 lg:px-12 bg-white/70 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="space-y-10"
          >
            {/* Main Story & Founder Feature Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column: Heading and Narrative Paragraphs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                    <span>ABOUT US</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00190A] tracking-tight leading-[1.12]">
                    Founded for African Enterprise.
                  </h2>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-[#374138] leading-relaxed font-normal">
                  <p>
                    Hundredfold Innovation Network Ltd was established to address the structural gap between African commercial opportunity and disciplined institutional execution. While Africa possesses abundant natural resources, vibrant markets and ambitious entrepreneurs, sustainable wealth creation requires pooled resources, rigorous governance and strategic operational frameworks.
                  </p>

                  <p>
                    Hundredfold was created to bridge this divide, building resilient businesses and generative commercial platforms across agriculture, real estate, finance, and technology.
                  </p>

                  <p>
                    We are a private, member-based investment network incorporated under Nigerian law. A limited number of committed individuals pool capital and skills to invest in opportunities that would be hard to reach alone, and each cohort is deliberately capped to keep accountability strong as the network grows.
                  </p>
                </div>
              </div>

              {/* Right Column: High-End Magazine Feature with B&W Image and Executive Quote */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-[#0A2F1B] group">
                  <Image
                    src="/images/pexels-artempodrez-6584751.jpg"
                    alt="Editorial executive portrait — High-end African enterprise feature"
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-top grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />

                  {/* Dark Cinematic Vignette & Bottom Gradient for High Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-transparent pointer-events-none" />

                  {/* Executive Quote & Attribution Overlaid Directly on the Bottom of the Picture */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 flex flex-col gap-2.5 text-white">
                    <div className="text-3xl font-serif text-[#ABF67E] leading-none select-none">
                      &ldquo;
                    </div>
                    <blockquote className="font-serif text-sm sm:text-base text-white/95 italic leading-relaxed -mt-1 drop-shadow-xs">
                      Sustainable African wealth is not built on short-term speculation, but on disciplined enterprise, strategic capital allocation, and long-term ownership of productive assets.
                    </blockquote>
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                          Daniel C. Evans
                        </h4>
                        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#ABF67E] font-bold mt-0.5">
                          Founder &amp; Chief Executive Officer
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#ABF67E] flex items-center justify-center font-serif text-xs font-bold shadow-xs">
                        HIN
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Full-Width Story Continuation Below the Picture */}
            <div className="pt-4 sm:pt-6 space-y-6 w-full">
              <div className="space-y-5 text-base sm:text-lg text-[#374138] leading-relaxed">
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
                  href="/investments"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-[#2D6C00] underline underline-offset-8 decoration-2 decoration-[#2D6C00] hover:text-[#00190A] hover:decoration-[#00190A] transition-all"
                >
                  <span>Explore Our Investments</span>
                  <ArrowRightIcon className="w-4 h-4 text-[#2D6C00] group-hover:translate-x-1 group-hover:text-[#00190A] transition-all" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STEP 3: "OUR LEADERSHIP" SECTION (Heirs Holdings Style Gallery Grid) ─── */}
      <section id="leadership" className="w-full px-6 lg:px-12 pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 bg-white border-t border-black/5">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-10 sm:gap-12">

          {/* Leadership Intro Header */}
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

          {/* Executive Leadership Grid: Heirs Holdings Style (Centered CEO + 4-Column Directors Grid, Tight Gaps, Grayscale-to-Color, Centered Hover Text) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerGridVariants}
            className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 w-full"
          >
            {/* 1. Founder & CEO (Centered on Top with Rounded Corners) */}
            <div className="w-full flex justify-center">
              <div
                onClick={() => setSelectedLeader(ceo)}
                className="group relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer select-none bg-[#141815] shadow-xl border border-black/5"
              >
                {/* Background Portrait Image: Grayscale by default, full color on hover, magnifies smoothly */}
                <Image
                  src={ceo.image}
                  alt={`${ceo.name} — ${ceo.role}`}
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  priority
                />

                {/* Ambient vignette / bottom gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-35% to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Bottom Overlay: The two top lines invisible by default and reveal on hover. The two lines below removed! */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col items-center justify-end text-center z-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col items-center space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide uppercase drop-shadow-md">
                      {ceo.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-[#ABF67E] drop-shadow-sm whitespace-nowrap">
                      {ceo.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Executive Directors (4-Column Grid with rounded cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full max-w-[1240px] mx-auto">
              {directors.map((member) => (
                <div
                  key={member.name}
                  onClick={() => setSelectedLeader(member)}
                  className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden cursor-pointer select-none bg-[#141815] shadow-lg border border-black/5"
                >
                  {/* Background Portrait Image: Grayscale by default, full color on hover, magnifies smoothly */}
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  />

                  {/* Ambient vignette / bottom gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-35% to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Bottom Overlay: The two top lines invisible by default and reveal on hover. The two lines below removed! */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col items-center justify-end text-center z-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col items-center space-y-1">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide uppercase drop-shadow-md">
                        {member.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-[#ABF67E] drop-shadow-sm leading-tight max-w-[95%]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── OUR FIVE PILLARS SECTION (Centralized Top & Centralized Under) ─── */}
      <section id="pillars" className="w-full px-6 lg:px-12 py-20 lg:py-28 bg-[#0A2F1B] text-white scroll-mt-20 border-t border-white/10 relative overflow-hidden">
        <span id="values" className="sr-only" />
        {/* Subtle decorative brand glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ABF67E]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ABF67E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">

          {/* Centralized Top Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/20 border border-[#ABF67E]/30 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ABF67E]" />
              <span>Our Five Pillars</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15]">
              The pillars that define our enterprise.
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/75 leading-relaxed max-w-xl">
              Our foundational pillars guide every capital allocation, strategic partnership, and operational decision across our business.
            </p>
          </div>

          {/* Centralized Under: Interactive Numbered Accordion */}
          <div className="w-full max-w-3xl mx-auto divide-y divide-white/15 border-t border-b border-white/15">
            {FIVE_PILLARS.map((pillar, idx) => {
              const isOpen = openPillarIndex === idx;
              return (
                <div key={pillar.number} className="py-4 sm:py-5">
                  <button
                    onClick={() => setOpenPillarIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-5">
                      <span className="text-[#ABF67E] font-bold text-xs sm:text-sm shrink-0 font-mono">
                        {pillar.number}
                      </span>
                      <span className="text-base sm:text-lg lg:text-xl font-serif font-medium text-white group-hover:text-[#ABF67E] transition-colors leading-snug">
                        {pillar.title}
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
                          {pillar.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── STEP 4: LEADERSHIP BIO REVEAL MODAL (Interactive Modal Overlay) ─── */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex justify-center p-3 sm:p-5 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Content: Wide Executive Portfolio View */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: PRO_MAX_EASE }}
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-[880px] lg:max-w-[940px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 m-auto my-4 sm:my-8 border border-black/5 flex flex-col md:flex-row"
            >
              {/* Close Button Floating on Top-Right */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/5 hover:bg-black/15 text-[#00190A] transition-all cursor-pointer z-30 shadow-xs"
                aria-label="Close biography dialog"
              >
                <XIcon className="w-5 h-5" />
              </button>

              {/* Left Side: Generous Executive Portrait Image */}
              <div className="relative w-full md:w-[360px] lg:w-[400px] shrink-0 bg-[#141815] min-h-[360px] md:min-h-[500px] overflow-hidden">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Right Side: Name, Position, and Bio */}
              <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center overflow-y-auto max-h-[85vh] md:max-h-[560px]">
                <div className="space-y-3">
                  {/* Leader Name */}
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00190A] tracking-tight">
                    {selectedLeader.name}
                  </h3>

                  {/* Position Title under Name (Unwrapped) */}
                  <p className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#2D6C00]">
                    {selectedLeader.role}
                  </p>

                  <div className="w-full h-px bg-[#DEF2F4] my-3" />

                  {/* Executive Biography */}
                  <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                    {selectedLeader.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── COMMUNITY, ALLIANCES & THE FOLD COHORTS (Editorial Feature with High-End Image) ─── */}
      <section id="community" className="w-full px-6 lg:px-12 py-16 sm:py-20 lg:py-24 bg-[#E9FDFF] border-t border-[#DEF2F4] scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Left Column: Image with Glass Overlay */}
            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-[#0A2F1B] group">
              <Image
                src="/images/istockphoto-2189200243-612x612.jpg"
                alt="Leadership, Training, Community & Strategic Alliance Cohorts"
                fill
                sizes="100vw"
                quality={100}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ABF67E] font-bold">
                  Leadership &amp; Community
                </span>
                <h4 className="font-serif text-lg font-semibold text-white mt-1">
                  Collective Strength, Mentorship &amp; Governance
                </h4>
              </div>
            </div>

            {/* Right Column: Narrative & Links */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                <span>THE FOLD &amp; ALLIANCES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00190A] tracking-tight leading-[1.12]">
                Convening Forward-Thinking Leaders.
              </h2>

              <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                Through The Fold and our institutional alliances, we assemble private syndicates and ambitious business operators into structured cohorts. Every cohort provides member mentorship, financial education, and an active voice in governance.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3.5 py-1.5 rounded-lg bg-white text-[#00190A] text-xs font-semibold border border-[#DEF2F4] shadow-xs">
                  Cohort Mentorship
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white text-[#00190A] text-xs font-semibold border border-[#DEF2F4] shadow-xs">
                  Sovereign Syndicates
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white text-[#00190A] text-xs font-semibold border border-[#DEF2F4] shadow-xs">
                  Active Governance
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/the-fold"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A2F1B] text-white text-sm font-semibold hover:bg-[#00190A] transition-colors shadow-sm group"
                >
                  <span>Explore The Fold Community</span>
                  <ArrowRightIcon className="w-4 h-4 text-[#ABF67E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                <p className="text-base sm:text-lg text-[#00190A] leading-relaxed">
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
                <p className="text-base sm:text-lg text-[#00190A] leading-relaxed">
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
