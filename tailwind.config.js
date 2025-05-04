/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#014955',
        'dark-blue-light': '#004955',
        'primary-blue': {
          DEFAULT: '#014955',
          '50': '#e6f7f6',
          '100': '#bfe9e6',
          '200': '#99d9d5',
          '300': '#73c9c5',
          '400': '#4db9b5',
          '500': '#27a9a5',
          '600': '#1f8380',
          '700': '#17605b',
          '800': '#0f3a36',
          '900': '#061613',
          '950': '#010403',
        },
        'secondary': {
          DEFAULT: '#1CD37F',
          '50': '#e6f9f0',
          '100': '#bff2d9',
          '200': '#99e9c1',
          '300': '#73e0aa',
          '400': '#4cd792',
          '500': '#26ce7b',
          '600': '#1fae63',
          '700': '#187c44',
          '800': '#104b26',
          '900': '#08260f',
          '950': '#031103',
        },
        'accent': {
          DEFAULT: '#017f67',
          '50': '#d9f0eb',
          '100': '#a6d9cc',
          '200': '#73c1ad',
          '300': '#40aa8e',
          '400': '#1d8f75',
          '500': '#017f67',
          '600': '#015f4d',
          '700': '#014032',
          '800': '#012117',
          '900': '#000a05',
          '950': '#000201',
        },
        'background': '#f9fcfa',
        'text-primary': '#0b2f26',
        'text-secondary': '#3a6b5a',
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
        'ticker': 'ticker 20s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'partnerOrbit': 'spinOrbit 20s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        spinOrbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        '.rtl .animate-ticker': {
          'animation-direction': 'reverse',
        },
      })
    },
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
