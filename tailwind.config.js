/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1750px",
    },
    extend: {
      colors: {
        lightReadCTA: "hsl(356, 100%, 66%)",
        veryLightRedHoverBG: "hsl(355, 100%, 74%)",
        veryDarkBlue: "hsl(208, 49%, 24%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        veryDarkGrayishBlueBody: "hsl(207, 13%, 34%)",
        veryDarkBlackBlue: "hsl(240, 10%, 16%)",
        veryLightRed: "hsl(13, 100%, 72%)",
        lightRed: "hsl(353, 100%, 62%)",
        veryDarkGrayBlue: "hsl(237, 17%, 21%)",
        veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        heading: ["Overpass", "serif"],
      },
    },
  },
  plugins: [],
};
