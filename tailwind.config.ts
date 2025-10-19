import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Weinberg Color Palette
        wine: {
          50: '#fdf4f4',
          100: '#fce8e8',
          200: '#f9d5d6',
          300: '#f4b5b7',
          400: '#ec8a8e',
          500: '#df6168',
          600: '#c94350',
          700: '#a93440',
          800: '#8c2f3a',
          900: '#762c36',
          950: '#401417',
        },
        vineyard: {
          50: '#f7f6f3',
          100: '#ebe8e0',
          200: '#d9d2c2',
          300: '#c1b59d',
          400: '#ab9878',
          500: '#9c8561',
          600: '#8f7556',
          700: '#765f48',
          800: '#62503e',
          900: '#514335',
          950: '#2b221b',
        },
        gold: {
          50: '#fefcf3',
          100: '#fdf6e3',
          200: '#faecc2',
          300: '#f6dc97',
          400: '#f1c65a',
          500: '#ecb12f',
          600: '#dd9520',
          700: '#b8741a',
          800: '#945b1c',
          900: '#794b1c',
          950: '#44270d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
