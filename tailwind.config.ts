import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        butterscotch: "#E8B87B",
        cream: "#F5EEE4",
        rosewood: "#3E2415",
        maple: "#D9A76C",
        pickguard: "#0F0F0F",
        chrome: "#D6D6D6",
        sunburst: {
          amber: "#D99A3C",
          brown: "#6B3410",
          edge: "#1A0A05",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        sunburst:
          "radial-gradient(ellipse at center, #D99A3C 0%, #A85E1E 35%, #6B3410 65%, #1A0A05 100%)",
        "wood-grain":
          "repeating-linear-gradient(90deg, rgba(62,36,21,0.05) 0px, rgba(62,36,21,0.05) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(62,36,21,0.08) 0px, rgba(62,36,21,0.08) 2px, transparent 2px, transparent 23px)",
      },
      boxShadow: {
        chrome: "0 0 0 1px rgba(214,214,214,0.4), 0 10px 30px -12px rgba(0,0,0,0.5)",
        pickguard:
          "0 0 0 3px #F5EEE4, 0 0 0 4px #0F0F0F, 0 10px 30px -12px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
