"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useMotionTemplate,
  type HTMLMotionProps,
} from "framer-motion";

export interface Tilt3DCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // default: 6
  sheen?: boolean; // default: true
  sheenColor?: string; // radial gradient color
}

export default function Tilt3DCard({
  children,
  className = "",
  maxTilt = 6,
  sheen = true,
  sheenColor = "rgba(171, 246, 126, 0.14)",
  ...rest
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse position values for rotation (-1 to 1)
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Mouse position values for sheen (in px)
  const sheenX = useMotionValue(-100);
  const sheenY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for buttery physical feel
  const springConfig = { stiffness: 220, damping: 24, mass: 0.5 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  // Reactive motion template for sheen gradient without react re-renders
  const sheenBackground = useMotionTemplate`radial-gradient(circle 260px at ${sheenX}px ${sheenY}px, ${sheenColor}, transparent 80%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates: -0.5 (left/top) to 0.5 (right/bottom)
      const normalizedX = x / rect.width - 0.5;
      const normalizedY = y / rect.height - 0.5;

      // Invert Y for standard natural 3D tilt
      rawRotateX.set(-normalizedY * maxTilt * 2);
      rawRotateY.set(normalizedX * maxTilt * 2);

      // Track sheen coordinates
      sheenX.set(x);
      sheenY.set(y);
    },
    [maxTilt, rawRotateX, rawRotateY, sheenX, sheenY, shouldReduceMotion]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
  }, [rawRotateX, rawRotateY]);

  if (shouldReduceMotion) {
    return (
      <div className={`relative ${className}`} {...(rest as any)}>
        {children}
      </div>
    );
  }

  return (
    <div
      style={{ perspective: 1000 }}
      className="relative will-change-transform"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
        {...rest}
      >
        {children}

        {/* Subtle radial cursor sheen */}
        {sheen && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: sheenBackground,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
