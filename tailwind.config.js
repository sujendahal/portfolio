/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#002C54',
        second: '#C5001A',
        third: '#F1D3B2',
        fourth : '#232b2b'
      },
      fontFamily: {
        'courier': ['"Courier New"', 'monospace'],
        'times': ['"Times New Roman"', 'serif'],
        'poppins' : ["Poppins", 'sans-serif']
      },
    },
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
