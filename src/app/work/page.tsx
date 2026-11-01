"use client";

import React, { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Project } from "@/types";

type CategoryTab = "All" | "ML & APIs" | "Full Stack" | "Research";

const TABS: CategoryTab[] = ["All", "ML & APIs", "Full Stack", "Research"];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;

    if (activeTab === "ML & APIs") {
      return projects.filter(
        (p) =>
          p.id === "loan-prediction-api" ||
          p.id === "mlops-pipeline" ||
          p.id === "finsight-ai" ||
          p.category.includes("ML") ||
          p.category.includes("API")
      );
    }

    if (activeTab === "Full Stack") {
      return projects.filter(
        (p) =>
          p.id === "focuspilot" ||
          p.id === "finsight-ai" ||
          p.id === "heroes-conference"
      );
    }

    if (activeTab === "Research") {
      return projects.filter(
        (p) =>
          p.id === "fedrec" ||
          p.status === "Research" ||
          p.category.includes("Research") ||
          p.category.includes("Federated")
      );
    }

    return projects;
  }, [activeTab]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <header className="space-y-3 pt-4">
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Projects
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-primary tracking-tight">
          Selected Engineering Work
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
          Tested inference APIs, CI/CD model pipelines, and live products.
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          let count = projects.length;
          if (tab === "ML & APIs") {
            count = projects.filter(
              (p) =>
                p.id === "loan-prediction-api" ||
                p.id === "mlops-pipeline" ||
                p.id === "finsight-ai"
            ).length;
          } else if (tab === "Full Stack") {
            count = projects.filter(
              (p) =>
                p.id === "focuspilot" ||
                p.id === "finsight-ai" ||
                p.id === "heroes-conference"
            ).length;
          } else if (tab === "Research") {
            count = projects.filter((p) => p.id === "fedrec").length;
          }

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                isActive
                  ? "bg-ink-primary text-white font-medium shadow-sm"
                  : "bg-white text-ink-secondary hover:text-ink-primary hover:bg-surface-hover border border-black/[0.08]"
              }`}
            >
              <span>{tab}</span>
              <span
                className={`text-[11px] ${
                  isActive ? "text-white/70" : "text-ink-muted"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <section
        aria-label="Projects list"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-black/[0.08]">
          <p className="text-sm text-ink-muted font-mono">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
