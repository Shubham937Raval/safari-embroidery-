
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",
        accent: "#C5A059",
        "navy-dark": "#0A0A0B",
        "navy-deep": "#1a2a44",
        "gold-accent": "#c5a059",
      },
      fontFamily: {
        // High-end system font stack that looks like Inter/Roboto
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
