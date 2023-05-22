/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        jelly: "jelly 0.5s",
      },
      keyframes: {
        jelly: {
          "25%": {
            transform: "scale(0.9, 1.1)",
          },

          "50%": {
            transform: "scale(1.1, 0.9)",
          },

          "75%": {
            transform: "scale(0.95, 1.05)",
          },
        },
      },
      colors: {
        "dark-100": "#202020",
        "dark-200": "#121212",
      },
      screens: {
        "-2xl": { max: "1535px" },
        // => @media (min-width: 640px) { ... }

        "-xl": { max: "1280px" },
        // => @media (min-width: 768px) { ... }

        "-lg": { max: "1024px" },
        // => @media (min-width: 1024px) { ... }

        "-md": { max: "768px" },
        // => @media (min-width: 1280px) { ... }

        "-sm": { max: "640px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
