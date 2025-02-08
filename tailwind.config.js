/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#9694FF",
      secondary: "#3D3BF3",
      tertiary: "#FF2929",
      white: "#ffffff",
      dark: "#0f172a",
      light: "#475569"
    },
    extend: {
      fontFamily: {
        "krona one": ["Krona One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        chauphilomeneone: ["Chau Philomene One", "sans-serif"],
      },
    },
    plugins: [],
  },
};
