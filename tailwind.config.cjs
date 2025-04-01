/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#372C2E", // Dark brown
        secondary: "#DE9E48", // Bronze/gold
        tertiary: "#563727", // Deep brown
        "black-100": "#7A431D", // Warm brown
        "black-200": "#372C2E", // Darker brown
        "white-100": "#FFFFFF", // White for contrast
      },
      boxShadow: {
        card: "0px 35px 120px -15px #563727", // Updated shadow to match the brown tones
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background4_fix.png')",
      },
    },
  },
  plugins: [],
};
