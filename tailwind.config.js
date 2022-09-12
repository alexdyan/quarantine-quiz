/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCE2DB",
        pink: {
          50: "#fff9fb",
          100: "#fff4f7",
          200: "#ffe3ec",
          300: "#ffd2e0",
          400: "#ffb1c8",
          500: "#ff8fb1",
          600: "#e6819f",
          700: "#bf6b85",
          800: "#99566a",
          900: "#7d4657",
        },
        plum: {
          50: "#fbf8fa",
          100: "#f7f1f6",
          200: "#ecdbe8",
          300: "#e0c6da",
          400: "#c99bbe",
          500: "#b270a2",
          600: "#a06592",
          700: "#86547a",
          800: "#6b4361",
          900: "#57374f",
        },
        purple: {
          50: "#f8f6fa",
          100: "#f2ecf4",
          200: "#ded0e5",
          300: "#cab4d5",
          400: "#a27cb5",
          500: "#7a4495",
          600: "#6e3d86",
          700: "#5c3370",
          800: "#492959",
          900: "#3c2149",
        },
      },
      fontFamily: {
        title: "Handlee",
        body: "Quicksand",
      },
    },
  },
  plugins: [],
};
