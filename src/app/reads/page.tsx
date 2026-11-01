import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { reads } from "@/data/reads";
import { BookCover } from "@/components/ui/BookCover";

export const metadata: Metadata = {
  title: "Reading List & Notes | Oluwatobiloba Olatunji",
  description:
    "Books that shaped how I think, build, and live. Notes and takeaways on distributed systems, spiritual conviction, communication, and execution discipline.",
};

export default function ReadsPage() {
  return (
    <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-10">
      {/* Header */}
      <header className="space-y-3 pt-4">
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Reading List
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-primary tracking-tight">
          Books &amp; Takeaways
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
          Books that shaped how I think, build, and live. Notes and takeaways from what I have read.
        </p>
      </header>

      {/* Book Grid */}
      <section
        aria-label="Books and takeaways"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {reads.map((book) => (
          <article
            key={book.id}
            className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex gap-4 items-start hover:border-black/20 transition-all duration-200 group"
          >
            <div className="relative w-20 sm:w-24 aspect-[2/3] shrink-0 rounded-lg overflow-hidden border border-black/[0.08] bg-canvas shadow-sm">
              <BookCover
                src={book.cover}
                alt={book.title}
                title={book.title}
                author={book.author}
                status={book.status}
              />
            </div>

            <div className="space-y-2 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span className={book.status === "Reading" ? "text-emerald-700 font-medium" : ""}>
                    {book.status === "Reading" ? "Currently Reading" : book.status}
                  </span>
                </span>
              </div>

              <div>
                <h2 className="text-base font-semibold text-ink-primary font-serif leading-snug">
                  {book.title}
                </h2>
                <p className="text-xs font-mono text-ink-muted mt-0.5">
                  by {book.author}
                </p>
              </div>

              <div className="pt-2 border-t border-black/[0.04]">
                <p className="text-xs text-ink-secondary leading-relaxed">
                  <span className="font-mono text-[11px] text-ink-primary font-medium">
                    Takeaway:{" "}
                  </span>
                  {book.takeaway}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
