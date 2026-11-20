"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

export interface ParallaxImageFrameProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  range?: [string, string]; // default: ["-8%", "8%"]
}

export default function ParallaxImageFrame({
  children,
  className = "",
  containerClassName = "",
  range = ["-8%", "8%"],
}: ParallaxImageFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<string> = useTransform(scrollYProgress, [0, 1], range);

  if (shouldReduceMotion) {
    return (
      <div className={`relative overflow-hidden ${containerClassName}`}>
        <div className={`relative w-full h-full ${className}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden will-change-transform ${containerClassName}`}
    >
      <motion.div
        style={{
          y,
          scale: 1.16,
          willChange: "transform",
        }}
        className={`relative w-full h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
