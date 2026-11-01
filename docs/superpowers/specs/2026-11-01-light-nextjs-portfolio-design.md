# Design Spec: Light-Theme Next.js 15 AI Engineer Portfolio

**Date:** 2026-11-01  
**Author:** Oluwatobiloba Olatunji & Antigravity  
**Status:** Approved  
**Target:** In-place Next.js 15 App Router migration with light editorial aesthetic, Lucide icons, 21st.dev bento grid, and cmdk command palette.

---

## 1. Objectives & Positioning

- **Positioning:** AI Engineer taking ML models from notebook to production (FastAPI/Flask inference APIs, MLOps CI/CD pipelines, Docker deployments, tested full-stack products).
- **Aesthetic Direction:** Warm-monochrome editorial Swiss minimalism inspired by Dribbble & 21st.dev.
  - Light mode canvas (`#FBFBFA`)
  - Crisp white cards (`#FFFFFF`) with 1px hairline borders (`rgba(0,0,0,0.08)`)
  - Off-black typography (`#111111`) with generous whitespace
  - Muted pastel status tags (Sage green for Live, Soft blue for Research, Soft amber for Production)
  - 100% clean Lucide SVG icons (zero emojis)
- **Academic & Credential Context:**
  - Covenant University, B.Eng. Computer Engineering (CGPA 4.83 / 5.0, Expected 2028).

---

## 2. Technology Stack

- **Framework:** Next.js 15+ (App Router, Turbopack, React 19 / React 18 compatible)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS (configured with bespoke warm monochrome palette and custom font families)
- **Icons:** `lucide-react` (100% vector SVG icons, zero emoji usage across UI)
- **Command Palette:** `cmdk` (Raycast/Linear-style ⌘K interface)
- **Animation & Motion:** Tailwind CSS transitions + subtle Framer Motion micro-interactions (staggered reveal, bento card hover scale)
- **Deployment:** Vercel (clean URLs, optimized static generation where applicable, strict security headers in `next.config.ts` or `vercel.json`)

---

## 3. Visual & Design Tokens

| Token | Value | Purpose |
|---|---|---|
| `--canvas` | `#FBFBFA` | Main body/page background (soft, warm off-white) |
| `--surface` | `#FFFFFF` | Card and component surface |
| `--surface-hover` | `#F5F4F0` | Interactive card and button hover state |
| `--border-subtle` | `rgba(0, 0, 0, 0.08)` | 1px hairline container borders |
| `--border-focus` | `rgba(0, 0, 0, 0.20)` | Active focus and card highlight borders |
| `--text-primary` | `#111111` | Headings, key labels, primary emphasis |
| `--text-secondary` | `#666666` | Body paragraphs, project descriptions |
| `--text-muted` | `#888888` | Metadata, date timestamps, footnote labels |
| `--badge-live-bg` | `#EDF3EC` | Background for "Live" status pill |
| `--badge-live-text` | `#24542B` | Text for "Live" status pill |
| `--badge-research-bg` | `#EBF3FA` | Background for "Research" status pill |
| `--badge-research-text` | `#1A4B75` | Text for "Research" status pill |
| `--badge-prod-bg` | `#FBF3DB` | Background for "Production" status pill |
| `--badge-prod-text` | `#785007` | Text for "Production" status pill |

### Typography Hierarchy
- **Body & Interface:** `Geist Sans`, system-ui, sans-serif
- **Hero Title & Editorial Accents:** `Instrument Serif`, serif (e.g., italicised *"ships"* in *"Building AI that ships."*)
- **Code, Keystrokes, Metrics:** `Geist Mono`, monospace

---

## 4. Architecture & File Structure

