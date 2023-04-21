/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b-white-transparent":
          "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1))",
      },
      colors: {
        orange: {
          light: "#FFB934",
          DEFAULT: "#FF8A36",
          dark: "#FC6820",
        },
        blue: {
          lightest: "#edf1fc",
          light: "#1253a4",
          DEFAULT: "#05193D",
          dark: "#002855",
        },
        white: "#FFFFFF",
        black: "#000000",
        "off-white": "#FAF9F6",
        gray: {
          lighter: "#DDDDDD",
          light: "#D3D3D3",
          DEFAULT: "#808080",
          dark: "#5A5A5A",
        },
        backdrop: "#000000e1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
