/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        WhiteLight: '#80807a',
        GrayDark: "#F7F8FC",
        GrayLight: "#9FA2B4",
        BlackDark: "#252733",
        BlackLight: "#363740",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
