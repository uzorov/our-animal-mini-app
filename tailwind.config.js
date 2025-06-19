/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D5D31",
        secondary: "#DFE7DC",
        accent: "#7E0D0D",
        softPink: "#F5E7E4",
        milk: "#FEFDF9",
        rose: "#F5E7E4",
        darkRed: "#7E0D0D"
      },
    },
    fontFamily: {
      body: ["Tahoma", "sans-serif"],
      heading: ['Bowler', 'serif'], 
    },
  },
  plugins: [],
}
