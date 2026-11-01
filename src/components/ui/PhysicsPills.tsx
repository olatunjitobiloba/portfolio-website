"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";
import { RotateCcw } from "lucide-react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const [hasTriggeredDrop, setHasTriggeredDrop] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Trigger drop when the section is visibly in the user's viewport
  useEffect(() => {
    if (!containerRef.current || hasTriggeredDrop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Only trigger drop when at least 40% of the box is in view so the user visibly sees the cascade
        if (entry.isIntersecting) {
          setHasTriggeredDrop(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasTriggeredDrop]);

  // Handle "Start over" click
  const handleStartOver = useCallback(() => {
    setHasTriggeredDrop(true);
    setResetKey((k) => k + 1);
  }, []);

  // Initialize Matter.js simulation
  useEffect(() => {
    if (!sceneRef.current || !hasTriggeredDrop) return;

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

    // Create Engine with natural gravity
    const engine = Engine.create({
      gravity: { x: 0, y: 1.0, scale: 0.001 },
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

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Static Boundaries (Floor, Left, Right)
    const wallOptions: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      render: { visible: false },
    };

    const wallThickness = 80;
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

    // Color accents per category
    const dotColors: Record<string, string> = {
      ml: "#10B981",
      infra: "#0EA5E9",
      backend: "#8B5CF6",
      core: "#111827",
    };

    // Staggered cascade from above view
    const pillBodies: Matter.Body[] = SKILL_ITEMS.map((item, index) => {
      const pillWidth = Math.max(92, item.label.length * 10 + 30);
      const pillHeight = 36;
      // Stagger horizontally
      const slotX = (width / (SKILL_ITEMS.length + 1)) * (index + 1);
      const jitter = (Math.random() - 0.5) * 40;
      const startX = Math.min(width - 60, Math.max(60, slotX + jitter));
      // Stagger vertical drop height: drops visibly from the top with slight delay
      const startY = -40 - index * 36;

      const body = Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
        chamfer: { radius: 18 },
        restitution: 0.65,
        friction: 0.15,
        frictionAir: 0.012,
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: "rgba(0, 0, 0, 0.12)",
          lineWidth: 1.5,
        },
      });

      (body as unknown as { labelText: string; category: string }).labelText = item.label;
      (body as unknown as { labelText: string; category: string }).category = item.category;

      return body;
    });

    Composite.add(engine.world, pillBodies);

    // Mouse interactivity (grab and fling pills)
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

    // Canvas typography drawing
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      for (const body of pillBodies) {
        const { x, y } = body.position;
        const angle = body.angle;
        const meta = body as unknown as { labelText?: string; category?: string };
        const text = meta.labelText || "";
        const dotColor = dotColors[meta.category || "core"] || "#10B981";

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Dot indicator
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(-((text.length * 7) / 2) - 6, 0, 2.5, 0, 2 * Math.PI);
        ctx.fill();

        // Label
        ctx.fillStyle = "#111827";
        ctx.fillText(text, 4, 0);

        ctx.restore();
      }
    });

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, [hasTriggeredDrop, resetKey]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl border border-black/[0.08] bg-white/80 backdrop-blur-sm overflow-hidden p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      {/* Clean Header Bar: No "(Matter.js)" or "Live Simulation" labels, just title and "Start over" */}
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] text-xs font-mono">
        <span className="font-semibold text-ink-primary tracking-tight">
          Interactive Stack
        </span>

        <button
          type="button"
          onClick={handleStartOver}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink-primary transition-colors cursor-pointer text-xs font-mono"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Start over</span>
        </button>
      </div>

      {/* Canvas Area */}
      <div
        ref={sceneRef}
        className="w-full h-[280px] cursor-grab active:cursor-grabbing select-none relative"
      >
        {!hasTriggeredDrop && (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-ink-muted">
            <span className="bg-canvas/90 px-3.5 py-1.5 rounded-full border border-black/[0.06]">
              Scroll down to watch stack cascade
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

