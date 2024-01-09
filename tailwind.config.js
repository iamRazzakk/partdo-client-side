/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        salsa: ["Salsa", "cursive"],
      },
      // dropShadow: {
      //   '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      //   '4xl': [
      //     '0 35px 35px rgba(0, 0, 0, 0.25)',
      //     '0 45px 65px rgba(0, 0, 0, 0.15)'
      //   ]
      // },
    },
  },
  plugins: [require("daisyui")],
};

