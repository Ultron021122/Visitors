/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
        modern: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}