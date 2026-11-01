# Light-Theme Next.js 15 AI Engineer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio into a production-grade Next.js 15 (App Router + TypeScript + Tailwind CSS) application featuring a warm-monochrome light theme (`#FBFBFA`), zero emojis (replaced with Lucide SVG icons), a 21st.dev-inspired asymmetrical Bento Grid, and a Raycast-style `cmdk` command palette.

**Architecture:** Next.js App Router with React Server and Client Components. Modular component architecture with centralized typed data models in `src/data/`. Light-theme design tokens configured in Tailwind and `globals.css`.

**Tech Stack:** Next.js 15+, React 19, TypeScript, Tailwind CSS, `lucide-react`, `cmdk`, `clsx`, `tailwind-merge`.

## Global Constraints

- **Canvas Background:** `#FBFBFA`
- **Surface Cards:** `#FFFFFF` with hairline border `rgba(0,0,0,0.08)`
- **Text:** Headings off-black `#111111`, body `#666666`
- **Icons:** 100% vector SVG via `lucide-react`; zero emoji characters across markup, copy, or UI
- **Academic Record:** Covenant University, B.Eng. Computer Engineering (CGPA 4.83 / 5.0, expected 2028)
- **Flagship Projects:** Loan Prediction API (Flask/Render, 88.6% accuracy), MLOps Automated Pipeline, FocusPilot, FedRec, FinSight AI, Heroes Conference '26
- **CV Filename:** `Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf`

---

### Task 1: Initialize Next.js 15 Project & Tooling

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `src/lib/utils.ts`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `cn(...inputs: ClassValue[]): string` in `src/lib/utils.ts`

- [ ] **Step 1: Create `package.json` with Next.js 15, React, Tailwind, Lucide, and cmdk**

```json
{
  "name": "portfolio-website",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "lucide-react": "^0.475.0",
    "next": "^15.1.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@types/node": "^22.13.4",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3"
  }
}
```

- [ ] **Step 2: Run `npm install`**

Run: `npm install`
Expected: Dependencies installed cleanly, `node_modules` and `package-lock.json` generated.

- [ ] **Step 3: Create `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, and `tailwind.config.ts`**

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

`next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

