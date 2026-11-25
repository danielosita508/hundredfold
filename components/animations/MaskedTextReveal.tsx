"use client";

import React from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

export interface MaskedTextRevealProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  animate?: boolean;
}

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function MaskedTextReveal({
  children,
  className = "",
  containerClassName = "",
  delay = 0,
  duration = 0.75,
  once = true,
  amount = 0.05,
  as: Component = "div",
  animate = false,
}: MaskedTextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const transition: Transition = {
    duration: shouldReduceMotion ? 0.3 : duration,
    delay,
    ease: EASING,
  };

  return (
    <Component className={`overflow-hidden block ${containerClassName}`}>
      <motion.span
        initial={shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        {...(animate
          ? { animate: { y: "0%", opacity: 1 } }
          : { whileInView: { y: "0%", opacity: 1 }, viewport: { once, amount } })}
        transition={transition}
        style={{ willChange: "transform" }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </Component>
  );
}
