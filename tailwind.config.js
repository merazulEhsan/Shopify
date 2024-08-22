/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#fd3d57",
        secondary: "#0989ff",
        ghostWhite: "#f6f9fc",
        whiteSmoke: "#f1f3f4",
        customBlack: "#0b1120",
        cardBlack: "#0f172a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
