/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./componants/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
      colors: {
        primary: "#14B8A6",

      },
      screens: {
        bigxl: "1920px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
