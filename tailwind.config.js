module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#233877',
          dark: '#15224A',
          footer: '#131E43'
        },
        secondary: {
          orange: '#FF2D20',
          darkorange: '#EA281C',
          lightblue: '#00EBF9'
        }
      },
      width: {
        'custom': '30%',
        'custom-sidebar': '70%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
