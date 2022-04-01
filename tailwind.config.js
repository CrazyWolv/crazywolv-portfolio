// const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const customClass = plugin(function({addUtilities}){
  addUtilities({
    ".rotate-y-default":{
      transform:"rotateY(0deg)",
    },
    ".rotate-y-180":{
      transform:"rotateY( 180deg )",
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
    },
    ".active":{
      fontWeight:"bold",
      color:"#68A378",
      textTransform:"uppercase",
    },
    ".accentOn":{
      background:"red",
      borderRadius:"10px",
      color:"white",
      padding:"2px 5px",
      marginTop:"1rem",
    },
    ".accentOnHover":{
      transform:"scale(1.1) rotate(180deg)",
      transition:"transform 0.5s",
    },


    ".underlined-red":{
      background:"linear-gradient(to right, transparent 0, #f44a3a 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      marginLeft:"0",
      transition:"background margin 0.5s",
    },
    ".underlined-yellow":{
      background:"linear-gradient(to right, transparent 0, #F59E0B 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      marginLeft:"0",
      transition:"background margin 0.5s",
    },
    ".underlined-green":{
      background:"linear-gradient(to right, transparent 0, #68A378 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      marginLeft:"0",
      transition:"background margin 0.5s",
    },
    ".underlined-blue":{
      background:"linear-gradient(to right, transparent 0, #4fb4f2 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      marginLeft:"0",
      transition:"background margin 0.5s",
    },
    ".underlined-hover":{
      backgroundSize:"100% 100%",
      marginLeft:"2.5rem",
      transition:"margin 0.5s",
    },
    ".underlined-bold":{
      backgroundPosition:"0 -0.3em"
    },
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
      // colors,
      'dark':'#404040',
      'secondary':'#68A378',
      'light':'#C6C6C6',
      'transparent':'transparent',
      'customYellow':'#F59E0B',
      'darkThemeText':'#95A2B2',
      'lightThemeText':'#1E2836',
      'grey':'#8B949E',
      'black':'#000',
    },
    fontFamily:{
      'general': ['Raleway', 'sans-serif'],
    },
    screens: {
      'smMobile':'360px',
      'tablet': '640px',
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
    display: ["responsive", "hover", "group-hover", "group-focus"],
  },
  plugins: [customClass],
}
