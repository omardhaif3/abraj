/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#3931af',
        'secondary': '#3931af',
        'light-1': '#f5ebe0',
        'light-2': '#d6ccc2',
        'light-3': '#edede9',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
