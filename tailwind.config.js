/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      999: "999",
      9999: "9999",
      },
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