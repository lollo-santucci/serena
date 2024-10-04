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
        'manuka-bold': ['var(--manuka-bold)', 'sans-serif'],
        'messina-bold': ['var(--messina-bold)', 'sans-serif'],
        'messina-semi-bold': ['var(--messina-semi-bold)', 'sans-serif'],
        'messina-light': ['var(--messina-light)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const md = theme('screens.md')

      const newUtilities = {
        '.text-logo-bg': {
          fontSize: '90px',
          [`@media (min-width: ${md})`]: { fontSize: '250px' },
        },
        '.text-logo-sm': {
          fontSize: '40px',
          [`@media (min-width: ${md})`]: { fontSize: '40px' },
        },
        '.text-logo-tag-bg': {
          fontSize: '80px',
          [`@media (min-width: ${md})`]: { fontSize: '180px' },
        },
        '.text-logo-tag-sm': {
          fontSize: '30px',
          [`@media (min-width: ${md})`]: { fontSize: '30px' },
        },
        '.text-nav-bg': {
          fontSize: '40px',
          [`@media (min-width: ${md})`]: { fontSize: '40px' },
        },
        '.text-nav-sm': {
          fontSize: '22px',
          [`@media (min-width: ${md})`]: { fontSize: '22px' },
        },
        '.text-h1': {
          fontSize: '90px',
          [`@media (min-width: ${md})`]: { fontSize: '112px' },
        },
        '.text-h2': {
          fontSize: '30px',
          [`@media (min-width: ${md})`]: { fontSize: '80px' },
        },
        '.text-h3': {
          fontSize: '30px',
          [`@media (min-width: ${md})`]: { fontSize: '64px' },
        },
        '.text-h4': {
          fontSize: '30px',
          [`@media (min-width: ${md})`]: { fontSize: '48px' },
        },
        '.text-h5': {
          fontSize: '30px',
          [`@media (min-width: ${md})`]: { fontSize: '40px' },
        },
        '.text-base': {
          fontSize: '18px',
          [`@media (min-width: ${md})`]: { fontSize: '32px' },
        },
        '.text-sm': {
          fontSize: '18px',
          [`@media (min-width: ${md})`]: { fontSize: '22px' },
        },
        '.text-xs': {
          fontSize: '12px',
          [`@media (min-width: ${md})`]: { fontSize: '18px' },
        },
        '.text-xxs': {
          fontSize: '8px',
          [`@media (min-width: ${md})`]: { fontSize: '12px' },
        },
      }

      addUtilities(newUtilities)
    }),
  ],
};

export default config;
