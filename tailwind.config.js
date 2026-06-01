/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bevan', 'serif'],
        body: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'heading-lg': ['12rem', { lineHeight: '0.85', fontWeight: '400' }],
        'heading-md': ['7rem', { lineHeight: '0.9', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
