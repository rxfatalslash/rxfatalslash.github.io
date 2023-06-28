/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      navbar:["10px 10px 50px rgba(0, 0, 0, 0.3)"],
      imagenes: ["10px 10px 50px rgba(0, 0, 0, 0.2)"],
    },
    extend: {
      backgroundColor: {
        proyectos: "#a8e4ff",
        containers: "#cff0ff",
        github: "#595858",
        instagram: "#833ab4",
        facebook: "#3b5998",
      },
      colors: {
        disabled: "#757778",
      },
      fontFamily: {
        "rising-sun": ["Rising Sun", "sans-serif"],
      },
    },
  },
  plugins: [],
};

