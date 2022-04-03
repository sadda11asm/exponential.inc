module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
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
          default: '#132c48',
          darker: '#f96d6d',
          changed: '#2f4e68', 
        },
        mainblue: '#2778FD'
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '1.5rem',
      DEFAULT: '36px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'big': '12px',
      'large': '36px',
      'verylarge': '50px',
      'largest': '70px'
    }
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
