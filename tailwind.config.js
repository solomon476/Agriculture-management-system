/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16A34A',
          hover: '#15803D',
          light: '#DCFCE7',
        },
        secondary: {
          DEFAULT: '#D97706',
          hover: '#B45309',
        },
        accent: '#EAB308',
        success: '#22C55E',
        warning: {
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        danger: {
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
        info: '#3B82F6',
        surface: '#FFFFFF',
        'bg-surface-hover': '#F1F5F9',
        border: '#E2E8F0',
        muted: '#64748B',
        base: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
