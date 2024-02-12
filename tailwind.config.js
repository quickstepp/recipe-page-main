/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nutmeg: "#854632", //h2 & nutrit. table right text
        "dark-raspberry": "#7b284f", //Preparation time
        eggshell: "#f3e6d8", //Background
        "rose-white": "#fff5fa", //Box Preparation
        "light-grey": "#e4ded8", //spacers
        "wenge-brown": "#5f574e", //Text
        "dark-charcoal": "#302d2c", //Simple Omelette ...
      },
      fontFamily: {
        "young-serif": ["YoungSerif"],
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
