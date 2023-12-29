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
        moveInTop: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "80%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        moveToTop: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "100%": { transform: "translateY(50%)", opacity: "1" },
        },
        moveInBottom: {
          "0%": { transform: "translateY(150%)", opacity: "0" },
          "80%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 2s",
        moveInRight: "moveInRight 2s",
        moveInBottom: "moveInBottom .5s ",
        moveInTop: "moveInTop .5s",
        moveToTop: "moveToTop .5s",
        showOn: "showOn 1s",
      },
      colors: {
        primary: "#040918",
        secondary: "#030c16",
        tertiary: "#07101b",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// #070f19
// #07101b
