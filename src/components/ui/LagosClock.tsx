"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function LagosClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.08] text-xs font-mono text-ink-secondary shadow-sm">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <Clock className="w-3.5 h-3.5 text-ink-muted" />
      <span>Lagos, NG</span>
      <span className="text-black/20">|</span>
      <span className="font-semibold text-ink-primary tabular-nums">
        {time || "12:00 PM"} WAT
      </span>
    </div>
  );
}
