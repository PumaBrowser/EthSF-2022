/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    },
    screens: {
      xs: '300px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        gray: colors.zinc,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.yellow,
        brand: colors.slate
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};
