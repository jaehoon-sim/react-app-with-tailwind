/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
    content: [join(__dirname, "./src/**/*.{js,jsx,ts,tsx}")],
    theme: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar")],
    variants: {
        scrollbar: ["rounded"],
    },
};
