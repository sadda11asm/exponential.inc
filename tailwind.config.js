const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      display: ['Rubik', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'google-office': "url('/src/images/google-office.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
      colors: {
        primary: {
          lighter: '#c8a3b5',
          default: '#2f4e68',
          darker: '#f96d6d'
        }
      }
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: []
};
