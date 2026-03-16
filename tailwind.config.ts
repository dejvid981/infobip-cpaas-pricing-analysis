import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0D0F1A",
          card: "#161929",
          border: "#1E2235",
        },
        accent: {
          DEFAULT: "#FF6B00",
          light: "#FF8C38",
        },
        text: {
          primary: "#E8E9ED",
          muted: "#8B8FA3",
        },
        margin: {
          high: "#22C55E",
          medium: "#EAB308",
          low: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
