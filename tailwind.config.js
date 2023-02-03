/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { min: '0px', max: '770px' },
      md: { min: '760px', max: '1040px' },
      lg: { min: '1040px', max: '1200px' },
      xl: { min: '1200px' },
      sg: { min: '0px', max: '1200px' },
      s1040: { max: '1040px' },
      s1139: { max: '1139px' },
      s400: { max: '400px' },
      s760: { max: '760px' },
      s2000: { min: '2000px' },
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
