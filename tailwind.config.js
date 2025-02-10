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
      },
      fontFamily: {
        'courier': ['"Courier New"', 'monospace'],
        'times': ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
