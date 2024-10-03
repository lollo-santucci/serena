import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
      },
      fontFamily: {
        'manuka-bold': ['var(--manuka-bold)', 'sans-serif'],
        'messina-bold': ['var(--messina-bold)', 'sans-serif'],
        'messina-semi-bold': ['var(--messina-semi-bold)', 'sans-serif'],
        'messina-light': ['var(--messina-light)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;