import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        metric: [
          "var(--font-metric)",
          "var(--font-display)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-engineering":
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(245, 158, 11, 0.2)",
        "glow-lg": "0 0 140px -30px rgba(245, 158, 11, 0.28)",
        "amber-sm": "0 4px 28px -6px rgba(245, 158, 11, 0.35)",
        "card-hover":
          "0 20px 40px -12px rgba(0,0,0,0.55), 0 0 30px -10px rgba(245,158,11,0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
