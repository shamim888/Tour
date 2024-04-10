/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tour: {
          blue: '#2597a1',
          green: '#1bae92'
        }
      }
    },
  },
  plugins: [],
}