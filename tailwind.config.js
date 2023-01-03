/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          light: '#FFB934',
          DEFAULT: '#FF8A36',
          dark: '#FC6820',
        },
        'blue': {
          light: '#1253a4',
          DEFAULT: '#05193D',
          dark: '#002855',
        },
        'white': '#FFFFFF',
        'black': '#000000',
        'off-white': '#FAF9F6',
      },
    },
  },
  plugins: [],
}
