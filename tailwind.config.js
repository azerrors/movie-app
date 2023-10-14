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
      },
      animation: {
        moveInLeft: "moveInLeft 2s",
        moveInRight: "moveInRight 2s",
      },
      colors: {
        primary: "#040918",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
