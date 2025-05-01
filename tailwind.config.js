/** @type {import('tailwindcss').Config} */
export default {
  
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#003366',
        'dark-blue-light': '#004080',
        'primary-blue': {
          DEFAULT: '#004594',
          '50': '#e6f0fa',
          '100': '#c0d4f3',
          '200': '#99b7ec',
          '300': '#739be5',
          '400': '#4d7ee0',
          '500': '#2f66cc',
          '600': '#264f9f',
          '700': '#1e3973',
          '800': '#152646',
          '900': '#0b121a',
          '950': '#04080d',
        },
        'secondary': {
          DEFAULT: '#f5a623',
          '50': '#fff6e1',
          '100': '#ffedb8',
          '200': '#ffe18a',
          '300': '#ffd65c',
          '400': '#ffca2e',
          '500': '#f5a623',
          '600': '#c47e1b',
          '700': '#935913',
          '800': '#5f330b',
          '900': '#2c1a04',
          '950': '#140b02',
        },
        'accent': {
          DEFAULT: '#00bfa6',
          '50': '#e0f7f4',
          '100': '#b3ede6',
          '200': '#80e1d6',
          '300': '#4dd5c6',
          '400': '#26cbbd',
          '500': '#00bfa6',
          '600': '#00997f',
          '700': '#006953',
          '800': '#003926',
          '900': '#00120a',
          '950': '#000603',
        },
        'background': '#f9fafb',
        'text-primary': '#1f2937',
        'text-secondary': '#4b5563',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
      aspectRatio: {
        'video': '16 / 9',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '@media (max-width: 640px)': {
          '.swiper-slide-custom.swiper-slide-active .slide-inner-text': {
            '@apply opacity-100 animate-fade-in z-10': {},
          },
        },
      });
    },
  ],
  
};

