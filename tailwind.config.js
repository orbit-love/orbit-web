module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      boxShadow: {
        bottom: '0px 2px 0px rgba(0, 0, 0, 0.15)',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          form: {
            p: {
              margin: '0',
            },
          },
          color: theme('colors.gray.900'),
          a: {
            color: theme('colors.purple.600'),
            '&:hover': {
              color: theme('colors.purple.600'),
            },
            textDecoration: null,
          },
          blockquote: {
            background: theme('colors.gray.100'),
            borderLeftColor: theme('colors.purple.400'),
            padding: '1rem 1.25rem',
            p: {
              color: theme('colors.gray.600'),
              '&:first-of-type': {
                marginTop: 0,
              },
              '&:last-of-type': {
                marginBottom: 0,
              },
              '&:first-of-type::before': {
                content: "'' !important",
              },
              '&:last-of-type::after': {
                content: "'' !important",
              },
            },
          },
          strong: {
            color: 'inherit',
          },
        },
      },
    }),
    colors: {
      purple: {
        100: '#EBE7FE',
        200: '#BFB1FB',
        300: '#9F8AF9',
        400: '#775AF6',
        500: '#6C4DF6',
        600: '#5B41CF',
        700: '#4A35A8',
        800: '#392982',
        900: '#281D5C',
      },
      gray: {
        100: '#F1F2F3',
        200: '#D3D6DA',
        300: '#BABFC5',
        400: '#9BA3AB',
        500: '#68727D',
        600: '#4F565F',
        700: '#3A4045',
        800: '#2C3035',
        900: '#1E2124',
      },
      pink: {
        100: '#F7DEF5',
        200: '#EEBEEB',
        300: '#E391DE',
        400: '#D864D0',
        500: '#C832BE',
        600: '#A12899',
        700: '#7A1F74',
        800: '#541550',
        900: '#2E0B2C',
      },
      red: {
        100: '#FED8E3',
        200: '#FCB0C7',
        300: '#FA759E',
        400: '#F8447B',
        500: '#E61E50',
        600: '#BF1943',
        700: '#991435',
        800: '#730F28',
        900: '#4D0A1B',
      },
      orange: {
        100: '#FDE9D8',
        200: '#FBD3B1',
        300: '#F8B177',
        400: '#F59547',
        500: '#E17319',
        600: '#BA5F15',
        700: '#944C10',
        800: '#6E380C',
        900: '#472408',
      },
      green: {
        100: '#E1F5F1',
        200: '#BEE9E1',
        300: '#85D5C7',
        400: '#3DB39D',
        500: '#26927E',
        600: '#1C6B5D',
        700: '#155246',
        800: '#0E3830',
        900: '#0B2D26',
      },
      teal: {
        100: '#DAF6FB',
        200: '#B5ECF7',
        300: '#88E0F2',
        400: '#51D2EC',
        500: '#19C4E6',
        600: '#15A3BF',
        700: '#0F758A',
        800: '#0B5261',
        900: '#062B33',
      },
      blue: {
        100: '#DAE1FB',
        200: '#B6C3F7',
        300: '#91A4F3',
        400: '#718AEF',
        500: '#4C6CEB',
        600: '#3F5AC4',
        700: '#33489E',
        800: '#273778',
        900: '#1B2552',
      },
      aubergine: '#2a123f',
      denim: {
        200: '#A599CC',
        400: '#676080',
        600: '#2C224D',
        900: '#2a2734',
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
    require('@tailwindcss/typography'),
  ],
}
