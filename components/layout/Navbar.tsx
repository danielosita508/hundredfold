"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import siteConfig from "@/lib/site-config";
import { MenuIcon, XIcon, ArrowRightIcon, ShieldCheckIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-[20px] shadow-[0_6px_24px_rgba(10,47,27,0.06)] border-b border-white/60"
          : "glass-navbar"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Brand Logo & Identifier */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="p-1 rounded-full bg-white/90 border border-white/80 shadow-xs flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Hundredfold Innovation Network"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-full group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight text-[#00190A] leading-tight">
                Hundredfold
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#2D6C00] font-bold">
                Innovation Network Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (7 Core Pages from docs/content.md) */}
          <nav
            className="hidden xl:flex items-center gap-7"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[14px] transition-all py-2 relative flex items-center ${
                    isActive
                      ? "text-[#00190A] font-bold border-b-2 border-[#2D6C00]"
                      : "text-[#424842] hover:text-[#0C1E20] font-medium hover:border-b-2 hover:border-[#2D6C00]/40"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            {/* The Fold Cohort Pill Badge */}
            <Link
              href="/the-fold"
              id="nav-the-fold-badge"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#ABF67E]/30 border border-[#2D6C00]/25 text-[11px] font-bold uppercase tracking-wider text-[#2D6C00] hover:bg-[#ABF67E]/50 transition-all shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00] mr-2 inline-block animate-pulse" />
              <span>The Fold</span>
            </Link>

            {/* Primary Action: Partner With Us */}
            <Link
              href="/partnerships"
              id="nav-partner-cta"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0A2F1B] text-white text-[13px] font-semibold tracking-wide border-t border-white/20 shadow-[0_4px_16px_rgba(10,47,27,0.18)] hover:bg-[#00190A] hover:shadow-[0_6px_22px_rgba(45,108,0,0.25)] transition-all duration-200"
            >
              <span>Partner With Us</span>
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-[#0C1E20] hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6C00] min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6 text-[#00190A]" />
              ) : (
                <MenuIcon className="w-6 h-6 text-[#00190A]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[116px] bottom-0 z-40 bg-[#E9FDFF]/98 backdrop-blur-2xl border-t border-white/60 overflow-y-auto shadow-2xl p-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* Accreditation Badge */}
            <div className="p-3.5 rounded-2xl bg-white/80 border border-white shadow-xs flex items-center gap-2.5 text-xs text-[#2D6C00] font-medium">
              <ShieldCheckIcon className="w-4 h-4 shrink-0 text-[#2D6C00]" />
              <span>CAC Registered &bull; SCUML Certified &bull; Asaba, Delta State</span>
            </div>

            {/* Mobile Navigation List (7 Routes) */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#424842] px-3 pb-1">
                Navigation
              </div>
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[48px] ${
                      isActive
                        ? "bg-white text-[#00190A] font-bold border border-[#2D6C00]/30 shadow-xs"
                        : "text-[#424842] hover:bg-white/60 hover:text-[#00190A]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRightIcon className="w-4 h-4 text-[#2D6C00]" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action CTAs */}
            <div className="pt-4 border-t border-white/60 space-y-3">
              <Link
                href="/partnerships"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#0A2F1B] hover:bg-[#00190A] shadow-md min-h-[48px]"
              >
                <span>Partner With Us</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </Link>

              <Link
                href="/the-fold"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#2D6C00] bg-white border border-[#2D6C00]/30 hover:bg-[#ABF67E]/20 min-h-[48px]"
              >
                <span>The Fold — Private Community</span>
              </Link>
            </div>

            {/* Mobile Contact Strip */}
            <div className="pt-4 border-t border-white/60 text-xs text-[#424842] space-y-2.5">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                <span>Asaba, Delta State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-[#00190A]">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                <a href={`mailto:${siteConfig.contact.corporateEmail}`} className="text-[#424842] hover:text-[#2D6C00]">
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
