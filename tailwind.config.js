module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/component/**/*.js',
    './docs/**/*.html',
    './docs/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif']
    },
    extend: {
      width: {
        '1/5': '20%',
        '3/5': '60%'
      },
      colors: {
        'brown-soft': '#6B4F4F',
        'cream-skin': '#EED6C4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
