/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./contents/**/*.tsx', './components/**/*.tsx'],
  plugins: [require('daisyui')],
  compilerOptions: {
    baseUrl: 'src/',
  },
};
