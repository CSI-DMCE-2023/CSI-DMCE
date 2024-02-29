/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm-max': { max: '400px' }, // Custom breakpoint for max-width: 400px
      },
    },
  },
  plugins: [],
};
