/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
      },
      flexGrow: {
        2: "2",
      },
      backgroundImage: {
        winter: "url('/src/splaschblack.png')",
        subsribe_backgroundImage: "url('/src/subscribe-bckg.png')",
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
