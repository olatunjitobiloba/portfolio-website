/**
 * Authentic SVG icons for the 12 interactive stack elements.
 * Encoded as inline SVG data URIs so they load instantaneously
 * with zero network requests and zero dependency on external CDNs.
 */

export const STACK_SVGS: Record<string, string> = {
  // Python - Official Blue & Yellow dual snakes
  Python: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#3776AB" d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.1 1.4h2.9v.4H6.2S4 4.8 4 8c0 3.1 1.8 3 1.8 3h1.1V9.5c0-1.7 1.5-1.7 1.5-1.7h3.6c1.6 0 1.5-1.5 1.5-1.5V3.8S13.7 2 11.9 2zm-.9 1.1c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"/><path fill="#FFD43B" d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.1-1.4H12v-.4h5.8s2.2.3 2.2-2.9c0-3.1-1.8-3-1.8-3h-1.1v1.5c0 1.7-1.5 1.7-1.5 1.7H12c-1.6 0-1.5 1.5-1.5 1.5v2.5s-.2 1.8 1.6 1.8zm.9-1.1c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/></svg>`,

  // PyTorch - Official Flame logo
  PyTorch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#EE4C2C" d="M13.4 2.5a.6.6 0 0 0-.8.2L11 5.3a7.4 7.4 0 0 0-4.6 6.8c0 4.1 3.4 7.4 7.5 7.4s7.5-3.3 7.5-7.4a7.3 7.3 0 0 0-3-5.9l-1.3 1.3a5.5 5.5 0 0 1 2.3 4.6 5.5 5.5 0 0 1-5.5 5.5 5.5 5.5 0 0 1-5.5-5.5c0-2.4 1.6-4.5 3.8-5.2l.6 1.7a.6.6 0 0 0 1.1.2l1.6-4.8a.6.6 0 0 0-.2-.6z"/><circle cx="16.5" cy="5.5" r="1.3" fill="#EE4C2C"/></svg>`,

  // scikit-learn - Official blue/orange interconnected cluster
  "scikit-learn": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="12" r="4.5" fill="#3499CD"/><circle cx="17" cy="7" r="4.5" fill="#F89939"/><circle cx="17" cy="17" r="4.5" fill="#3499CD"/><path d="M7 12l10-5m-10 5l10 5" stroke="#FFFFFF" stroke-width="1.5"/></svg>`,

  // FastAPI - Teal circle with white lightning
  FastAPI: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="#059669"/><path fill="#FFFFFF" d="M13 3L6 14h5l-2 7 9-12h-5z"/></svg>`,

  // Flask - Minimal flask silhouette
  Flask: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#111827" d="M9 3v2h1v4.2L6.3 16c-.8 1.4.2 3 1.7 3h8c1.5 0 2.5-1.6 1.7-3L14 9.2V5h1V3H9zm2 2h2v4.8l3.3 5.8c.2.4-.1.9-.6.9H8.3c-.5 0-.8-.5-.6-.9L11 9.8V5z"/></svg>`,

  // Docker - Official Whale with containers
  Docker: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#2496ED" d="M13 8.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm9 6h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm19.2 1.8c-.3-.2-1.4-.4-2.4-.1-.3-.6-.8-1.2-1.3-1.6l-.6.5c.5.5.8 1.1 1 1.7-1.1.7-3 1.2-4.5 1.2H2.2c-.4 1.7.3 3.5 1.7 4.7C6.1 24.3 12.3 24 16.5 21c3.7-2.6 5.5-6.1 5.7-6.2z"/></svg>`,

  // GitHub Actions - Blue workflow octocat glyph
  "GitHub Actions": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="#2088FF"/><path fill="#FFFFFF" d="M8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4-2h4v2h-4zm0 4h4v2h-4z"/></svg>`,

  // MLOps - Loop / CI-CD ML pipeline glyph
  MLOps: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0284C7" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A6 6 0 0 1 7.07 13H7a1 1 0 0 1 0-2h.07A6 6 0 0 1 11 7.07V7a1 1 0 0 1 2 0v.07A6 6 0 0 1 16.93 11H17a1 1 0 0 1 0 2h-.07A6 6 0 0 1 13 16.93z"/><circle cx="12" cy="12" r="2.5" fill="#0284C7"/></svg>`,

  // pytest - Beaker with checkmark
  pytest: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="#0A9EDC"/><path fill="#FFFFFF" d="M9.5 15.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z"/></svg>`,

  // Render - Official faceted chevron mark
  Render: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#14B8A6" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5-7 3.5-7-3.5 7-3.5zm-8 5.7l7 3.5v7l-7-3.5V10.5zm9 10.5v-7l7-3.5v7l-7 3.5z"/></svg>`,

  // PostgreSQL - Official Elephant silhouette
  PostgreSQL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#336791" d="M12 3c-4.4 0-8 3.4-8 7.6 0 3 1.8 5.6 4.5 6.8v3.6h2.5v-3.2c.3.1.7.1 1 .1s.7 0 1-.1v3.2h2.5v-3.6c2.7-1.2 4.5-3.8 4.5-6.8C20 6.4 16.4 3 12 3zm0 3c2.8 0 5 2.1 5 4.6 0 1.5-.8 2.9-2 3.8l-1.5-1.5c.3-.6.5-1.4.5-2.3 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .9.2 1.7.5 2.3L7 14.4c-1.2-.9-2-2.3-2-3.8C5 8.1 7.2 6 12 6z"/></svg>`,

  // Supabase - Official Green lightning bolt
  Supabase: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#3ECF8E" d="M11.6 2.3a1 1 0 0 1 1.8.6l-.8 8.1h7a1 1 0 0 1 .8 1.6l-9 10.4a1 1 0 0 1-1.8-.6l.8-8.1h-7a1 1 0 0 1-.8-1.6l9-10.4z"/></svg>`,
};

/**
 * Returns a data URI suitable for new Image().src in canvas rendering.
 */
export function getStackIconDataUri(name: string): string {
  const svg = STACK_SVGS[name] || STACK_SVGS.Python;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
