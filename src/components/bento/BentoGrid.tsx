"use client";

import React from "react";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { InferencePlayground } from "@/components/bento/InferencePlayground";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
}

export function BentoGrid({ className }: BentoGridProps) {
  // Consumes data from @/data/projects with reliable fallbacks matching specification
  const loanProject = projects.find((p) => p.id === "loan-prediction-api") || {
    id: "loan-prediction-api",
    title: "Loan Prediction API",
    category: "ML Inference API & Serving",
    description:
      "Production Flask API serving Random Forest loan qualification decisions with automated data validation and complete pytest coverage.",
    status: "Live" as const,
    tags: ["Flask", "scikit-learn", "pytest", "Docker", "Render"],
    links: {
      live: "https://loan-predictor-api-91xu.onrender.com/app",
      github: "https://github.com/olatunjitobiloba",
    },
  };

  const mlopsProject = projects.find((p) => p.id === "mlops-pipeline") || {
    id: "mlops-pipeline",
    title: "MLOps Automated Pipeline",
    category: "MLOps & CI/CD",
    description:
      "Automated model evaluation and deployment pipeline with GitHub Actions, lint checks, test suites, and Docker containerization.",
    status: "Production" as const,
    metrics: "Automated CI/CD · Dockerized",
    tags: ["GitHub Actions", "Docker", "pytest", "MLOps"],
    links: {
      github: "https://github.com/olatunjitobiloba/MLOps-Pipeline",
    },
  };

  const focusPilotProject = projects.find((p) => p.id === "focuspilot") || {
    id: "focuspilot",
    title: "FocusPilot",
    category: "AI Product & Chrome Extension",
    description:
      "Focus and distraction management extension for developers and students with real-time Supabase cloud sync.",
    status: "Live" as const,
    metrics: "Real-time sync · Active user base",
    tags: ["Chrome API", "Supabase", "JavaScript"],
    links: {
      live: "https://focuspilot.vercel.app",
      github: "https://github.com/olatunjitobiloba",
    },
  };

  const fedrecProject = projects.find((p) => p.id === "fedrec") || {
    id: "fedrec",
    title: "FedRec Decentralized Recommender",
    category: "Federated Learning & Privacy ML",
    description:
      "Privacy-preserving recommendation engine research project using decentralized training across edge nodes without exposing raw user data.",
    status: "Research" as const,
    metrics: "Federated Learning · Privacy-First",
    tags: ["Python", "Federated Learning", "PyTorch", "NumPy"],
    links: {
      github:
        "https://github.com/olatunjitobiloba/FedRec-Privacy-First-Recommendation-Engine",
    },
  };

  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* =========================================================================
            CARD 1 (md:col-span-2): Loan Prediction API (FLAGSHIP / STAR SYSTEM)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 relative p-[2px] rounded-2xl overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(99,102,241,0.18)] transition-all duration-300"
        >
          {/* Animated Moving Rainbow Edge Laser Beam (Single edge traveling around the perimeter) */}
          <div
            className="absolute -inset-[150%] opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-[spin_4.5s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 275deg, #ff3366 290deg, #ff9900 305deg, #00ff88 320deg, #00d2ff 338deg, #8b5cf6 355deg, transparent 360deg)",
            }}
          />

          <article className="relative h-full w-full bg-white rounded-[14px] p-6 flex flex-col justify-between border border-black/[0.04]">
            <div className="space-y-4">
              {/* Header: Category + Star Badge + Status Badge */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                    {loanProject.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Star Project</span>
                  </span>
                </div>
                <Badge status={loanProject.status} />
              </div>

            {/* Title with Lucide ArrowUpRight */}
            <div>
              <h3 className="text-xl font-semibold text-ink-primary group-hover:text-black flex items-center gap-2">
                <a
                  href={loanProject.links.live || loanProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1.5"
                >
                  <span>{loanProject.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-ink-primary transition-colors shrink-0" />
                </a>
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mt-2">
                {loanProject.description}
              </p>
            </div>

            {/* Interactive Visual Element: Live Inference Playground */}
            <InferencePlayground />

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {loanProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Outbound Links */}
          <div className="flex items-center gap-2.5 pt-4 mt-4 border-t border-black/[0.04]">
            {loanProject.links.live && (
              <a
                href={loanProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-primary bg-black/[0.04] hover:bg-black hover:text-white border border-black/[0.08] transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Live API on Render</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {loanProject.links.github && (
              <a
                href={loanProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/git inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary hover:bg-black/[0.06] border border-black/[0.06] transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <Github className="w-3.5 h-3.5 group-hover/git:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </article>
      </motion.div>

        {/* =========================================================================
            CARD 2 (md:col-span-1): MLOps Automated Pipeline
            ========================================================================= */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-1 bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
        >
          <div className="space-y-4">
            {/* Header: Category + Status Badge */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                {mlopsProject.category}
              </span>
              <Badge status={mlopsProject.status} />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold text-ink-primary group-hover:text-black">
                {mlopsProject.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mt-2">
                {mlopsProject.description}
              </p>
            </div>

            {/* Metric */}
            <div className="font-mono text-xs text-ink-muted bg-canvas px-3 py-2 rounded-xl border border-black/[0.06]">
              <span className="text-ink-primary font-medium">
                Automated CI/CD · Dockerized
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["GitHub Actions", "Docker", "pytest", "MLOps"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Outbound Link: GitHub Repo */}
          <div className="pt-4 mt-4 border-t border-black/[0.04]">
            {mlopsProject.links.github && (
              <a
                href={mlopsProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary bg-black/[0.02] hover:bg-black/[0.06] border border-black/[0.06] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </motion.article>

        {/* =========================================================================
            CARD 3 (md:col-span-1): FocusPilot
            ========================================================================= */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-1 bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
        >
          <div className="space-y-4">
            {/* Header: Category + Status Badge */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                {focusPilotProject.category}
              </span>
              <Badge status={focusPilotProject.status} />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold text-ink-primary group-hover:text-black">
                {focusPilotProject.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mt-2">
                {focusPilotProject.description}
              </p>
            </div>

            {/* Metric */}
            <div className="font-mono text-xs text-ink-muted bg-canvas px-3 py-2 rounded-xl border border-black/[0.06]">
              <span className="text-ink-primary font-medium">
                Real-time sync · Active user base
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Chrome API", "Supabase", "JavaScript"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Outbound Links: Live Site + GitHub */}
          <div className="flex items-center gap-2 pt-4 mt-4 border-t border-black/[0.04]">
            {focusPilotProject.links.live && (
              <a
                href={focusPilotProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-primary bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.08] transition-colors"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {focusPilotProject.links.github && (
              <a
                href={focusPilotProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary bg-black/[0.02] hover:bg-black/[0.06] border border-black/[0.06] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </motion.article>

        {/* =========================================================================
            CARD 4 (md:col-span-2): FedRec Decentralized Recommender
            ========================================================================= */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
        >
          <div className="space-y-4">
            {/* Header: Category + Status Badge */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                {fedrecProject.category}
              </span>
              <Badge status={fedrecProject.status} />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-xl font-semibold text-ink-primary group-hover:text-black">
                {fedrecProject.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mt-2">
                {fedrecProject.description}
              </p>
            </div>

            {/* Metric */}
            <div className="font-mono text-xs text-ink-muted bg-canvas px-3.5 py-2.5 rounded-xl border border-black/[0.06]">
              <span className="text-ink-primary font-medium">
                Federated Learning · Privacy-First
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Python", "Federated Learning", "PyTorch", "NumPy"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Outbound Link: GitHub Repo */}
          <div className="pt-4 mt-4 border-t border-black/[0.04]">
            {fedrecProject.links.github && (
              <a
                href={fedrecProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary bg-black/[0.02] hover:bg-black/[0.06] border border-black/[0.06] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default BentoGrid;
