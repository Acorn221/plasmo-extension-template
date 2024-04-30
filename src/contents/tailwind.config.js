/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/contents/**/*.tsx", "./src/components/**/*.tsx"],
  plugins: [require("daisyui")]
};
