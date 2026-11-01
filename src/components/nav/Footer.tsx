import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-canvas mt-20 pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Say hello / CTA block */}
        <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8 mb-12 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">
              Say hello
            </p>
            <h2 className="text-xl sm:text-2xl font-serif text-ink-primary mb-3">
              Open to AI engineering roles and contract work: ML APIs, model deployment, and AI product builds.
            </h2>
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <a
                href="mailto:olatunjitobiloba05@gmail.com"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink-primary text-white text-xs font-medium hover:bg-black/85 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email me</span>
              </a>
              <a
                href="https://github.com/olatunjitobiloba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-white text-ink-primary text-xs font-medium hover:bg-surface-hover transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/olatunjitobiloba/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-white text-ink-primary text-xs font-medium hover:bg-surface-hover transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/[0.06] text-xs text-ink-secondary">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-ink-muted" />
            <span>Based in Lagos, Nigeria</span>
          </div>
          <div>
            <p>Oluwatobiloba Olatunji · Built with Next.js &amp; Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
