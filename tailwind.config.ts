import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2.5s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      colors: {
        btnpurple: "#D33FE0"
      },
      fontFamily: {
        kelly: ['var(--font-kelly-slab)'],
      },
    },
  },
  plugins: []
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cloud": "url('/cloudBg.jpeg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2.5s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      colors: {
        btnpurple: "#D33FE0"
      },
      fontFamily: {
        kelly: ['var(--font-kelly-slab)'],
      },
    },
  },
  plugins: []
};
export default config;
