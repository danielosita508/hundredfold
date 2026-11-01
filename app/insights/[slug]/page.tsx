import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/markdown";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  ClockIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found — Hundredfold Innovation Network Ltd",
    };
  }

  return {
    title: `${article.title} — Hundredfold Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <article className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Ambient Radial Glows */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#ABF67E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[500px] -left-32 w-[520px] h-[520px] bg-[#C4ECCE]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* ─── Breadcrumb Navigation ─── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#424842]">
          <Link href="/" className="hover:text-[#00190A] transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-3 h-3 text-[#727972]" />
          <Link href="/insights" className="hover:text-[#00190A] transition-colors">
            News &amp; Insights
          </Link>
          <ChevronRightIcon className="w-3 h-3 text-[#727972]" />
          <span className="text-[#2D6C00] font-bold truncate max-w-[200px] sm:max-w-xs">
            {article.category}
          </span>
        </nav>

        {/* ─── Article Header Slab ─── */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ABF67E]/30 text-[#2D6C00]">
              {article.category}
            </span>
            <span className="text-xs text-[#424842] font-mono flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
              {article.readTime}
            </span>
            <span className="text-xs text-[#424842] font-mono">&bull; {article.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#00190A] tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#424842] leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author Strip */}
          <div className="flex items-center gap-4 pt-4 border-t border-[#def2f4]">
            <div className="w-12 h-12 rounded-full bg-[#0A2F1B] text-[#ABF67E] flex items-center justify-center font-bold text-sm shadow-xs">
              HN
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#00190A]">
                {article.author.name}
              </span>
              <span className="text-xs text-[#424842]">
                {article.author.role}
              </span>
            </div>
          </div>
        </header>

        {/* Cover Photo */}
        {article.coverImage && (
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border border-white">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* ─── Article Body Content ─── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_12px_40px_-8px_rgba(10,47,27,0.06)]">
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#00190A] prose-p:text-[#424842] prose-p:leading-relaxed prose-a:text-[#2D6C00] prose-strong:text-[#00190A] prose-li:text-[#424842]"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </div>

        {/* ─── Regulatory & Fiduciary Footer Note ─── */}
        <div className="p-6 rounded-2xl bg-[#DEF2F4] border border-white flex flex-col gap-2 text-xs text-[#424842]">
          <div className="flex items-center gap-2 text-[#00190A] font-bold">
            <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
            <span>Fiduciary &amp; Regulatory Standard</span>
          </div>
          <p className="leading-relaxed">
            Hundredfold Innovation Network Ltd is an African business and investment company. Editorial dispatches and research memos are provided for educational and strategic information purposes and do not constitute an offer of securities.
          </p>
        </div>

        {/* ─── Related Dispatches ─── */}
        {relatedArticles.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-[#def2f4]">
            <h3 className="font-serif text-2xl font-bold text-[#00190A]">
              Related Institutional Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#2D6C00] tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#00190A] group-hover:text-[#2D6C00] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#424842] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#def2f4] flex items-center justify-between text-xs text-[#2D6C00] font-bold">
                    <span>Read Brief</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
