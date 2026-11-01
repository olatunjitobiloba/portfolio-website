"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Sparkles, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillPill {
  id: string;
  label: string;
  category: "ml" | "infra" | "backend" | "core";
}

const SKILL_ITEMS: SkillPill[] = [
  { id: "1", label: "PyTorch", category: "ml" },
  { id: "2", label: "scikit-learn", category: "ml" },
  { id: "3", label: "FastAPI", category: "backend" },
  { id: "4", label: "Flask", category: "backend" },
  { id: "5", label: "Docker", category: "infra" },
  { id: "6", label: "MLOps", category: "infra" },
  { id: "7", label: "GitHub Actions", category: "infra" },
  { id: "8", label: "Python", category: "core" },
  { id: "9", label: "pytest", category: "backend" },
  { id: "10", label: "Render", category: "infra" },
  { id: "11", label: "PostgreSQL", category: "backend" },
  { id: "12", label: "Supabase", category: "infra" },
];

export function PhysicsPills({ className }: { className?: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const container = sceneRef.current;
    const width = container.clientWidth || 700;
    const height = 280;

    // Create Engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0.9, scale: 0.001 },
    });
    engineRef.current = engine;

    // Create Canvas Renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      },
    });

    Render.run(render);

    // Create Runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Static Boundaries (Floor, Left, Right)
    const wallOptions: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      render: { visible: false },
    };

    const wallThickness = 60;
    const ground = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2 - 4,
      width * 2,
      wallThickness,
      wallOptions
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2 + 4,
      height / 2,
      wallThickness,
      height * 2,
      wallOptions
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2 - 4,
      height / 2,
      wallThickness,
      height * 2,
      wallOptions
    );

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Color definitions for pills
    const colorMap: Record<string, { bg: string; border: string }> = {
      ml: { bg: "#FFFFFF", border: "#10B981" },
      infra: { bg: "#FFFFFF", border: "#0EA5E9" },
      backend: { bg: "#FFFFFF", border: "#8B5CF6" },
      core: { bg: "#FFFFFF", border: "#111827" },
    };

    // Spawn Pill Bodies
    const pillBodies: Matter.Body[] = SKILL_ITEMS.map((item, index) => {
      const pillWidth = Math.max(90, item.label.length * 10 + 28);
      const pillHeight = 36;
      const startX = (width / (SKILL_ITEMS.length + 1)) * (index + 1) + (Math.random() * 40 - 20);
      const startY = -40 - index * 30;

      const colors = colorMap[item.category] || { bg: "#FFFFFF", border: "#000000" };

      const body = Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
        chamfer: { radius: 18 },
        restitution: 0.65,
        friction: 0.15,
        frictionAir: 0.02,
        render: {
          fillStyle: colors.bg,
          strokeStyle: "rgba(0, 0, 0, 0.12)",
          lineWidth: 1.5,
        },
      });

      // Attach metadata for custom label rendering
      (body as unknown as { labelText: string; category: string }).labelText = item.label;
      (body as unknown as { labelText: string; category: string }).category = item.category;

      return body;
    });

    Composite.add(engine.world, pillBodies);

    // Mouse control for interactivity (drag and throw pills)
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Custom Canvas Text Drawing on afterRender
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      for (const body of pillBodies) {
        const { x, y } = body.position;
        const angle = body.angle;
        const text = (body as unknown as { labelText?: string }).labelText || "";

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Subtle accent dot
        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        ctx.arc(-((text.length * 7) / 2) - 6, 0, 2.5, 0, 2 * Math.PI);
        ctx.fill();

        // Label text
        ctx.fillStyle = "#111827";
        ctx.fillText(text, 4, 0);

        ctx.restore();
      }
    });

    // Cleanup on unmount or reset
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, [resetKey]);

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl border border-black/[0.08] bg-white/70 backdrop-blur-sm overflow-hidden p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] text-xs font-mono text-ink-secondary">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-semibold text-ink-primary">Interactive Physics Stack</span>
          <span className="text-[10px] text-ink-muted hidden sm:inline">
            (Matter.js 2D Rigid Body Sandbox)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-ink-muted">Drag &amp; toss items</span>
          <button
            type="button"
            onClick={() => setResetKey((k) => k + 1)}
            title="Drop items again"
            className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-black/[0.04] hover:bg-black/[0.08] text-ink-primary transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Physics Container */}
      <div
        ref={sceneRef}
        className="w-full h-[280px] cursor-grab active:cursor-grabbing select-none"
      />
    </div>
  );
}
