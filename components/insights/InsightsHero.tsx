"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

const INSIGHTS_HERO_SLIDES = [
  {
    image: "/images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg",
    alt: "Agricultural commodity corridors and trade logistics analysis",
    title: "News & Insights",
    description:
      "Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.",
  },
  {
    image: "/images/sean-pollock-PhYq704ffdA-unsplash.jpg",
    alt: "Commercial real estate and tangible asset research",
    title: "News & Insights",
    description:
      "Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.",
  },
  {
    image: "/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg",
    alt: "Macroeconomic intelligence and strategic investment analytics",
    title: "News & Insights",
    description:
      "Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.",
  },
  {
    image: "/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
    alt: "Corporate governance and sovereign enterprise thought leadership",
    title: "News & Insights",
    description:
      "Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.",
  },
];

export default function InsightsHero() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-fading hero carousel timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % INSIGHTS_HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? INSIGHTS_HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % INSIGHTS_HERO_SLIDES.length);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      id="overview"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[580px] lg:min-h-[640px] h-[72vh] flex flex-col justify-between overflow-hidden bg-black"
    >
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
              src={INSIGHTS_HERO_SLIDES[currentSlide].image}
              alt={INSIGHTS_HERO_SLIDES[currentSlide].alt}
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
            key={`insights-h1-${currentSlide}`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
            className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[580px] text-white drop-shadow-md text-left"
          >
            {INSIGHTS_HERO_SLIDES[currentSlide].title}
          </motion.h1>

          {/* Hundredfold Brand Green Accent Divider */}
          <div className="my-5 sm:my-6 h-[2px] w-[220px] bg-[#9BE564]" />

          <motion.p
            key={`insights-desc-${currentSlide}`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
            className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
          >
            {INSIGHTS_HERO_SLIDES[currentSlide].description}
          </motion.p>
        </div>
      </div>


      {/* Bottom Hero Actions Container (z-20) */}
      <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 w-full pb-8 sm:pb-12 z-20 flex items-end justify-end">
        {/* Bottom-Right: Quick link and scroll down */}
        <div className="flex flex-col items-center gap-3">
          <Link
            href="#newsletter"
            className="rounded-full border border-white/80 bg-black/25 px-7 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-sm whitespace-nowrap"
          >
            Join Executive Briefing
          </Link>

          <button
            type="button"
            onClick={() => {
              const newsSec = document.getElementById("newsletter");
              if (newsSec) {
                newsSec.scrollIntoView({ behavior: "smooth" });
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
  );
}
