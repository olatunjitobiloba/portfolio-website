"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const liveUrl = project.links.live || project.links.demo;
  const githubUrl = project.links.github;

  return (
    <article
      className={cn(
        "group bg-white border border-black/[0.08] hover:border-black/20 transition-all duration-200 rounded-2xl p-5 flex flex-col justify-between gap-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      <div className="space-y-4">
        {/* Screenshot Thumbnail Container */}
        <div className="aspect-video rounded-xl overflow-hidden border border-black/[0.08] bg-[#EAE8E2] p-2 relative group flex items-center justify-center">
          <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain group-hover:scale-[1.03] transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-3">
          {/* Header Row: Category + Status Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
              {project.category}
            </span>
            <Badge status={project.status} />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-ink-primary group-hover:text-black flex items-center justify-between">
            <span>{project.title}</span>
            {liveUrl && (
              <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink-primary transition-colors shrink-0 ml-2" />
            )}
          </h3>

          {/* Description */}
          <p className="text-sm text-ink-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Verified Metrics Pill */}
          {project.metrics && (
            <div className="text-xs font-mono text-ink-muted bg-canvas px-2.5 py-1 rounded-md border border-black/[0.06] w-fit">
              {project.metrics}
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-ink-secondary bg-black/[0.03] px-2 py-0.5 rounded border border-black/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Outbound Link Buttons */}
      {(liveUrl || githubUrl) && (
        <div className="flex items-center gap-2 pt-3 border-t border-black/[0.04]">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-primary bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.08] transition-colors"
            >
              <span>{project.links.live ? "Live Link" : "Demo"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-ink-secondary hover:text-ink-primary bg-black/[0.02] hover:bg-black/[0.06] border border-black/[0.06] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
