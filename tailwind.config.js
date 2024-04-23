/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f97316',
        secondary:'#053ef9',
        normal:'#053ef9'
      },
    },
  },
  plugins: [],
}