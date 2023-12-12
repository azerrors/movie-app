/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveInLeft: {
          "0%": { transform: "translateX(-50%)" },
          "80%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0)" },
        },
        moveInRight: {
          "0%": { transform: "translateX(50%)" },
          "80%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0)" },
        },
        showOn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 2s",
        moveInRight: "moveInRight 2s",
        showOn: "showOn 1s",
      },
      colors: {
        primary: "#040918",
        secondary: "#232D3F",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
