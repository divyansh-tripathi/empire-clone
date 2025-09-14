/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
      fontFamily: {
        kurale: ["Kurale", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        hindi: ["Tiro Devanagari Hindi", "serif"],
        vesper: ["Vesper Libre", "serif"],
      },
    },
  },
  plugins: [],
}

