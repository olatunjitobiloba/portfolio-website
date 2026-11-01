import Link from "next/link";
import { ArrowRight, Download, Briefcase, User, BookOpen } from "lucide-react";
import { RotatingHero } from "@/components/ui/RotatingHero";
import { ProofStrip } from "@/components/ui/ProofStrip";
import { BentoGrid } from "@/components/bento/BentoGrid";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-16">
      {/* Hero Section */}
      <section className="space-y-8 pt-4">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs text-ink-secondary shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <span className="font-medium text-ink-primary">AI Engineer</span>
          <span className="text-black/20">|</span>
          <span className="inline-flex items-center gap-1.5 text-pastel-green-text font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Open to AI/ML roles</span>
          </span>
        </div>

        {/* Rotating Headline */}
        <RotatingHero />

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-ink-primary text-white text-sm font-medium hover:bg-black/85 transition-colors shadow-sm"
          >
            <span>See deployed work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-black/10 bg-white text-ink-primary text-sm font-medium hover:bg-surface-hover transition-colors shadow-sm"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Proof Strip */}
      <section aria-label="Key engineering achievements">
        <ProofStrip />
      </section>

      {/* Bento Grid Section */}
      <section className="space-y-6" aria-labelledby="systems-heading">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Selected Systems
          </p>
          <h2
            id="systems-heading"
            className="text-2xl sm:text-3xl font-serif text-ink-primary tracking-tight"
          >
            Production APIs, MLOps, and Deployed AI
          </h2>
        </div>
        <BentoGrid />
      </section>

      {/* Quick Explore Section */}
      <section
        className="space-y-6 pt-4 border-t border-black/[0.08]"
        aria-labelledby="explore-heading"
      >
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Explore
          </p>
          <h2
            id="explore-heading"
            className="text-xl sm:text-2xl font-serif text-ink-primary tracking-tight"
          >
            Deep Dive Into My Work and Background
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/work"
            className="group bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-canvas border border-black/[0.06] flex items-center justify-center text-ink-primary group-hover:scale-105 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-primary text-base group-hover:text-black">
                  Full Project Gallery
                </h3>
                <p className="text-xs text-ink-secondary mt-1 leading-relaxed">
                  Browse all 6 deployed systems, research implementations, and tools with live links and metrics.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono font-medium text-ink-primary pt-4 mt-2 border-t border-black/[0.04]">
              <span>View projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          <Link
            href="/about"
            className="group bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-canvas border border-black/[0.06] flex items-center justify-center text-ink-primary group-hover:scale-105 transition-transform">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-primary text-base group-hover:text-black">
                  About &amp; Background
                </h3>
                <p className="text-xs text-ink-secondary mt-1 leading-relaxed">
                  Engineering bio, Union Bank experience, academic standing (CGPA 4.83 / 5.0), and technical stack.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono font-medium text-ink-primary pt-4 mt-2 border-t border-black/[0.04]">
              <span>Read narrative</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          <Link
            href="/reads"
            className="group bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-canvas border border-black/[0.06] flex items-center justify-center text-ink-primary group-hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-primary text-base group-hover:text-black">
                  Reading List
                </h3>
                <p className="text-xs text-ink-secondary mt-1 leading-relaxed">
                  Key notes on systems engineering, startup strategy, compounding wealth, and spiritual dominion.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono font-medium text-ink-primary pt-4 mt-2 border-t border-black/[0.04]">
              <span>Explore reads</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
