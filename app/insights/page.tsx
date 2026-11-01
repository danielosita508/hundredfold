import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getAllCategories } from "@/lib/markdown";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  ClockIcon,
  CheckCircleIcon,
  SproutIcon,
  BuildingIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "News & Insights — Hundredfold Innovation Network Ltd",
  description:
    "Authoritative analysis on African commodity supply chains, disciplined asset acquisition, corporate governance, and commercial dispatches from Hundredfold Innovation Network Ltd.",
};

async function InsightsContent({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const activeCategory = resolvedSearchParams.category || "";

  const allArticles = getAllArticles();
  const categories = getAllCategories();

  const filteredArticles = activeCategory
    ? allArticles.filter((a) => a.categorySlug === activeCategory)
    : allArticles;

  const featuredArticle = allArticles.find((a) => a.featured) || allArticles[0];
  const gridArticles = filteredArticles.filter((a) => a.slug !== featuredArticle?.slug);

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20] min-h-screen">
      {/* ─── AMBIENT ATMOSPHERIC RADIAL GLOWS ─── */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#ABF67E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[500px] -left-32 w-[520px] h-[520px] bg-[#C4ECCE]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-10 w-full flex flex-col gap-12 relative z-10">
        
        {/* ─── SECTION 1: TOP EDITORIAL HEADER & TICKER ─── */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#2D6C00] animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider text-[#2D6C00] font-bold">
                COMMERCIAL INTELLIGENCE DESK
              </span>
              <span className="text-xs text-[#424842] hidden md:inline">
                &bull; Macro Analysis: African Agro-Corridors &amp; Asset Compounding
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs text-[#424842] font-mono">
              <span className="text-[#00190A] font-bold">ASABA &bull; LAGOS &bull; REGIONAL HUBS</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4 pb-2">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-xs uppercase font-bold tracking-wider w-fit">
                <span>H.I.N RESEARCH &amp; INTELLIGENCE</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#00190A] tracking-tight font-semibold leading-[1.08]">
                Market Perspectives &amp; Corporate Dispatches
              </h1>
              <p className="text-base sm:text-lg text-[#424842] leading-relaxed">
                Thought leadership, macroeconomic analysis, and strategic intelligence shaping African commerce and institutional asset deployment.
              </p>
            </div>

            {/* Live Macro Pod */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-xs shrink-0">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-[#424842] tracking-wider font-bold">
                  Sovereign Focus
                </span>
                <span className="font-serif text-2xl font-bold text-[#00190A] mt-0.5">
                  5 Categories
                </span>
                <span className="text-xs text-[#2D6C00] font-semibold">
                  Agro &bull; Land &bull; Governance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: GRAND HERO EDITORIAL / LEAD COVER DOSSIER ─── */}
        {featuredArticle && (
          <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl group border border-white">
            <div className="relative w-full min-h-[440px] lg:min-h-[500px] flex items-end">
              <img
                src={featuredArticle.coverImage || "/images/agri_business_showcase.jpg"}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00190A] via-[#00190A]/60 to-transparent" />

              <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#ABF67E] text-[#00190A] text-xs font-bold uppercase tracking-wider shadow-md">
                  Lead Cover Dossier
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                  {featuredArticle.category}
                </span>
              </div>

              {/* Overlaid Frosted Card */}
              <div className="relative z-10 w-full p-6 lg:p-12">
                <div className="max-w-4xl p-6 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-2xl flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#424842]">
                    <span className="px-2.5 py-1 rounded-full bg-[#DEF2F4] text-[#00190A] font-bold uppercase">
                      {featuredArticle.category}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                      {featuredArticle.readTime}
                    </span>
                    <span>&bull;</span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <Link href={`/insights/${featuredArticle.slug}`}>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#00190A] font-bold leading-tight hover:text-[#2D6C00] transition-colors cursor-pointer">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-[#424842] line-clamp-2 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#0A2F1B] text-[#ABF67E] flex items-center justify-center font-bold text-xs shadow-xs">
                        HN
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#00190A]">
                          {featuredArticle.author.name}
                        </span>
                        <span className="text-[11px] text-[#424842]">
                          {featuredArticle.author.role}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/insights/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2F1B] text-white text-xs font-bold shadow-md hover:bg-[#00190A] transition-all group-hover:translate-x-1"
                    >
                      <span>Read Institutional Analysis</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── SECTION 3: EDITORIAL MATRIX (SIDEBAR & ARTICLES) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Sidebar Navigation */}
          <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xs flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#def2f4]">
                <h3 className="font-serif text-xl font-bold text-[#00190A]">
                  Intelligence Sectors
                </h3>
                <span className="text-xs font-mono text-[#2D6C00] font-bold">
                  {allArticles.length} Briefs
                </span>
              </div>

              <nav className="flex flex-col gap-2">
                <Link
                  href="/insights"
                  className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                    !activeCategory
                      ? "bg-[#0A2F1B] text-white font-semibold shadow-xs"
                      : "hover:bg-[#DEF2F4] text-[#424842]"
                  }`}
                >
                  <span className="text-xs font-semibold">All Published Dispatches</span>
                  <span className="text-xs font-mono">{allArticles.length}</span>
                </Link>

                {categories.map((cat) => {
                  const isActive = activeCategory === cat.slug;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/insights?category=${cat.slug}`}
                      className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#0A2F1B] text-white font-semibold shadow-xs"
                          : "hover:bg-[#DEF2F4] text-[#424842]"
                      }`}
                    >
                      <span className="text-xs font-medium">{cat.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/20">
                        {cat.count}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Editorial Quote Slab */}
            <div className="p-6 rounded-3xl bg-[#0A2F1B] text-white shadow-xl flex flex-col gap-4 relative overflow-hidden border border-white/10">
              <div className="text-[#ABF67E] font-serif text-4xl leading-none">&ldquo;</div>
              <p className="text-xs sm:text-sm text-white/80 italic -mt-2 leading-relaxed">
                Wealth preservation across African corridors demands an intentional transition from speculative volatility into hard productive domestic assets yielding resilient multi-generational dividends.
              </p>
              <div className="text-[#ABF67E] text-[10px] uppercase font-bold tracking-wider pt-2 border-t border-white/10">
                Executive Directive &bull; Asaba HQ
              </div>
            </div>
          </aside>

          {/* Main Articles Grid */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center justify-between pb-2 border-b border-[#def2f4]">
              <span className="font-serif text-2xl font-bold text-[#00190A]">
                {activeCategory
                  ? categories.find((c) => c.slug === activeCategory)?.name || "Category Briefs"
                  : "Latest Institutional Analysis"}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white text-[#424842] font-mono border border-white">
                Showing {filteredArticles.length} Articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-full h-48 rounded-2xl overflow-hidden relative shadow-inner">
                      <img
                        src={article.coverImage || "/images/commercial_real_estate.jpg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#00190A] text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#424842] font-mono">
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <span>{article.readTime}</span>
                    </div>

                    <Link href={`/insights/${article.slug}`}>
                      <h3 className="font-serif text-xl font-bold text-[#00190A] group-hover:text-[#2D6C00] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-[#424842] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#def2f4] flex items-center justify-between">
                    <span className="text-xs text-[#00190A] font-semibold">
                      {article.author.name}
                    </span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-xs uppercase tracking-wider font-bold text-[#2D6C00] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Brief</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

        {/* ─── SECTION 4: INSTITUTIONAL NEWSLETTER WIRE (FROSTED GLASS) ─── */}
        <section className="w-full relative rounded-3xl overflow-hidden p-8 lg:p-14 bg-gradient-to-br from-white/90 via-white/75 to-[#E3F7F9]/80 backdrop-blur-2xl border border-white shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <div className="p-3 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] shadow-xs">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#2D6C00] font-bold">
                THE H.I.N SOVEREIGN INTELLIGENCE WIRE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] font-semibold tracking-tight">
                Institutional Perspectives, Direct to Your Executive Terminal
              </h2>
              <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                Join fund managers, corporate leaders, and accredited asset deployers who receive our bi-weekly confidential macro analyses, transaction memos, and regulatory digests.
              </p>
            </div>

            <form className="w-full max-w-xl flex flex-col sm:flex-row gap-3 mt-2">
              <input
                type="email"
                placeholder="Enter corporate email address..."
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white border border-white text-sm text-[#00190A] placeholder-[#424842]/60 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2D6C00]/30"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold tracking-wide shadow-md hover:bg-[#00190A] transition-all shrink-0 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#424842] pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D6C00]" /> Strict Confidentiality
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D6C00]" /> NDPR Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D6C00]" /> No Speculative Marketing
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default function InsightsPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#E9FDFF] flex items-center justify-center py-24">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#2D6C00] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs uppercase tracking-wider text-[#2D6C00] font-bold">
              Loading Commercial Insights...
            </span>
          </div>
        </div>
      }
    >
      <InsightsContent searchParams={searchParams} />
    </Suspense>
  );
}
