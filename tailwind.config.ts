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
        primary: "#FF1600",
        secondary: "#C1BEB7",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        inter: ["var(--font-inter)"],
        questrial: ["var(--font-questrial)"],
        outfit: ["var(--font-outfit)"],
      },
      borderColor: {
        DEFAULT: '#C1BEB7',
    },
    },
  },
  plugins: [],
} satisfies Config;
