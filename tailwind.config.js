/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",
  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors:{
      'bgblue':"#f6f8fa",
      'primary':"#152f2e",
      'secondary':"#00b8bb",
      'teritiary':"#e8fbfb",
      'navbar-color':"#347976",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    }
  },
  plugins: [],
}

