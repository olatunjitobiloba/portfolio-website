import React from "react";
import { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function Badge({ status, className }: BadgeProps) {
  const styles: Record<ProjectStatus, { bg: string; text: string; border: string; dot: string }> = {
    Live: {
      bg: "bg-pastel-green-bg",
      text: "text-pastel-green-text",
      border: "border-pastel-green-border",
      dot: "bg-emerald-600",
    },
    Production: {
      bg: "bg-pastel-amber-bg",
      text: "text-pastel-amber-text",
      border: "border-pastel-amber-border",
      dot: "bg-amber-600",
    },
    Research: {
      bg: "bg-pastel-blue-bg",
      text: "text-pastel-blue-text",
      border: "border-pastel-blue-border",
      dot: "bg-sky-600",
    },
    Archived: {
      bg: "bg-black/5",
      text: "text-ink-secondary",
      border: "border-black/10",
      dot: "bg-neutral-400",
    },
  };

  const style = styles[status] || styles.Live;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border tracking-wide",
        style.bg,
        style.text,
        style.border,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", style.dot)} />
      {status}
    </span>
  );
}
