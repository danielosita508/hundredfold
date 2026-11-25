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

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  subItems?: NavSubItem[];
}

// Core navigation pages positioned exactly like Heirs Holdings (5 Core Pillars with Section Dropdowns)
const NAV_PAGES: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    subItems: [
      { label: "Overview", href: "/about#overview" },
      { label: "Our Story", href: "/about#story" },
      { label: "Investment Philosophy", href: "/about#philosophy" },
      { label: "Our Leadership", href: "/about#leadership" },
      { label: "Our Five Pillars", href: "/about#pillars" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
    ],
  },
  {
    label: "Investments",
    href: "/investments",
    hasDropdown: true,
    subItems: [
      { label: "Overview", href: "/investments#overview" },
      { label: "Agriculture", href: "/investments#agriculture" },
      { label: "Real Estate", href: "/investments#real-estate" },
      { label: "Finance", href: "/investments#finance" },
      { label: "Technology", href: "/investments#technology" },
    ],
  },
  { label: "The Fold", href: "/the-fold", hasDropdown: false },
  { label: "Insights", href: "/insights", hasDropdown: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHoveredNav(null);
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
      className={`fixed top-0 left-0 w-full z-50 h-[88px] transition-colors duration-300 ease-out ${
        scrolled
          ? "bg-black border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 h-full">
        <div className="flex items-center justify-between h-full pt-2 sm:pt-3 gap-4 sm:gap-6">

          {/* ─── BRAND LOGO (Top-Left, Heirs Holdings Style) ─── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
              <Image
                src="/images/logo_v2.png"
                alt="Hundredfold Innovation Network"
                width={40}
                height={40}
                quality={100}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col justify-center leading-none select-none w-fit">
              <span
                id="navbar-brand-name"
                className="font-heading text-[18px] sm:text-[22px] font-extrabold tracking-tight transition-colors duration-300 text-white uppercase block leading-none"
              >
                Hundredfold
              </span>
              <span
                id="navbar-brand-sub"
                className="text-[8px] sm:text-[9.8px] uppercase tracking-[0.15em] font-bold transition-colors duration-300 text-white block leading-none mt-1 -mr-[0.15em]"
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
              const isHovered = hoveredNav === item.label;

              return (
                <div
                  key={item.href}
                  className="relative group py-2"
                  onMouseEnter={() => item.hasDropdown && setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-[11px] lg:text-xs xl:text-[13px] uppercase font-semibold tracking-wider transition-all duration-200 py-1 relative ${
                      isActive
                        ? "text-[#ABF67E] font-bold border-b-2 border-[#ABF67E]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isHovered ? "rotate-180" : ""
                        } text-white/70`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Card (Heirs Holdings Style with Pure White Card & Clean Section Links) */}
                  {item.hasDropdown && item.subItems && (
                    <div
                      className={`absolute top-full left-0 pt-2 min-w-[210px] transition-all duration-200 z-50 ${
                        isHovered
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-gray-100 py-3 overflow-hidden flex flex-col">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setHoveredNav(null)}
                            className="px-6 py-2.5 text-sm font-medium text-[#0A2F1B] hover:text-[#2D6C00] hover:bg-[#E9FDFF]/60 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Search Icon (Heirs Holdings Style — Direct to Executive Enquiries) */}
            <Link
              href="/about#contact"
              aria-label="Search & Direct Enquiries"
              className="inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ml-1 text-white/80 hover:text-white hover:bg-white/10"
              title="Search & Direct Enquiries"
            >
              <SearchIcon className="w-4 h-4" />
            </Link>

            {/* Partner CTA button on extra large screens */}
            <Link
              href="/the-fold#join"
              id="nav-partner-cta"
              className="hidden xl:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ml-1 transition-all duration-300 bg-[#ABF67E] text-[#0A2F1B] hover:bg-white"
            >
              <span>Partner With Us</span>
            </Link>
          </nav>

          {/* ─── MOBILE HAMBURGER MENU BUTTON (< 768px) ─── */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/about#contact"
              aria-label="Search & Enquiries"
              className="p-2 rounded-full transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              <SearchIcon className="w-4 h-4" />
            </Link>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors text-white hover:bg-white/10"
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
        <div className="md:hidden fixed inset-x-0 top-[88px] bottom-0 z-40 bg-[#0A2F1B]/98 text-white backdrop-blur-2xl border-t border-white/10 overflow-y-auto shadow-2xl p-6">
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
                  <div key={item.href} className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[48px] ${isActive
                          ? "bg-white/15 text-[#ABF67E] font-bold border border-[#ABF67E]/30"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
                    </Link>

                    {item.hasDropdown && item.subItems && (
                      <div className="pl-6 pr-2 py-1 space-y-1 border-l-2 border-[#ABF67E]/30 ml-4">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs font-medium text-white/70 hover:text-[#ABF67E] py-1.5 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
                href="/the-fold#join"
                onClick={() => setMobileMenuOpen(false)}
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
