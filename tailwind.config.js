const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    colors:{
      'dark':'#404040',
      'secondary':'#68A378',
      'light':'#C6C6C6',
      'transparent':'transparent',
      'white':'white',
      'black':'black',
      'yellow':'#F59E0B'
    },
    fontFamily:{
      'display': ['Raleway', 'sans-serif'],
      'body':['Raleway', 'sans-serif'],
    },
    extend: {
      spacing: {
        '100px':'100px',
      },
      borderRadius:{
        '4xl':'2rem',
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
}
