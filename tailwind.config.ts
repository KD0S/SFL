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
        },

        fadeInOut: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        backgroundShift: {
          '0%': { backgroundPosition: '0px -1400px' },
          '20%': { backgroundPosition: '0px -1400px' },
          '100%': { backgroundPosition: 'center' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
        fadeInOut: 'fadeInOut 4s cubic-bezier(0.4, 0, 0.2, 1) 1 0.5s',
        backgroundShift: 'backgroundShift 3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      colors: {
        btnpurple: "#D33FE0"
      },
      fontFamily: {
        kelly: ['var(--font-kelly-slab)'],
        univers: ['var(--font-univers)']
      },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },

    },
  },
  plugins: []
};
export default config;
