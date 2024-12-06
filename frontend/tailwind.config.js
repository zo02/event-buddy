// @type {import('tailwindcss').Config}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",  // Dodajemy naszą animację fadeIn
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },    // Początkowa przezroczystość
          "100%": { opacity: "1" },  // Końcowa przezroczystość
        },
      },
    },
  },
  plugins: [],
}

