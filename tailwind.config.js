module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.js'],
    options: {
      safelist: [/(from|via|to|border|bg|text)-(.*)-(\\d{1}0{1,2})/]
    }
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
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
          changed: '#2778FD',
          dark: '#1B1C1E',
          light: '#F4F9FF'
        },
        mainblue: '#2778FD',
        dark: '#1B1C1E',
        grey: "#EFF2F6",
      },
      width: {
        '96': '24rem',
      }
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
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
  ]
};
