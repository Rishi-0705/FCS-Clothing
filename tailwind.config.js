/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Anton', 'sans-serif'],
        'condensed': ['Barlow Condensed', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'focus-black': '#000000',
        'focus-gray': '#1a1a1a',
        'focus-silver': '#c0c0c0',
      },
      animation: {
        'geometric-pulse': 'geometric-pulse 4s infinite ease-in-out',
        'sporty-line': 'sporty-line 8s infinite linear',
        'metallic-shimmer': 'metallic-shimmer 2s infinite linear',
        'pulsing-ring': 'pulsing-ring 3s infinite ease-out',
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(45deg, #000, #1a1a1a, #000)',
        'silver-gradient': 'linear-gradient(45deg, #c0c0c0, #ffffff, #c0c0c0)',
      },
    },
  },
  plugins: [],
};