`postcss.config.mjs`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FBFBFA",
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F5F4F0",
        },
        border: {
          subtle: "rgba(0, 0, 0, 0.08)",
          focus: "rgba(0, 0, 0, 0.20)",
        },
        ink: {
          primary: "#111111",
          secondary: "#666666",
          muted: "#888888",
        },
        pastel: {
          green: {
            bg: "#EDF3EC",
            text: "#24542B",
            border: "rgba(36, 84, 43, 0.15)",
          },
          blue: {
            bg: "#EBF3FA",
            text: "#1A4B75",
            border: "rgba(26, 75, 117, 0.15)",
          },
          amber: {
            bg: "#FBF3DB",
            text: "#785007",
            border: "rgba(120, 80, 7, 0.15)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Create `src/lib/utils.ts`**

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 5: Verify build configuration and commit**

Run: `npm run typecheck`
Commit:
```bash
git add package.json tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs src/lib/utils.ts .gitignore
git commit -m "chore: scaffold Next.js 15 with TypeScript and Tailwind CSS"
```

---

### Task 2: Data Models & Static Assets Migration

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/reads.ts`
- Move: `images/` &rarr; `public/images/`
- Move: `reads/` &rarr; `public/reads/`
- Move: `Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf` &rarr; `public/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf`

**Interfaces:**
- Produces: `Project`, `ExperienceItem`, `SkillCategory`, `Book` interfaces in `src/types/index.ts`
- Produces: `projects: Project[]` in `src/data/projects.ts`
- Produces: `engineeringExperience: ExperienceItem[]`, `leadershipExperience: ExperienceItem[]` in `src/data/experience.ts`
- Produces: `skills: SkillCategory[]` in `src/data/skills.ts`
- Produces: `reads: Book[]` in `src/data/reads.ts`

- [ ] **Step 1: Write `src/types/index.ts`**

```typescript
export type ProjectStatus = "Live" | "Production" | "Research" | "Archived";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  metrics?: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featuredInBento?: boolean;
  bentoSpan?: "col-span-1" | "col-span-2";
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  takeaway: string;
  status: "Read" | "Reading";
}
```

- [ ] **Step 2: Write `src/data/projects.ts` with all 6 flagship projects**

Include:
1. `loan-prediction-api` (Status: "Live", Metrics: "88.6% Accuracy · pytest 100% pass", Tags: ["Flask", "scikit-learn", "pytest", "Docker", "Render"])
2. `mlops-pipeline` (Status: "Production", Metrics: "Automated CI/CD · Dockerized", Tags: ["GitHub Actions", "Docker", "pytest", "MLOps"])
3. `focuspilot` (Status: "Live", Metrics: "Real-time sync · Active users", Tags: ["Chrome API", "Supabase", "JavaScript"])
4. `fedrec` (Status: "Research", Metrics: "Federated Learning · Privacy-first", Tags: ["Python", "Federated Learning", "PyTorch", "Research"])
5. `finsight-ai` (Status: "Live", Metrics: "Nigerian Fintech · FastAPI", Tags: ["FastAPI", "React", "AI Assistant", "Tailwind"])
6. `heroes-conference` (Status: "Archived", Metrics: "500+ Concurrent Attendees", Tags: ["React", "Supabase", "Realtime WebSocket"])

- [ ] **Step 3: Write `src/data/experience.ts` and `src/data/skills.ts`**

In `experience.ts`:
- Engineering: Union Bank of Nigeria IT Intern, HVAC IoT System, SWEP Workshop Lead.
- Leadership: Technical Crew Head of Graphics, In-Charge.
- Education: Covenant University, B.Eng. Computer Engineering (CGPA 4.83 / 5.0, expected 2028).

In `skills.ts`:
- AI & ML (scikit-learn, Pandas, NumPy, Federated Learning, Model Evaluation).
- Serving & MLOps (FastAPI, Flask, Docker, GitHub Actions, pytest, SQLAlchemy, Supabase).
- Product (Python, TypeScript, React, Next.js, REST APIs, Chrome Extensions).

- [ ] **Step 4: Write `src/data/reads.ts`**

Map the 4 books with covers in `/reads/...`:
- Lean Startup (Eric Ries)
- Rich Dad Poor Dad (Robert Kiyosaki)
- The Richest Man in Babylon (George S. Clason)
- Satan Get Lost (David Oyedepo)

- [ ] **Step 5: Move public assets into `public/` and commit**

```bash
mkdir -p public
git mv images public/images
git mv reads public/reads
git mv Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf public/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf
git add src/types src/data public
git commit -m "feat: add typed data models and migrate static assets to public/"
```

---

### Task 3: Core UI Primitives & Light Theme Global Styles

**Files:**
- Create: `src/app/globals.css`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/ProofStrip.tsx`
- Create: `src/components/ui/RotatingHero.tsx`

**Interfaces:**
- Produces: `<Badge status={status} />`
- Produces: `<ProofStrip />`
- Produces: `<RotatingHero />`

- [ ] **Step 1: Write `src/app/globals.css` with warm monochrome variables**

Include:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --canvas: #FBFBFA;
  --surface: #FFFFFF;
  --ink-primary: #111111;
  --ink-secondary: #666666;
}

