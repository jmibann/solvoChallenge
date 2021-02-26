module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
    },
    extend: {
      borderColor: ['focus'],
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '2/6': '33.33%',
      '1/2': '50%',
      '3/4': '75%',
      '5/6': '83.33%',
      'full': '100%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
