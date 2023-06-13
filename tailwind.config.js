/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      imagenes: ["10px 10px 50px rgba(0, 0, 0, 0.2)"],
    },
    extend: {
      backgroundColor: {
        proyectos: "#a8e4ff",
      },
    },
  },
  plugins: [],
};

