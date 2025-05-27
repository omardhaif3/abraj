/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#bc8a5f',
        'secondary': '#e7bc91',
        'light-1': '#f3d5b5',
        'light-2': '#ffedd8',
        'light-3': '#ffedd8',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
