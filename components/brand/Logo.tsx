import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  theme?: "dark" | "light";
}

export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
        aria-label="Hundredfold Innovation Network Mark"
      >
        <defs>
          <linearGradient id="hinGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="50%" stopColor="#1E5208" />
            <stop offset="100%" stopColor="#113304" />
          </linearGradient>
          <linearGradient id="hinGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A3D45F" />
            <stop offset="100%" stopColor="#7CB342" />
          </linearGradient>
        </defs>

        {/* Outer Shield / Institutional Base */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="10"
          fill="url(#hinGreenGrad)"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.5"
        />

        {/* Left Vertical Pillar of the 'H' */}
        <rect
          x="10"
          y="11"
          width="6.5"
          height="26"
          rx="2"
          fill="#FFFFFF"
        />

        {/* Right Vertical Pillar of the 'H' */}
        <rect
          x="31.5"
          y="11"
          width="6.5"
          height="26"
          rx="2"
          fill="#FFFFFF"
        />

        {/* Central Connecting Bar */}
        <rect
          x="14"
          y="21"
          width="20"
          height="6"
          rx="1.5"
          fill="#FFFFFF"
        />

        {/* Central Community Network Node (The Fold symbol) */}
        <circle
          cx="24"
          cy="24"
          r="4.5"
          fill="url(#hinGoldGrad)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r="1.8"
          fill="#1E5208"
        />

        {/* Upward Growth Chevrons on Pillar Tops */}
        <path
          d="M10 11L13.25 8L16.5 11"
          stroke="url(#hinGoldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.5 11L34.75 8L38 11"
          stroke="url(#hinGoldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Logo({
  className = "",
  variant = "full",
  theme = "light",
}: LogoProps) {
  const isDark = theme === "dark";

  if (variant === "mark") {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`}>
        <LogoMark className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1 transition-all duration-200 ${className}`}
      aria-label="Hundredfold Innovation Network Ltd - Home"
    >
      <LogoMark className="w-10 h-10 transition-transform duration-300 group-hover:scale-105 shadow-sm" />
      
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold tracking-tight text-lg leading-none font-heading ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            style={{ letterSpacing: "0.02em" }}
          >
            HUNDREDFOLD
          </span>
          <span
            className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded tracking-wider ${
              isDark
                ? "bg-emerald-950/80 text-emerald-300 border border-emerald-700/50"
                : "bg-emerald-100 text-[#1E5208] border border-emerald-300"
            }`}
          >
            H.I.N
          </span>
        </div>
        <span
          className={`text-[10px] uppercase font-semibold tracking-[0.16em] mt-0.5 ${
            isDark ? "text-slate-400 group-hover:text-slate-200" : "text-slate-600 group-hover:text-slate-900"
          } transition-colors duration-200`}
        >
          Innovation Network Ltd
        </span>
      </div>
    </Link>
  );
}
