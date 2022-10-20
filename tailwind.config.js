/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        niceblue: "#0070f3",
        nicelightblue: "#0E86D4",
        nicewhite: "#eaeaea",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
