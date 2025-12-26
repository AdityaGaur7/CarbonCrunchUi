/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        background: '#14141F',
        card: '#1F1F2E',
        primary: '#8B3DFF',
        secondary: '#5C24FF',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #B936F5 0%, #5C24FF 100%)',
      }
    },
  },
  plugins: [],
}
