import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        porcelain: "#EFE3F5",
        lavender: "#A855D1",
        "lavender-mist": "#E9D9F7",
        plum: "#4E1480",
        "plum-deep": "#33105A",
        ink: "#1D1129",
        gold: "#D4A94A",
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
