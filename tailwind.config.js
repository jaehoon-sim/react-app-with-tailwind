/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [join(__dirname, "./src/**/*.{js,jsx,ts,tsx}")],
  theme: {
    extend: {
      screens: {
        "3xl": "1650px",
      },
      width: {
        128: "40rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
