/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "oklch(var(--color-bg) / <alpha-value>)",
        surface: "oklch(var(--color-surface) / <alpha-value>)",
        border: "oklch(var(--color-border) / <alpha-value>)",
        fg: "oklch(var(--color-fg) / <alpha-value>)",
        "fg-muted": "oklch(var(--color-fg-muted) / <alpha-value>)",
        accent: "oklch(var(--color-accent) / <alpha-value>)",
        "accent-fg": "oklch(var(--color-accent-fg) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-atkinson)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-bricolage)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-azeret)", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Modular scale ~1.25, fluid display for marketing headings
        "display-lg": ["clamp(2.75rem, 6vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.25" }],
      },
      spacing: {
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
