module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {},
    colors: {
      purple: {
        100: '#EBE7FE',
        200: '#BFB1FB',
        300: '#9F8AF9',
        400: '#8369F7',
        500: '#6C4DF6',
        600: '#5B41CF',
        700: '#4A35A8',
        800: '#392982',
        900: '#281D5C',
      },
      white: '#FFF',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
}
