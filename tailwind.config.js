/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      },
    },
  },
  plugins: [],
};
