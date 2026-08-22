import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        porcelain: "#F1EBE0",
        lavender: "#9A68C0",
        "lavender-mist": "#F2E9FA",
        plum: "#45186D",
        "plum-deep": "#2B0F49",
        ink: "#1D1129",
        gold: "#C6A15B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.14em",
        wide3: "0.22em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
