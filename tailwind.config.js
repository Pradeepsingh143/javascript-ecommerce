/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#008060',
        'white' : '#fff',
        'black': '#242B2E',
        'primary' : 'var(--primary)',
        'white' : 'var(--white)',
        'black': 'var(--black)',
      },
    },
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1020px',
        '2xl': '1020px',
      },
    }
  },
  plugins: [],
}
