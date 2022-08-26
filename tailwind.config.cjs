/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColor': '#e9bf5c',
        'secColor': '#9c3c37',
      }
    },
  },
  plugins: [],
}
