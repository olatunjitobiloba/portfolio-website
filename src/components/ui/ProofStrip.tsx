import React from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  context: string;
}

const STATS: StatItem[] = [
  {
    value: "5",
    label: "Deployed Systems",
    context: "Inference APIs & Products",
  },
  {
    value: "500+",
    label: "Concurrent Users Served",
    context: "Heroes Conference '26",
  },
  {
    value: "88.6%",
    label: "Model Accuracy in Production",
    context: "Loan Prediction API",
  },
];

interface ProofStripProps {
  className?: string;
}

export function ProofStrip({ className }: ProofStripProps) {
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-black/[0.08] bg-surface p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={cn(
              "flex flex-col justify-center",
              idx === 0 ? "pb-6 md:pb-0 md:pr-8" : "",
              idx === 1 ? "py-6 md:py-0 md:px-8" : "",
              idx === 2 ? "pt-6 md:pt-0 md:pl-8" : ""
            )}
          >
            <span className="font-mono text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-medium text-ink-primary">
              {stat.label}
            </span>
            <span className="mt-0.5 text-xs text-ink-secondary">
              {stat.context}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