body {
  background-color: var(--canvas);
  color: var(--ink-primary);
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: #111111;
  color: #FFFFFF;
}
```

- [ ] **Step 2: Create `src/components/ui/Badge.tsx`**

Maps statuses (`Live`, `Production`, `Research`, `Archived`) to clean pastel classes with Lucide dot indicator.

- [ ] **Step 3: Create `src/components/ui/ProofStrip.tsx`**

Displays the 3 verified production proofs:
1. 5 Deployed Systems
2. 500+ Concurrent Users Served
3. 88.6% Model Accuracy in Production

- [ ] **Step 4: Create `src/components/ui/RotatingHero.tsx`**

Renders the rotating header:
*"Building AI that [ships / scales / lasts]."* using pure React state & interval with smooth opacity transition.

- [ ] **Step 5: Typecheck and commit**

Run: `npm run typecheck`
Commit:
```bash
git add src/app/globals.css src/components/ui
git commit -m "feat: add light theme globals and core UI primitives"
```

---

### Task 4: Floating Nav & Command Palette (`cmdk`)

**Files:**
- Create: `src/components/nav/Navbar.tsx`
- Create: `src/components/nav/Footer.tsx`
- Create: `src/components/command/CommandPalette.tsx`

**Interfaces:**
- Produces: `<Navbar onOpenCommand={() => void} />`
- Produces: `<CommandPalette open={boolean} setOpen={(open: boolean) => void} />`
- Produces: `<Footer />`

- [ ] **Step 1: Create `src/components/nav/Navbar.tsx`**

Floating glass dock with links to Home, Work, About, Reads, and Download CV with Lucide `Download` icon. Includes `<kbd>⌘K</kbd>` command palette button.

- [ ] **Step 2: Create `src/components/command/CommandPalette.tsx`**

Raycast-inspired modal built with `cmdk` listening to `Ctrl+K` and `⌘K`:
- Navigation group: Home, Work, About, Reads, Download CV.
- Deployed APIs & Projects: Direct jump to Render, Live demos, and GitHub.
- "Ask Tobi": Instant answers for tech stack, contract availability, and CGPA (4.83).
- Lucide SVG icons: `Compass`, `ExternalLink`, `FileText`, `BrainCircuit`, `GraduationCap`, `Mail`. Zero emojis.

- [ ] **Step 3: Create `src/components/nav/Footer.tsx`**

"Say hello" CTA block with direct mail link (`mailto:...`), GitHub link, LinkedIn link, and Lagos time indicator.

- [ ] **Step 4: Typecheck and commit**

Run: `npm run typecheck`
Commit:
```bash
git add src/components/nav src/components/command
git commit -m "feat: add floating pill nav and cmdk command palette with 0 emojis"
```

---

### Task 5: 21st.dev Asymmetrical Bento Grid & Project Cards

**Files:**
- Create: `src/components/bento/BentoGrid.tsx`
- Create: `src/components/ui/ProjectCard.tsx`

**Interfaces:**
- Produces: `<BentoGrid />`
- Produces: `<ProjectCard project={Project} />`

- [ ] **Step 1: Create `src/components/bento/BentoGrid.tsx`**

Asymmetric CSS grid (`grid-cols-1 md:grid-cols-3 gap-4`):
- Card 1 (`md:col-span-2`): Loan Prediction API with live request visual, 88.6% accuracy metric, and Flask/Render status.
- Card 2 (`md:col-span-1`): MLOps Pipeline with CI/CD diagram and Docker container status.
- Card 3 (`md:col-span-1`): FocusPilot extension with focus telemetry metric.
- Card 4 (`md:col-span-2`): FedRec Decentralized Recommender research summary.

- [ ] **Step 2: Create `src/components/ui/ProjectCard.tsx`**

Clean white card with hairline border, screenshot preview, status badge, tech pills, and outbound link icons (`ArrowUpRight`, `Github`).

- [ ] **Step 3: Typecheck and commit**

Run: `npm run typecheck`
Commit:
```bash
git add src/components/bento src/components/ui/ProjectCard.tsx
git commit -m "feat: add 21st.dev bento grid and interactive project card components"
```

---

### Task 6: Implement Next.js 15 App Pages

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/work/page.tsx`
- Create: `src/app/reads/page.tsx`
- Remove legacy: `index.html`, `about.html`, `work.html`, `reads.html`, `css/`, `js/`

**Interfaces:**
- Produces: Full Next.js multi-page application with clean routing (`/`, `/about`, `/work`, `/reads`)

- [ ] **Step 1: Create `src/app/layout.tsx`**

Injects Geist Sans, Instrument Serif, and Geist Mono fonts. Renders floating `<Navbar />`, `<CommandPalette />`, page children, and `<Footer />`. Configures metadata for SEO.

- [ ] **Step 2: Create `src/app/page.tsx` (Homepage)**

Renders Hero section with `<RotatingHero />`, `<ProofStrip />`, `<BentoGrid />`, and Quick Explore cards.

- [ ] **Step 3: Create `src/app/about/page.tsx`**

Renders:
- Headline: *"I ship ML systems, test them, and document the trade-offs."*
- Engineering Narrative & Focus
- Engineering vs Leadership Experience
- Education: Covenant University, B.Eng. Computer Engineering (**CGPA 4.83 / 5.0**, expected 2028)
- Categorized Skills (AI/ML &rarr; Serving & MLOps &rarr; Product)

- [ ] **Step 4: Create `src/app/work/page.tsx`**

Renders full 6-project gallery with category filters and interactive project cards.

- [ ] **Step 5: Create `src/app/reads/page.tsx`**

Renders reading list cards with book covers, author metadata, ratings, and takeaways.

- [ ] **Step 6: Remove legacy static HTML files and commit**

```bash
git rm index.html about.html work.html reads.html
git rm -r css js
git add src/app
git commit -m "feat: implement full App Router pages (/ , /about, /work, /reads) and clean legacy HTML"
```

---

### Task 7: Build Verification, Emoji Audit & Vercel Readiness

**Files:**
- Verify: `npm run build`
- Verify: Emoji audit script / check

- [ ] **Step 1: Run TypeScript verification**

Run: `npm run typecheck`
Expected: Exit code 0, 0 type errors.

- [ ] **Step 2: Run Production Build**

Run: `npm run build`
Expected: Next.js compiles all routes (`/`, `/about`, `/work`, `/reads`) into static/optimized pages with exit code 0.

- [ ] **Step 3: Run Emoji Audit**

Run PowerShell script to search for emoji codepoints in `src/`:
Expected: 0 emojis found in `src/`.

- [ ] **Step 4: Commit and Push**

Commit and push final verified build to `main`.
