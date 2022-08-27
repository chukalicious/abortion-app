/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f9f9f0",
          100: "#f0eeef",
          200: "#dfdade",
          300: "#bdb7bb",
          400: "#978f94",
          500: "#7a6f72",
          600: "#645457",
          700: "#4d3f43",
          800: "#352c2f",
          900: "#221c1f",
        },
        cocoa: {
          50: "#fcfbf8",
          100: "#faf0df",
          200: "#f6d4bd",
          300: "#e9aa8c",
          400: "#ffcd70",
          500: "#cc5a3d",
          600: "#b13f28",
          700: "#8a2f1f",
          800: "#612117",
          900: "#3d150e",
        },
        beaver: {
          50: "#fafaf8",
          100: "#f6efe9",
          200: "#ebd4cb",
          300: "#d4b2a7",
          400: "#bb877c",
          500: "#a06658",
          600: "#854b3f",
          700: "#653931",
          800: "#462723",
          900: "#2c1916",
        },
      },
    },
  },
  plugins: [],
};
