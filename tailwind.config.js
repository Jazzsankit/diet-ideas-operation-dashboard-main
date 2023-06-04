/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: { 200: "#0F46B3", 100: "#F0F3FB" },
        primary: "#6CCFAE",
        secondary: "#F06E80",
        success: "#6CCFAE",
        danger: "#EE0202",
        warning: "#FECA1F",
        error: "#D92D20",
        gray: "#667085",
        white: "#FFFFFF",
        black: {
          100: "#222222",
          200: "#000000",
        },
      },
      fontFamily: {
        inter: {
          100: "Inter",
          200: "Inter",
          300: "Inter",
          400: "Inter",
          500: "Inter",
          600: "Inter",
          700: "Inter",
          800: "Inter",
          900: "Inter",
        },
      },
    },
  },
  plugins: [],
};
