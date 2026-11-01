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
        canvas: "#F4F3EE",
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F8F7F4",
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
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shimmer: "shimmer 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