```text
portfolio-website/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── loan-api.png
│   │   ├── mlops.png
│   │   ├── focuspilot.png
│   │   ├── fedrec.png
│   │   ├── finsight.png
│   │   └── heroes-conference.png
│   ├── reads/
│   │   ├── lean startup.jpg
│   │   ├── rich dad poor dad.jpg
│   │   ├── richest man in babylon.jpg
│   │   └── satan get lost.jpg
│   └── Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Global HTML wrapper, fonts, Navbar & Footer
│   │   ├── page.tsx                  # Home: Hero, Proof strip, Bento Grid, Explores
│   │   ├── about/
│   │   │   └── page.tsx              # About: Bio, Experience, Education (CGPA 4.83), Skills
│   │   ├── work/
│   │   │   └── page.tsx              # Work: Complete 6-project gallery + category filters
│   │   ├── reads/
│   │   │   └── page.tsx              # Reads: Book catalog, key takeaways, ratings
│   │   ├── globals.css               # Global styles, Tailwind base, smooth scroll
│   │   └── not-found.tsx             # 404 handler
│   ├── components/
│   │   ├── nav/
│   │   │   ├── Navbar.tsx            # Floating glass pill navigation with ⌘K trigger
│   │   │   └── Footer.tsx            # "Say hello" CTA strip with direct email & socials
│   │   ├── bento/
│   │   │   └── BentoGrid.tsx         # 21st.dev inspired asymmetric Bento project grid
│   │   ├── command/
│   │   │   └── CommandPalette.tsx    # cmdk modal with quick jump & "Ask Tobi"
│   │   └── ui/
│   │       ├── Badge.tsx             # Minimalist status pills (Live, Research, Archived)
│   │       ├── ProjectCard.tsx       # Standard project display card for /work
│   │       ├── ProofStrip.tsx        # Deployed metric counters (5 deployed, 500+ users, 88.6%)
│   │       └── RotatingHero.tsx      # Rotating tagline: "ships / scales / lasts"
│   ├── data/
│   │   ├── projects.ts               # Typed data source for all 6 projects
│   │   ├── experience.ts             # Engineering & Leadership timeline
│   │   ├── skills.ts                 # Categorized skills (AI/ML, Serving, Product)
│   │   └── reads.ts                  # Reading list data
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces for Projects, Experience, Books
│   └── lib/
│       └── utils.ts                  # Tailwind class merger (clsx + twMerge)
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 5. Component Specifications & Behavior

### 5.1 Floating Pill Navbar (`Navbar.tsx`)
- Floating at `top-6`, centered, `max-w-2xl`, `backdrop-blur-md bg-white/80 border border-black/8 shadow-sm rounded-full px-5 py-2.5`.
- Navigation links:
  - `Home` (`/`)
  - `Work` (`/work`)
  - `About` (`/about`)
  - `Reads` (`/reads`)
  - `CV` (Direct link to `/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf` with `Download` icon)
- Right side: `<button>` with `<kbd className="text-xs bg-black/5 px-2 py-0.5 rounded border border-black/10 font-mono">⌘K</kbd>` that opens the Command Palette.

### 5.2 21st.dev Asymmetrical Bento Grid (`BentoGrid.tsx`)
- Displays top 3 flagship AI systems on the homepage:
  - **Card 1 (2 Columns - Featured): Loan Prediction API**
    - Flask API live on Render with Random Forest classifier
    - Metric pill: `88.6% Accuracy` + `pytest 100% pass`
    - Live request/response snippet visual
    - Tech: `Flask`, `scikit-learn`, `pytest`, `Docker`
  - **Card 2 (1 Column): MLOps Deployment Pipeline**
    - End-to-end automated retraining, CI/CD linting, and Docker containerization
    - Visual GitHub Actions flow diagram node
    - Tech: `GitHub Actions`, `Docker`, `CI/CD`
  - **Card 3 (1 Column): FocusPilot Chrome Extension**
    - Focus session manager with real-time Supabase sync
    - Real-world user feedback metric
    - Tech: `JavaScript`, `Chrome API`, `Supabase`
  - **Card 4 (2 Columns): Federated Learning & FinSight**
    - FedRec privacy-preserving decentralized recommender system + Nigerian financial assistant
    - Research badge + Live link
    - Tech: `Python`, `Federated Learning`, `React`, `FastAPI`

### 5.3 Command Palette (`CommandPalette.tsx` via `cmdk`)
- Keyboard listener: `⌘K` or `Ctrl+K`.
- Overlay: translucent backdrop (`bg-black/20 backdrop-blur-sm`).
- Modal: centered, rounded-2xl, border `rgba(0,0,0,0.1)`, pure white surface.
- Content groups:
  - **Navigation:** Home, Work, About, Reads, Download CV.
  - **Deployed Projects:** Direct link to Render API, GitHub repositories, and live sites.
  - **"Ask Tobi":** Instant technical answers:
    - *"What ML stack do you use?"* &rarr; FastAPI, scikit-learn, PyTorch, Docker, pytest.
    - *"What is your education status?"* &rarr; Computer Engineering at Covenant University (CGPA 4.83 / 5.0, expected 2028).
    - *"Are you open to contract or full-time roles?"* &rarr; Open to AI engineering roles, inference API builds, and contract work.
- **Zero emojis**: Icons from `lucide-react` (`Search`, `ArrowUpRight`, `Code2`, `Terminal`, `GraduationCap`, `Mail`, `FileText`).

### 5.4 Proof Numbers Strip (`ProofStrip.tsx`)
- Clean, horizontal 3-stat divider:
  - **5** &rarr; Deployed Projects
  - **500+** &rarr; Concurrent Users Served (Heroes Conference '26)
  - **88.6%** &rarr; Production Model Accuracy (Loan Prediction API)

---

## 6. Content Migration & Verified Copy

### About Page (`/about`):
- **Headline:** *"I ship ML systems, test them, and document the trade-offs."*
- **Bio:** Based in Lagos. Takes machine learning models from notebook to production—training with scikit-learn, serving with FastAPI and Flask, testing with pytest, and deploying via Docker and GitHub Actions.
- **Education:** Covenant University, B.Eng. in Computer Engineering (CGPA **4.83** / 5.0, expected 2028).
- **Experience Sections:**
  - **Engineering:** IT Intern (Union Bank of Nigeria), HVAC IoT Monitoring, SWEP Workshop Lead.
  - **Leadership:** Technical Crew Head of Graphics, In-Charge.
- **Skills Categorization:**
  - *AI & ML:* scikit-learn, Pandas, NumPy, Federated Learning, Model Evaluation.
  - *Serving & MLOps:* FastAPI, Flask, Docker, GitHub Actions, pytest, SQLAlchemy, Supabase.
  - *Product:* Python, TypeScript, React, Next.js, REST APIs, Chrome Extensions.

### Work Page (`/work`):
- Subtitle: *"Tested inference APIs, CI/CD model pipelines, and live products."*
- 6 complete project cards with status badges:
  1. Loan Prediction API (`Live`)
  2. MLOps Automated Pipeline (`Production`)
  3. FocusPilot (`Live`)
  4. FedRec Decentralized Recommender (`Research`)
  5. FinSight AI (`Live`)
  6. Heroes Conference '26 Event Platform (`Archived`)

### Reads Page (`/reads`):
- Curated list of impactful engineering and business books with cover images, ratings, and core takeaways.

---

## 7. Verification & Quality Gates

- [ ] All pages render with 0 console errors and clean TypeScript compilation (`tsc --noEmit`).
- [ ] Fully responsive on Mobile (375px), Tablet (768px), and Desktop (1280px+).
- [ ] Command palette (`⌘K`) opens and filters accurately with keyboard and mouse.
- [ ] All external links open with `target="_blank"` and `rel="noopener noreferrer"`.
- [ ] CV download link points to `/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf` and downloads cleanly.
- [ ] Zero emoji characters found across all files (verified via script/regex).
- [ ] Vercel build exits with code 0 (`next build`).
