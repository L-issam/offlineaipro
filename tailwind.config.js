/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          foreground: '#ffffff',
        },
        secondary: '#f1f5f9',
        accent: '#7c3aed',
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        background: '#ffffff',
        foreground: '#111827',
        border: '#e2e8f0',
        destructive: '#ef4444',
      },
    },
  },
  plugins: [],
}