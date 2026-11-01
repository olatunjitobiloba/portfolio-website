import type { Metadata } from "next";
import Image from "next/image";
import {
  engineeringExperience,
  leadershipExperience,
  education,
} from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { GraduationCap, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "About | Oluwatobiloba Olatunji",
  description:
    "AI Engineer in Lagos. Engineering background, production systems experience, Covenant University education (CGPA 4.83 / 5.0), and technical skills.",
};

const processSteps = [
  "Problem Statement",
  "Baseline Model",
  "Production API",
  "Automated Tests",
  "Deployment Telemetry",
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-12">
      {/* Header */}
      <header className="space-y-4 pt-4">
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          About Me
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-primary tracking-tight leading-tight">
          I ship ML systems, test them, and{" "}
          <span className="italic">document the trade-offs.</span>
        </h1>
      </header>

      {/* Narrative Bio */}
      <section className="space-y-6" aria-label="Narrative bio">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <TiltCard tiltAmount={10} className="shrink-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-sm ring-4 ring-white">
              <Image
                src="/images/profile.jpg"
                alt="Oluwatobiloba Olatunji"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
          </TiltCard>
          <div className="prose prose-neutral max-w-none flex-1">
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              I&apos;m an AI engineer in Lagos. I take models from notebook to
              production: training and evaluating with scikit-learn, serving with
              FastAPI and Flask, testing with pytest, and deploying through
              Docker and GitHub Actions. Current focus: ML systems for fintech.
            </p>
          </div>
        </div>

        {/* Engineering Process Outline */}
        <div className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
              Delivery Process
            </span>
            <span className="text-[11px] font-mono text-ink-muted">
              End-to-End
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-ink-primary">
            {processSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-canvas border border-black/[0.06] text-ink-primary font-medium">
                  {idx + 1}. {step}
                </span>
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-ink-muted shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4" aria-labelledby="education-heading">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Academics
          </p>
          <h2
            id="education-heading"
            className="text-xl sm:text-2xl font-serif text-ink-primary tracking-tight"
          >
            Education &amp; Credentials
          </h2>
        </div>

        <div className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-ink-secondary shrink-0" />
                <h3 className="text-lg font-semibold text-ink-primary">
                  {education.degree}
                </h3>
              </div>
              <p className="text-sm text-ink-secondary">
                {education.institution}
              </p>
            </div>
            <span className="text-xs font-mono text-ink-muted sm:text-right shrink-0">
              {education.period}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-black/[0.04]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-green-bg border border-pastel-green-border text-pastel-green-text text-xs font-mono font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>CGPA: {education.cgpa}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-black/[0.08] text-ink-secondary text-xs font-medium">
              <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{education.honors}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section 1: Engineering */}
      <section className="space-y-6" aria-labelledby="eng-experience-heading">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Work History
          </p>
          <h2
            id="eng-experience-heading"
            className="text-xl sm:text-2xl font-serif text-ink-primary tracking-tight"
          >
            Engineering Experience
          </h2>
        </div>

        <div className="space-y-4">
          {engineeringExperience.map((exp) => (
            <article
              key={`${exp.role}-${exp.organization}`}
              className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-ink-primary">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-ink-muted">
                    {exp.organization}
                  </p>
                </div>
                <span className="text-xs font-mono text-ink-muted shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed">
                {exp.description}
              </p>

              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section 2: Leadership & Community */}
      <section className="space-y-6" aria-labelledby="lead-experience-heading">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Responsibility &amp; Scale
          </p>
          <h2
            id="lead-experience-heading"
            className="text-xl sm:text-2xl font-serif text-ink-primary tracking-tight"
          >
            Leadership &amp; Community
          </h2>
        </div>

        <div className="space-y-4">
          {leadershipExperience.map((exp) => (
            <article
              key={`${exp.role}-${exp.organization}`}
              className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-ink-primary">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-mono text-ink-muted">
                    {exp.organization}
                  </p>
                </div>
                <span className="text-xs font-mono text-ink-muted shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed">
                {exp.description}
              </p>

              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Static Stack & Core Technologies */}
      <section className="space-y-6" aria-labelledby="skills-heading">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            Technical Arsenal
          </p>
          <h2
            id="skills-heading"
            className="text-xl sm:text-2xl font-serif text-ink-primary tracking-tight"
          >
            Static Stack &amp; Core Tools
          </h2>
          <p className="text-xs text-ink-secondary">
            Production frameworks, libraries, and infrastructure categorized by system domain.
          </p>
        </div>

        <div className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] pb-4">
            <span className="text-xs font-mono font-semibold text-ink-primary tracking-tight">
              Production Stack (Static Reference)
            </span>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>ML &amp; Data</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Backend &amp; APIs</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Infra &amp; MLOps</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-900" />
                <span>Core</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-black/[0.06] bg-canvas/40 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: group.dotColor }}
                    />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-ink-primary font-semibold">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-ink-muted">
                    {group.skills.length} tools
                  </span>
                </div>

                <p className="text-xs text-ink-secondary leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-xs font-mono text-ink-primary hover:border-black/20 hover:scale-[1.02] transition-all"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: group.dotColor }}
                      />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
