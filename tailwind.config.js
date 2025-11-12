/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#44155B',
        secondary: '#E42F1C',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        nunitoSans: ['Nunito Sans', 'sans-serif'], // custom name: actual font
      },
    },
  },
  plugins: [],
};