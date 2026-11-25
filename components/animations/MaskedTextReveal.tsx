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
  amount = 0.1,
  as: Component = "div",
  animate = false,
}: MaskedTextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const transition: Transition = {
    duration: shouldReduceMotion ? 0.3 : duration,
    delay,
    ease: EASING,
  };

  const variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "100%",
      opacity: shouldReduceMotion ? 0 : 0.001,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition,
    },
  };

  return (
    <Component className={`overflow-hidden block ${containerClassName}`}>
      <motion.span
        initial="hidden"
        {...(animate
          ? { animate: "visible" }
          : { whileInView: "visible", viewport: { once, amount } })}
        variants={variants}
        style={{ willChange: "transform" }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </Component>
  );
}
