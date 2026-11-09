"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import siteConfig from "@/lib/site-config";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/Icons";

// Core navigation pages positioned exactly like Heirs Holdings (5 Core Pillars)
const NAV_PAGES = [
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Our Business", href: "/business", hasDropdown: false },
  { label: "Partnerships", href: "/partnerships", hasDropdown: false },
  { label: "The Fold", href: "/the-fold", hasDropdown: false },
  { label: "Insights", href: "/insights", hasDropdown: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Track scroll position for dynamic "Before and After" morph effect (Heirs Holdings Style)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent border-b border-white/10"
        }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-6">

          {/* ─── BRAND LOGO (Top-Left, Heirs Holdings Style) ─── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div
              className={`w-10 h-10 rounded-full border p-1 flex items-center justify-center backdrop-blur-xs transition-all duration-300 ${scrolled
                  ? "bg-[#0A2F1B]/5 border-[#0A2F1B]/20 group-hover:border-[#0A2F1B]"
                  : "bg-white/10 border-white/30 group-hover:border-white"
                }`}
            >
              <Image
                src="/images/logo.png"
                alt="Hundredfold Innovation Network"
                width={36}
                height={36}
                className="w-8 h-8 object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-tight transition-colors duration-300 ${scrolled ? "text-[#0A2F1B]" : "text-white"
                  }`}
              >
                Hundredfold
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${scrolled ? "text-[#2D6C00]" : "text-[#ABF67E]"
                  }`}
              >
                Innovation Network Ltd
              </span>
            </div>
          </Link>

          {/* ─── NAVIGATION PAGES (Positioned on the Right, Heirs Holdings Style) ─── */}
          {/* Visible starting at md (768px+) so pages are never hidden on laptops/split screens */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8"
            aria-label="Main Navigation"
          >
            {NAV_PAGES.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1 text-[11px] lg:text-xs xl:text-[13px] uppercase font-semibold tracking-wider transition-all duration-200 py-1 relative ${scrolled
                      ? isActive
                        ? "text-[#2D6C00] font-bold border-b-2 border-[#2D6C00]"
                        : "text-[#1C201D] hover:text-[#2D6C00]"
                      : isActive
                        ? "text-[#ABF67E] font-bold border-b-2 border-[#ABF67E]"
                        : "text-white/90 hover:text-white"
                    }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDownIcon
                      className={`w-3 h-3 transition-colors ${scrolled ? "text-gray-400" : "text-white/60"
                        }`}
                    />
                  )}
                </Link>
              );
            })}

            {/* Search Icon (Heirs Holdings Style — Direct to Executive Enquiries) */}
            <Link
              href="/about#contact"
              aria-label="Search & Direct Enquiries"
              className={`inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ml-1 ${scrolled
                  ? "text-[#0A2F1B] hover:text-[#2D6C00] hover:bg-black/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              title="Search & Direct Enquiries"
            >
              <SearchIcon className="w-4 h-4" />
            </Link>

            {/* Partner CTA button on extra large screens */}
            <Link
              href="/partnerships"
              id="nav-partner-cta"
              className={`hidden xl:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ml-1 transition-all duration-300 ${scrolled
                  ? "bg-[#0A2F1B] text-white hover:bg-[#2D6C00]"
                  : "bg-[#ABF67E] text-[#0A2F1B] hover:bg-white"
                }`}
            >
              <span>Partner With Us</span>
            </Link>
          </nav>

          {/* ─── MOBILE HAMBURGER MENU BUTTON (< 768px) ─── */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/about#contact"
              aria-label="Search & Enquiries"
              className={`p-2 rounded-full transition-colors ${scrolled
                  ? "text-[#0A2F1B] hover:bg-black/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
            >
              <SearchIcon className="w-4 h-4" />
            </Link>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${scrolled
                  ? "text-[#0A2F1B] hover:bg-black/5"
                  : "text-white hover:bg-white/10"
                }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ─── MOBILE NAVIGATION DRAWER (< 768px) ─── */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-[#0A2F1B]/98 text-white backdrop-blur-2xl border-t border-white/10 overflow-y-auto shadow-2xl p-6">
          <div className="max-w-md mx-auto space-y-6">

            {/* Mobile Navigation List */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold tracking-widest uppercase text-white/50 px-3 pb-1">
                Navigation
              </div>

              {/* Home Link */}
              <Link
                href="/"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[48px] ${pathname === "/"
                    ? "bg-white/15 text-[#ABF67E] font-bold border border-[#ABF67E]/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <span>Home</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </Link>

              {/* Core Pages */}
              {NAV_PAGES.map((item) => {
                const isActive = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[48px] ${isActive
                        ? "bg-white/15 text-[#ABF67E] font-bold border border-[#ABF67E]/30"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
                  </Link>
                );
              })}

              {/* Direct Link to Integrated Executive Enquiries */}
              <Link
                href="/about#contact"
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors min-h-[48px]"
              >
                <span>Executive Enquiries &amp; Contact</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </Link>
            </div>

            {/* Mobile Action CTAs */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                href="/partnerships"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#0A2F1B] bg-[#ABF67E] hover:bg-white shadow-md min-h-[48px]"
              >
                <span>Partner With Us</span>
                <ArrowRightIcon className="w-4 h-4 text-[#0A2F1B]" />
              </Link>

              <Link
                href="/the-fold"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 min-h-[48px]"
              >
                <span>The Fold — Private Community</span>
              </Link>
            </div>

            {/* Mobile Contact Strip */}
            <div className="pt-4 border-t border-white/10 text-xs text-white/70 space-y-2.5">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                <span>Asaba, Delta State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-white">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                <a href={`mailto:${siteConfig.contact.corporateEmail}`} className="text-white/80 hover:text-[#ABF67E]">
                  {siteConfig.contact.corporateEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
