# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and engineering hiring managers evaluating candidates for backend and software engineering internship roles. They arrive via a LinkedIn link, GitHub profile, or direct URL, typically on a laptop during a screening pass, and need to quickly judge technical credibility, project quality, and communication ability.

## Product Purpose

Present Oluwatobiloba Olatunji's engineering work, skills, and character so that a recruiter can decide — within one visit — that he is worth interviewing. Success is a recruiter downloading the CV or sending a message after seeing enough evidence of real, tested, shipped work.

## Positioning

Every project on the portfolio ships end-to-end (from ML model to deployed API to Chrome extension) AND carries documented test coverage (pytest, CI/CD). The combination of tested code and full-stack delivery — not one or the other — is the differentiator a recruiter cannot find on a typical student portfolio that shows only screenshots or untested demos.

## Operating Context

- Four-page static site: Home (hero + selected work + explore cards), Work (full project gallery), About (bio, education, experience, skills), Reads (book list).
- Deployed on Vercel (`vercel.json` with clean URLs and CV download headers).
- "Ask Tobi" command palette (⌘K) answers visitor questions about the owner.
- Dark theme with green intro curtain animation, dot-grid noise texture, DM Sans body, Instrument Serif display, scroll-reveal transitions.
- CV served as a downloadable PDF from the same domain.

## Capabilities and Constraints

- Static HTML/CSS/JS — no build step, no framework, no server.
- Profile photo, project screenshots, and book cover images are committed assets.
- Content changes are manual edits to HTML files.
- The "Ask Tobi" palette runs client-side with pre-authored Q&A; it does not call an external AI API.
- Vercel free tier; no server-side logic available.

## Brand Commitments

- Name: **Oluwatobiloba Olatunji** (short: Tobi).
- Voice: direct, technical, evidence-first, zero hype. Lets the work speak.
- Tagline pattern: "Building things that [rotating word]." (work / scale / last / matter).
- Green accent inherited from Covenant University identity; not rigidly specified.
- DM Sans + Instrument Serif are the current type pair.

## Evidence on Hand

- **Projects (live, deployed):** FocusPilot (focuspilot.vercel.app), Loan Prediction API (Render), FinSight AI (finsightng.vercel.app), Heroes Conference '26 (heroesconference26.vercel.app), FedRec (GitHub).
- **Additional repos:** Data Science Projects, MLOps Pipeline, IoT Vehicle Speed Detector.
- **Profile photo:** `images/profile.jpg`.
- **Project screenshots:** `images/focuspilot.png`, `images/loan-api.png`, `images/finsight.png`, `images/heroes-conference.png`, `images/fedrec.png`.
- **Book covers:** local images in `reads/` and OpenLibrary URLs.
- **CV:** `Oluwatobiloba_Olatunji_Backend_Engineer_2026_CV.pdf`.
- No fabricated testimonials, customer logos, or usage metrics exist; future work must not invent them.

## Product Principles

1. **Evidence over assertion.** Show tested, deployed projects with real metrics — never claim what cannot be verified.
2. **Respect the recruiter's time.** Every page is scannable within seconds; depth is available, never imposed.
3. **Ship the real thing.** End-to-end delivery with test coverage is the brand; the portfolio itself must reflect that standard.
4. **Honest scope.** Present a student portfolio that is genuinely impressive for its stage — do not imitate a senior engineer's site or overstate experience.
5. **Accessible by default.** Semantic HTML, skip links, ARIA labels, keyboard navigation, and readable contrast are non-negotiable.
