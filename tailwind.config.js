// const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const customClass = plugin(function({addUtilities}){
  addUtilities({
    // CARD ANIMATIONS
    ".rotate-y-default":{
      transform:"rotateY(0deg)",
    },".rotate-y-180":{
      transform:"rotateY( 180deg )",
    },".preserve-3D":{
      transformStyle:"preserve-3d",
    },".perspective-1000":{
      perspective:"1000px",
    },


    // ACTIVE LINKS
    ".active":{
      padding:".3rem",
      borderRadius:"5px",
      background:"#68A378",
      fontSize:"1rem",
      fontWeight:"bold",
      color:"#fff",
      transform:"scale(1.15)",
    },
    ".navLink":{
      padding:".3rem",
      borderRadius:"5px",
      transform:"scale(1)",
      transition:"transform .5s"
    },
    ".navLinkHover":{
      padding:".3rem",
      borderRadius:"5px",
      background:"#68A378",
      transform:"scale(1.25)",
      transition:"background .2s, transform .5s"
    },


    // ICONS
    ".icon":{
      transform:"scale(1)",
      transition:"color .5s, transform .3s",
    },
    ".iconHover":{
      color:"#68A378!important",
      transform:"scale(1.25) translateY(-.5em)",
      transition:"color .5s, transform .3s",
    },


    // TITLES
    ".aboutTitle":{
      background:"#f44a3a",
      color:"#fff",
      padding:".2rem",
      borderRadius:"5px",
      letterSpacing:"0",
      transition:"letter-spacing .5s",
    }, ".aboutTitleHover":{
      letterSpacing:"0.3rem",
      transition:"letter-spacing .3s",
    },

    // 404 LINKS
    ".errorLink":{
      color:"white",
      fontSize:"1.2rem",
      padding:".5rem .8rem .5rem .8rem",
      borderRadius:"5rem",
      background:"#68A378",
      transition:"color .3s, background .3s",
    }, ".errorLinkHover":{
      color:"#68A378",
      background:"white",
      transition:"color .3s, background .3s",
    },


    // LINKS IN ABOUT SECTION
    ".aboutLink":{
      color:"#f44a3a",
      padding:"0 .3rem",
      borderRadius:"5px",
      background:"transparent",
      transition:"color .3s, background .2s",
    }, ".aboutLinkHover":{
      color:"white",
      background:"#f44a3a",
      borderRadius:"5px",
      transition:"color .3s, background .2s",
    },

    // SOCIAL LINKS IN ABOUT SECTION
    ".linkSocial":{
      color:"#f44a3a",
      padding:"0 .3rem",
      letterSpacing:"0.3rem",
      transition:"color .2s",
    }, ".linkSocialHover":{
      color:"white",
      transition:"color .2s",
    },

    // TITLE - EXPERIENCE SECTION
    ".xpTitle":{
      background:"#F59E0B",
      color:"white",
      borderRadius:"5px",
      padding:" .3rem .5rem",
    },

    // SPANS IN MAIN SECTION
    ".softSkillSpan":{
      transform: "rotate(0deg)",
      transition: "box-shadow .3s, transform .3s ease-in-out",
    },".softSkillSpanHover":{
      boxShadow: "0 3.2rem 12px -25px #2b2b2b",
      transform: "rotate(-5deg) translateY(-1em)",
      transition: "box-shadow .3s, transform .3s ease-in-out",
    },

    // FULLNAME IN FOOTER
    ".fullName":{
      padding:".1rem .3rem .1rem .3rem",
      transform: "rotate(0deg) scale(1)",
      transition: "transform .3s ease-in-out",
    },".fullNameHover":{
      background:"#68A378",
      padding:".1rem .3rem .1rem .3rem",
      borderRadius:"5px",
      transform: "rotate(-5deg) scale(1.15) translateX(-1em)",
      transition: "background .3s ease-in-out, transform .3s ease-in-out",
    },

    // LINING ANIMATION IN MAIN SECTION
    ".underlined-red":{
      background:"linear-gradient(to right, #f44a3a 0, transparent 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      transition:"background 0.5s",
    },
    ".underlined-yellow":{
      background:"linear-gradient(to right, #F59E0B 0, transparent 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      transition:"background 0.5s",
    },
    ".underlined-green":{
      background:"linear-gradient(to right, #68A378 0, transparent 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      transition:"background 0.5s",
    },
    ".underlined-blue":{
      background:"linear-gradient(to right, #4fb4f2 0, transparent 100%)",
      backgroundSize:"0 100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"0 1.2em",
      transition:"background 0.5s",
    },
    ".underlined-hover":{
      backgroundSize:"100% 100%",
      transition:"background 0.5s",
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
      'dark':'#404040',
      'secondary':'#68A378',
      'light':'#d6d6d6',
      'transparent':'transparent',
      'customYellow':'#F59E0B',
      'darkThemeText':'#fff',
      'lightThemeText':'#1E2836',
      'grey':'#8B949E',
      'black':'#000',
      'white':'#fff',
    },
    fontFamily:{
      'general': ['Raleway', 'sans-serif'],
    },
    screens: {
      'smMobile':'360px',
      'tablet': '640px',
      'md': '768px',
      'lg': '1024px',
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
      keyframes:{
        heartBeat: {
          '0%, 100%' : { transform:'scale(1)' },
          '50%' : { transform:'scale(1.15)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      },
      animation: {
        heartBeat:'heartBeat 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "hover", "group-hover", "group-focus"],
  },
  plugins: [customClass],
}
