/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        header: '#36413E',
        body: '#5D5E60',
      },
      textColor: {
        link: '#ffffff',
      },
      fontFamily: {
        sans: ['Niramit', 'Sans-serif'],
      },
    },
  },
  plugins: [],
}
