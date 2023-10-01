/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/popup/**/*.tsx', './src/components/**/*.tsx'],
  plugins: [require('daisyui')],
  compilerOptions: {
    baseUrl: 'src/',
  },
};
