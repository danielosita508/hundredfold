"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroTicker from "@/components/home/HeroTicker";
import siteConfig from "@/lib/site-config";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

// Hero Auto-Fading Slides
const HERO_SLIDES = [
  {
    image: "/images/watermarked_img_12091658178589332582.jpg",
    alt: "Global African commercial partnership and investment landscape",
  },
  {
    image: "/images/pexels-artem-korolev-2159253660-38320074.jpg",
    alt: "Institutional infrastructure and strategic commercial horizons",
  },
];

// Strategic Investment Sectors conforming to Heirs Holdings panoramic strip architecture
const BUSINESS_SECTORS = [
  {
    title: "Agriculture",
    href: "/investments#agriculture",
    image: "/images/agric.jpg",
    alt: "Agriculture and agricultural commodity supply chains",
  },
  {
    title: "Real Estate",
    href: "/investments#real-estate",
    image: "/images/business-skyscraper_ZDUJ7AJIQ2.jpg",
    alt: "Commercial real estate and productive tangible assets",
  },
  {
    title: "Finance",
    href: "/investments#finance",
    image: "/images/photo-1590283603385-17ffb3a7f29f.avif",
    alt: "Financial capital stewardship and strategic investment",
  },
  {
    title: "Technology",
    href: "/investments#technology",
    image: "/images/premium_photo-1661963212517-830bbb7d76fc.avif",
    alt: "Technology infrastructure and digital enterprise solutions",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-fading hero carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">

      {/* ─── SECTION 1: HERO (Cinematic Auto-Fading Carousel with Frosted Glass & EB Garamond) ─── */}
      <section className="relative w-full min-h-screen flex flex-col justify-end pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#0A2F1B]">

        {/* Full-bleed Auto-Fading Background Slides */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].alt}
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cinematic Dark Frosted Glass Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 pointer-events-none" />

        {/* Ambient subtle vignette & directional gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60 z-10 pointer-events-none" />

        {/* Ambient emerald brand glow */}
        <div className="absolute bottom-0 left-0 w-[550px] h-[340px] bg-[#2D6C00]/25 rounded-full blur-[140px] pointer-events-none z-10" />

        {/* Hero Content Container Layered on Top (z-20) */}
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 w-full z-20">
          <div className="flex flex-col items-start max-w-4xl">

            {/* Headline in EB Garamond font-serif */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: PRO_MAX_EASE }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.05] drop-shadow-xl"
            >
              Redefining <br className="hidden sm:inline" />
              Partnerships.
            </motion.h1>

            {/* Sub-Headline Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: PRO_MAX_EASE }}
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-4xl lg:max-w-[860px] font-normal leading-relaxed mt-5 sm:mt-6 drop-shadow-md"
            >
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying high-impact commercial opportunities, building strategic relationships, and developing ventures with long-term potential.
            </motion.p>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2.5 mt-8 pt-1">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    currentSlide === idx ? "w-8 bg-[#ABF67E]" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                <span>WHO WE ARE</span>
              </div>

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
                  sizes="100vw"
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                <span>INVESTMENTS</span>
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
                href="/investments"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#2D6C00] font-bold hover:text-[#00190A] transition-colors"
              >
                <span>View Full Investment Scope</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Heirs Holdings Style 2 Up 2 Down Edge-to-Edge Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
            {BUSINESS_SECTORS.map((sector, index) => {
              const borderClasses =
                index === 0
                  ? "border-b border-white/15 md:border-r"
                  : index === 1
                  ? "border-b border-white/15"
                  : index === 2
                  ? "border-b md:border-b-0 border-white/15 md:border-r"
                  : "";

              return (
                <Link
                  key={sector.title}
                  href={sector.href}
                  className={`group relative w-full h-[400px] sm:h-[460px] lg:h-[500px] overflow-hidden bg-[#0A2F1B] flex flex-col justify-end p-8 sm:p-12 lg:p-14 ${borderClasses} cursor-pointer select-none`}
                >
                  {/* Background Photographic Image (Full Natural Colors) */}
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Base subtle vignette for mobile readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-700 sm:opacity-0" />

                  {/* Rich Emerald Green Overlay on Hover (Fades in slowly to match title slide) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00190A]/95 via-[#0A2F1B]/80 to-[#0A2F1B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />

                  {/* Sector Title (Bottom-Left, Light Sans-Serif, Title Case White - Slides slowly into picture on hover) */}
                  <div className="relative z-10 overflow-hidden">
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-white drop-shadow-lg opacity-100 sm:opacity-0 sm:translate-y-10 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-700 ease-out">
                      {sector.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
              <span>OUR APPROACH</span>
            </div>

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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#2D6C00]" />
                  <span>THE COMMUNITY</span>
                </div>

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
