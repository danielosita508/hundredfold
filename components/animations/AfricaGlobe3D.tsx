"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";
import { useReducedMotion } from "framer-motion";

export interface AfricaGlobe3DProps {
  className?: string;
  size?: number; // target render dimension (px)
  interactive?: boolean; // allow pointer drag
  autoRotateSpeed?: number; // radians per frame (default: 0.003)
}

// Key sovereign economic nodes with West Africa (Nigeria) as primary anchor
const GLOBE_MARKERS = [
  // Primary Hub: Lagos / Nigeria (6.5244° N, 3.3792° E)
  { location: [6.5244, 3.3792] as [number, number], size: 0.09, color: [0.67, 0.965, 0.494] as [number, number, number] },
  // Abuja (Federal Capital)
  { location: [9.0765, 7.3986] as [number, number], size: 0.06, color: [0.67, 0.965, 0.494] as [number, number, number] },
  // Niger Delta Agro-Basin / Port Harcourt
  { location: [4.8156, 7.0498] as [number, number], size: 0.05, color: [0.67, 0.965, 0.494] as [number, number, number] },
  // Asaba Commercial Gateway (Delta State)
  { location: [6.1982, 6.7329] as [number, number], size: 0.055, color: [0.67, 0.965, 0.494] as [number, number, number] },
  // Accra (Ghana)
  { location: [5.6037, -0.187] as [number, number], size: 0.045, color: [0.67, 0.965, 0.494] as [number, number, number] },
  // Nairobi (East Africa)
  { location: [-1.2921, 36.8219] as [number, number], size: 0.04, color: [0.67, 0.965, 0.494] as [number, number, number] },
  // Johannesburg (Southern Africa)
  { location: [-26.2041, 28.0473] as [number, number], size: 0.04, color: [0.67, 0.965, 0.494] as [number, number, number] },
];

export default function AfricaGlobe3D({
  className = "",
  size = 500,
  interactive = true,
  autoRotateSpeed = 0.003,
}: AfricaGlobe3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Rotation angles (centered on Nigeria / West Africa: theta ~ 0.15 rad, phi ~ 0 rad)
  const phiRef = useRef(0);
  const thetaRef = useRef(0.15);

  // Pointer drag tracking
  const pointerInteracting = useRef<number | null>(null);
  const pointerYInteracting = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  // Drag handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!interactive) return;
      pointerInteracting.current = e.clientX;
      pointerYInteracting.current = e.clientY;
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [interactive]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!interactive || pointerInteracting.current === null) return;
      const deltaX = e.clientX - pointerInteracting.current;
      const deltaY = pointerYInteracting.current !== null ? e.clientY - pointerYInteracting.current : 0;

      // Update angles with sensitivity factor
      phiRef.current += deltaX * 0.005;
      thetaRef.current = Math.max(-0.45, Math.min(0.45, thetaRef.current + deltaY * 0.005));

      pointerInteracting.current = e.clientX;
      pointerYInteracting.current = e.clientY;
    },
    [interactive]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!interactive) return;
      pointerInteracting.current = null;
      pointerYInteracting.current = null;
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignored if pointer capture was already released
      }
    },
    [interactive]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check WebGL availability
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebGLSupported(false);
      return;
    }

    let width = containerRef.current?.clientWidth || size;
    let height = width;
    let globeInstance: ReturnType<typeof createGlobe> | null = null;
    let rafId: number | null = null;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    try {
      globeInstance = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: height * dpr,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 1,
        diffuse: 1.25,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.039, 0.184, 0.106], // Dark forest green #0A2F1B
        markerColor: [0.67, 0.965, 0.494], // Bright neon green #ABF67E
        glowColor: [0.039, 0.184, 0.106], // Subtle emerald halo
        markers: GLOBE_MARKERS,
        scale: 1,
        offset: [0, 0],
      });

      // Frame rendering loop
      const render = () => {
        if (!globeInstance) return;

        // Auto-rotation when not dragging and motion is permitted
        if (pointerInteracting.current === null && !shouldReduceMotion) {
          phiRef.current += autoRotateSpeed;
        }

        globeInstance.update({
          phi: phiRef.current,
          theta: thetaRef.current,
        });

        if (!shouldReduceMotion) {
          rafId = requestAnimationFrame(render);
        }
      };

      render();
    } catch (err) {
      console.warn("Could not initialize 3D Africa Globe:", err);
      setWebGLSupported(false);
    }

    // Responsive container resize observer
    const handleResize = () => {
      if (!containerRef.current || !globeInstance) return;
      const newWidth = containerRef.current.clientWidth;
      if (newWidth > 0 && newWidth !== width) {
        width = newWidth;
        height = newWidth;
        globeInstance.update({
          width: width * dpr,
          height: height * dpr,
        });
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      resizeObserver.disconnect();
      if (globeInstance) {
        globeInstance.destroy();
      }
    };
  }, [autoRotateSpeed, shouldReduceMotion, size]);

  if (!webGLSupported) {
    return (
      <div
        className={`relative flex items-center justify-center rounded-full bg-[#0A2F1B] border border-[#ABF67E]/20 text-[#ABF67E] text-xs font-semibold ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="opacity-80">West Africa Commercial Corridor</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center overflow-hidden aspect-square select-none ${className}`}
      style={{ maxWidth: size, maxHeight: size }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`w-full h-full touch-none ${
          interactive ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
        }`}
        style={{ width: "100%", height: "100%" }}
      />
      {/* Subtle bottom glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-[#ABF67E]/10 blur-2xl rounded-full"
      />
    </div>
  );
}
