/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navbar: "10px 10px 50px rgba(0, 0, 0, 0.3)",
        imagenes: "10px 10px 50px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        "rising-sun": ["Rising Sun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
