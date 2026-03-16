import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        cta: {
          DEFAULT: "var(--cta)",
          foreground: "var(--cta-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 14px 36px -22px rgba(42, 36, 64, 0.22)",
        "card-hover": "0 22px 52px -24px rgba(42, 36, 64, 0.28)",
        button: "0 12px 24px -18px rgba(107, 196, 140, 0.65)",
      },
      fontFamily: {
        heading: [
          "Baskerville",
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          '"Book Antiqua"',
          "Georgia",
          "serif",
        ],
        sans: [
          '"Avenir Next"',
          "Avenir",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
};

export default config;
