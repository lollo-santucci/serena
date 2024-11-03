import plugin from 'tailwindcss/plugin'
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
        'manuka-bold': ['var(--font-manuka-bold)', 'sans-serif'],
        'messina-bold': ['var(--font-messina-bold)', 'sans-serif'],
        'messina-semi-bold': ['var(--font-messina-semi-bold)', 'sans-serif'],
        'messina-light': ['var(--font-messina-light)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const lg = theme('screens.lg')

      const newUtilities = {
        '.text-logo-bg': {
          fontSize: '110px',
          [`@media (min-width: ${lg})`]: { fontSize: '250px' },
        },
        '.text-logo-sm': {
          fontSize: '40px',
          [`@media (min-width: ${lg})`]: { fontSize: '40px' },
        },
        '.text-logo-tag-bg': {
          fontSize: '90px',
          [`@media (min-width: ${lg})`]: { fontSize: '180px' },
        },
        '.text-logo-tag-sm': {
          fontSize: '30px',
          [`@media (min-width: ${lg})`]: { fontSize: '30px' },
        },
        '.text-nav-bg': {
          fontSize: '40px',
          [`@media (min-width: ${lg})`]: { fontSize: '40px' },
        },
        '.text-nav-sm': {
          fontSize: '22px',
          [`@media (min-width: ${lg})`]: { fontSize: '22px' },
        },
        '.text-h1': {
          fontSize: '90px',
          [`@media (min-width: ${lg})`]: { fontSize: '112px' },
        },
        '.text-h2': {
          fontSize: '50px',
          [`@media (min-width: ${lg})`]: { fontSize: '80px' },
        },
        '.text-h3': {
          fontSize: '30px',
          [`@media (min-width: ${lg})`]: { fontSize: '40px' },
        },
        '.text-h4': {
          fontSize: '30px',
          [`@media (min-width: ${lg})`]: { fontSize: '48px' },
        },
        '.text-h5': {
          fontSize: '18px',
          [`@media (min-width: ${lg})`]: { fontSize: '28px' },
        },
        '.text-base': {
          fontSize: '18px',
          [`@media (min-width: ${lg})`]: { fontSize: '26px' },
        },
        '.text-sm': {
          fontSize: 'clamp(13px, 3vw, 18px)',
          [`@media (min-width: ${lg})`]: { fontSize: '22px' },
        },
        '.text-xs': {
          fontSize: '12px',
          [`@media (min-width: ${lg})`]: { fontSize: '12px' },
        },
        '.text-xxs': {
          fontSize: '10px',
          [`@media (min-width: ${lg})`]: { fontSize: '12px' },
        },
      }

      addUtilities(newUtilities)
    }),
  ],
};

export default config;
