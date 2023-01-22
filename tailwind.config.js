/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { min: '0px', max: '770px' },
      md: { min: '770px', max: '1040px' },
      lg: { min: '1040px', max: '1200px' },
      xl: { min: '1200px' },
    },
    extend: {},
  },
  plugins: [],
};
