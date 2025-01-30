import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "400px",

      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1700px",

      "4xl": "1880px",
    },
    extend: {
      colors: {
        primary: "#3F9EB7",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
