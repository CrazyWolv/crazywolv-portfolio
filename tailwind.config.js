const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const customClass = plugin(function({addUtilities}){
  addUtilities({
    ".rotate-y-default":{
      transform:"rotateY(0deg)",
    },
    ".rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".rotate-y-360":{
      transform:"rotateY(360deg)",
    },
    ".preserve-3D":{
      transformStyle:"preserve-3d",
    },
    ".perspective-1000":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
    },
    ".cubic-bezier":{
      transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    }
  })
})

module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    colors:{
      colors,
      'dark':'#404040',
      'secondary':'#68A378',
      'light':'#C6C6C6',
      'transparent':'transparent',
      'customYellow':'#F59E0B'
    },
    fontFamily:{
      'general': ['Raleway', 'sans-serif'],
    },
    extend: {
      spacing: {
        '100px':'100px',
        'logo':'150px',
        '11':'2.75rem',
        '12':'2.85rem',
        '15':'3.15rem'
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
  plugins: [customClass],
}
