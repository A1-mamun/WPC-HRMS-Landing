import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "32px"],
      "4xl": ["32px", "38px"],
      "5xl": ["40px", "48px"],
      "6xl": ["48px", "58px"],
      "7xl": ["64px", "74px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        primary: "#3F9EB7",
        indigo: "#251E4E",
        accent: "#ECEEFF",
        bgprimary: "#E6F0FA",
        "primary-20": "#3F9EB72E",
        "dark-gray": "#333333",
        "sky-15": "#3F9EB726",
        "dark-indigo": "#1E183E",
        "dark-indigo-70": "#1E183EB3",
        "deep-indigo": "#1D173D",
        "light-indigo": "#3A2F79",
        "light-mint-green": "#b2fab4",
        "pastel-turquoise": "#a7ffeb",
        "light-peach": "#ffccbc",
        "white-70": "#FFFFFFB3",
        "off-white": "#FCFCFC",
        "ice-blue": "#EDF9FC",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
export default config;
