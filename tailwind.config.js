/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens : {
        'lg': '1150px',
      },
      colors: {
        primary: "#ff4800",
      },
      flexGrow: {
        2: "2",
      },
      backgroundImage: {
        winter: "url('/src/splaschblack.png')",
        // subsribe_backgroundImage: "url('/src/Assets/images/subscribe-bckg.png')",
        frameBrown: "url('/src/Assets/images/pageAbout/frameBrown.png')",
        frameGray: "url('/src/Assets/images/pageAbout/frameGray.png')",
        frameOrange: "url('/src/Assets/images/pageAbout/frameOrange.png')",
      },
      fontSize: {
        h1: "110px",
      },
      fontFamily: {
        main: ["Montserrat"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
