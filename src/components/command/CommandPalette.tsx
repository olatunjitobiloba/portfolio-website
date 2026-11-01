"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  Home,
  Briefcase,
  User,
  BookOpen,
  FileDown,
  ExternalLink,
  BrainCircuit,
  GraduationCap,
  Mail,
  Check,
  Copy,
} from "lucide-react";

export interface CommandPaletteProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const SEARCH_PROMPTS = [
  "Type a command or search...",
  "Try 'Loan Prediction API'...",
  "Try 'MLOps Pipeline'...",
  "Try 'FocusPilot Extension'...",
  "Try 'Covenant University'...",
  "Try 'Download CV'...",
  "Try 'Email me'...",
];

export function CommandPalette({ open: openProp, setOpen: setOpenProp }: CommandPaletteProps) {
  const router = useRouter();
  const [internalOpen, setInternalOpen] = useState(false);
  const [copiedAnswer, setCopiedAnswer] = useState<string | null>(null);
  const [promptIndex, setPromptIndex] = useState(0);

  // Animated cycling search placeholders (inspired by Abraham Adelodun & ReactBits)
  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % SEARCH_PROMPTS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const isControlled = openProp !== undefined;
  const isOpen = isControlled ? openProp : internalOpen;

  const setIsOpen = useCallback(
    (nextOpen: boolean) => {
      if (setOpenProp) {
        setOpenProp(nextOpen);
      }
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      if (!nextOpen) {
        setCopiedAnswer(null);
      }
    },
    [isControlled, setOpenProp]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen, setIsOpen]);

  // Prevent scrolling when command palette is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const handleDownloadCV = () => {
    setIsOpen(false);
    const link = document.createElement("a");
    link.href = "/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf";
    link.download = "Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExternalLink = (url: string) => {
    setIsOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleAskTobi = async (question: string, answer: string) => {
    try {
      await navigator.clipboard.writeText(answer);
      setCopiedAnswer(question);
      setTimeout(() => {
        setCopiedAnswer(null);
      }, 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopiedAnswer(question);
      setTimeout(() => {
        setCopiedAnswer(null);
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="bg-white rounded-2xl border border-black/10 shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <Command label="Command Palette" className="flex flex-col w-full focus:outline-none">
          <div className="flex items-center px-4 border-b border-black/[0.08]">
            <Search className="w-4 h-4 text-ink-muted mr-3 shrink-0" />
            <Command.Input
              placeholder={SEARCH_PROMPTS[promptIndex]}
              className="w-full py-3.5 text-sm text-ink-primary placeholder:text-ink-muted bg-transparent focus:outline-none transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-mono text-ink-muted bg-black/5 hover:bg-black/10 px-1.5 py-0.5 rounded border border-black/5 transition-colors"
            >
              ESC
            </button>
          </div>

          {copiedAnswer && (
            <div className="bg-pastel-green-bg border-b border-pastel-green-border px-4 py-2 text-xs text-pastel-green-text flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 shrink-0" />
                Copied answer to clipboard
              </span>
              <span className="text-[11px] font-mono opacity-80">{copiedAnswer}</span>
            </div>
          )}

          <Command.List className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-8 text-center text-xs text-ink-muted">
              No matching results found.
            </Command.Empty>

            {/* Navigation Group */}
            <Command.Group
              heading="Navigation"
              className="px-2 py-1.5 text-[10px] font-semibold text-ink-muted uppercase tracking-wider [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-ink-muted [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
            >
              <Command.Item
                value="Home navigation root main"
                onSelect={() => handleNavigate("/")}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <Home className="w-4 h-4 text-ink-secondary shrink-0" />
                <span className="font-medium">Home</span>
              </Command.Item>

              <Command.Item
                value="Work 6 Projects portfolio"
                onSelect={() => handleNavigate("/work")}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <Briefcase className="w-4 h-4 text-ink-secondary shrink-0" />
                <span className="font-medium">Work (6 Projects)</span>
              </Command.Item>

              <Command.Item
                value="About Bio Experience Education"
                onSelect={() => handleNavigate("/about")}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <User className="w-4 h-4 text-ink-secondary shrink-0" />
                <span className="font-medium">About (Bio, Experience, Education)</span>
              </Command.Item>

              <Command.Item
                value="Reads Book Takeaways reading library"
                onSelect={() => handleNavigate("/reads")}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <BookOpen className="w-4 h-4 text-ink-secondary shrink-0" />
                <span className="font-medium">Reads (Book Takeaways)</span>
              </Command.Item>

              <Command.Item
                value="Download CV PDF curriculum vitae resume"
                onSelect={handleDownloadCV}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3">
                  <FileDown className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="font-medium">Download CV (PDF)</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted">PDF</span>
              </Command.Item>
            </Command.Group>

            {/* Projects Group */}
            <Command.Group
              heading="Projects (Direct Links)"
              className="mt-2 px-2 py-1.5 text-[10px] font-semibold text-ink-muted uppercase tracking-wider [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-ink-muted [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
            >
              <Command.Item
                value="Loan Prediction API Live Flask API Machine Learning scikit-learn Render"
                onSelect={() => handleExternalLink("https://loan-predictor-api-91xu.onrender.com/app")}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="truncate">Loan Prediction API (Live Flask API)</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">Live</span>
              </Command.Item>

              <Command.Item
                value="MLOps Automated Pipeline GitHub Repo CI CD Docker pytest"
                onSelect={() => handleExternalLink("https://github.com/olatunjitobiloba/MLOps-Pipeline")}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="truncate">MLOps Automated Pipeline (GitHub Repo)</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">GitHub</span>
              </Command.Item>

              <Command.Item
                value="FocusPilot Chrome Extension Supabase productivity"
                onSelect={() => handleExternalLink("https://focuspilot.vercel.app")}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="truncate">FocusPilot Chrome Extension</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">Live</span>
              </Command.Item>

              <Command.Item
                value="FedRec Federated Learning Privacy-First Recommendation Engine PyTorch"
                onSelect={() => handleExternalLink("https://github.com/olatunjitobiloba/FedRec-Privacy-First-Recommendation-Engine")}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="truncate">FedRec Federated Learning</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">GitHub</span>
              </Command.Item>

              <Command.Item
                value="FinSight AI Assistant Fintech FastAPI financial planning"
                onSelect={() => handleExternalLink("https://finsightng.vercel.app/")}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="truncate">FinSight AI Assistant</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">Live</span>
              </Command.Item>

              <Command.Item
                value="Heroes Conference 26 Platform High Concurrency Live Event WebSockets"
                onSelect={() => handleExternalLink("https://heroesconference26.vercel.app")}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-4 h-4 text-ink-secondary shrink-0" />
                  <span className="truncate">Heroes Conference &apos;26 Platform</span>
                </div>
                <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">Demo</span>
              </Command.Item>
            </Command.Group>

            {/* Ask Tobi Group */}
            <Command.Group
              heading="Ask Tobi (Instant Answers)"
              className="mt-2 px-2 py-1.5 text-[10px] font-semibold text-ink-muted uppercase tracking-wider [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-ink-muted [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
            >
              <Command.Item
                value="What is your ML stack? FastAPI scikit-learn PyTorch Docker pytest SQLAlchemy"
                onSelect={() =>
                  handleAskTobi(
                    "ML Stack",
                    "FastAPI, scikit-learn, PyTorch, Docker, pytest, SQLAlchemy."
                  )
                }
                className="flex items-start gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none group"
              >
                <BrainCircuit className="w-4 h-4 text-ink-secondary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-ink-primary">What is your ML stack?</span>
                    <Copy className="w-3 h-3 text-ink-muted opacity-0 group-hover:opacity-100 group-data-[selected=true]:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <span className="text-xs text-ink-secondary leading-relaxed">
                    FastAPI, scikit-learn, PyTorch, Docker, pytest, SQLAlchemy.
                  </span>
                </div>
              </Command.Item>

              <Command.Item
                value="What is your education? Covenant University B.Eng. Computer Engineering CGPA 4.83 5.0 expected 2028"
                onSelect={() =>
                  handleAskTobi(
                    "Education",
                    "Covenant University, B.Eng. Computer Engineering (CGPA 4.83 / 5.0, expected 2028)."
                  )
                }
                className="flex items-start gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none group"
              >
                <GraduationCap className="w-4 h-4 text-ink-secondary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-ink-primary">What is your education?</span>
                    <Copy className="w-3 h-3 text-ink-muted opacity-0 group-hover:opacity-100 group-data-[selected=true]:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <span className="text-xs text-ink-secondary leading-relaxed">
                    Covenant University, B.Eng. Computer Engineering (CGPA 4.83 / 5.0, expected 2028).
                  </span>
                </div>
              </Command.Item>

              <Command.Item
                value="Are you available for work? Open to AI engineering roles and contract work"
                onSelect={() =>
                  handleAskTobi(
                    "Availability",
                    "Open to AI engineering roles and contract work."
                  )
                }
                className="flex items-start gap-3 px-3 py-2 rounded-xl text-xs sm:text-sm text-ink-primary hover:bg-black/5 data-[selected=true]:bg-black/5 cursor-pointer transition-colors outline-none group"
              >
                <Mail className="w-4 h-4 text-ink-secondary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-ink-primary">Are you available for work?</span>
                    <Copy className="w-3 h-3 text-ink-muted opacity-0 group-hover:opacity-100 group-data-[selected=true]:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <span className="text-xs text-ink-secondary leading-relaxed">
                    Open to AI engineering roles and contract work.
                  </span>
                </div>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-4 py-2 border-t border-black/[0.06] bg-canvas text-[11px] text-ink-muted">
            <span className="flex items-center gap-1.5 font-mono">
              Use ↑↓ to navigate · Enter to select
            </span>
            <span className="font-mono">Press ESC to exit</span>
          </div>
        </Command>
      </div>
    </div>
  );
}

export default CommandPalette;
