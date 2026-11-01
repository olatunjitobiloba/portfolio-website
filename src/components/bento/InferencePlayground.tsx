"use client";

import React, { useState } from "react";
import { Play, CheckCircle2, AlertCircle, RefreshCw, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function InferencePlayground() {
  const [loanAmount, setLoanAmount] = useState<number>(150000);
  const [income, setIncome] = useState<number>(65000);
  const [creditHistory, setCreditHistory] = useState<number>(1);
  const [isInferring, setIsInferring] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<{
    approved: boolean;
    confidence: number;
    latency: number;
  } | null>({
    approved: true,
    confidence: 88.6,
    latency: 38,
  });

  const handleInference = () => {
    setIsInferring(true);
    setTimeout(() => {
      // Heuristic model simulation based on loan to income ratio & credit history
      const ratio = loanAmount / (income || 1);
      const isApproved = creditHistory === 1 && ratio < 4.2;
      const baseConf = isApproved ? 85 + Math.random() * 12 : 78 + Math.random() * 15;
      const lat = Math.floor(32 + Math.random() * 20);

      setPrediction({
        approved: isApproved,
        confidence: Math.round(baseConf * 10) / 10,
        latency: lat,
      });
      setIsInferring(false);
    }, 400);
  };

  return (
    <div className="bg-canvas border border-black/[0.08] rounded-xl p-4 space-y-4 font-mono text-xs text-ink-primary">
      <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
        <div className="flex items-center gap-1.5 font-semibold text-ink-primary">
          <Cpu className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive Inference Lab</span>
        </div>
        <span className="text-[10px] text-ink-muted">RandomForestClassifier</span>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-ink-secondary">
            <span>Loan Amount</span>
            <span className="font-semibold text-ink-primary">${loanAmount.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={10000}
            max={500000}
            step={10000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-black cursor-pointer h-1.5 bg-black/10 rounded-lg appearance-none"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-ink-secondary">
            <span>Annual Income</span>
            <span className="font-semibold text-ink-primary">${income.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={20000}
            max={200000}
            step={5000}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full accent-black cursor-pointer h-1.5 bg-black/10 rounded-lg appearance-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-ink-secondary">Credit History:</span>
          <button
            type="button"
            onClick={() => setCreditHistory(creditHistory === 1 ? 0 : 1)}
            className={cn(
              "px-2 py-0.5 rounded text-[11px] font-medium border transition-colors",
              creditHistory === 1
                ? "bg-pastel-green-bg text-pastel-green-text border-pastel-green-border"
                : "bg-red-50 text-red-700 border-red-200"
            )}
          >
            {creditHistory === 1 ? "Good (1.0)" : "Poor (0.0)"}
          </button>
        </div>

        <button
          type="button"
          onClick={handleInference}
          disabled={isInferring}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink-primary text-white text-xs font-sans font-medium hover:bg-black/80 active:scale-95 transition-all shadow-sm disabled:opacity-60"
        >
          {isInferring ? (
            <>
              <RefreshCw className="w-3 h-3 animate-spin" />
              <span>Inferring...</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-white" />
              <span>Run Inference</span>
            </>
          )}
        </button>
      </div>

      {/* Result Output */}
      {prediction && (
        <div className="pt-2 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1.5">
            {prediction.approved ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600" />
            )}
            <span className="font-semibold text-ink-primary">
              Decision:{" "}
              <span className={prediction.approved ? "text-emerald-700" : "text-red-700"}>
                {prediction.approved ? "APPROVED" : "REJECTED"}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-ink-muted">
            <span>Confidence: <strong className="text-ink-secondary">{prediction.confidence}%</strong></span>
            <span>Latency: <strong className="text-ink-secondary">{prediction.latency}ms</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}
