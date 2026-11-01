import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Briefcase, User, BookOpen } from "lucide-react";
import { RotatingHero } from "@/components/ui/RotatingHero";
import { ProofStrip } from "@/components/ui/ProofStrip";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { LagosClock } from "@/components/ui/LagosClock";
import { TiltCard } from "@/components/ui/TiltCard";
import { PhysicsPills } from "@/components/ui/PhysicsPills";

export default function HomePage() {
  return (
    <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-20">
      {/* Hero Section */}
      <section className="pt-4 sm:pt-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Hero Left Content */}
          <div className="flex-1 space-y-6">
            {/* Status Pills Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs text-ink-secondary shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="font-medium text-ink-primary">AI Engineer</span>
                <span className="text-black/20">|</span>
                <span className="inline-flex items-center gap-1.5 text-pastel-green-text font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  <span>Open to AI/ML roles</span>
                </span>
              </div>
              <LagosClock />
            </div>

            {/* Rotating Headline */}
            <RotatingHero />

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
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
          </div>

          {/* Hero Profile Photo with 3D Tilt */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <TiltCard tiltAmount={12} className="cursor-pointer">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-4 ring-white">
                <Image
                  src="/images/profile.jpg"
                  alt="Oluwatobiloba Olatunji"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                />
              </div>
            </TiltCard>
          </div>
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

      {/* Interactive Physics Stack Section */}
      <section className="space-y-4" aria-labelledby="physics-heading">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Interactive Stack
          </p>
          <h2
            id="physics-heading"
            className="text-2xl sm:text-3xl font-serif text-ink-primary tracking-tight"
          >
            Engineering Arsenal in Motion
          </h2>
          <p className="text-sm text-ink-secondary">
            Drag, fling, and collide the core tools and frameworks I use to build production systems.
          </p>
        </div>
        <PhysicsPills />
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
