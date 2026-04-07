/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      navy: '#1B3A5C',
      teal: '#0D6E6E',
      gold: '#B8860B',
      dark: '#2D2D2D',
      lightTeal: '#E0F2F1',
      lightGray: '#F5F5F5',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
    },
  },
  plugins: [],
};
