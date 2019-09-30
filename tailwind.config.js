module.exports = {
  theme: {
    fontFamily: {
      'sans': 'heebo, -apple-system, BlinkMacSystemFont',
    },
    colors: {
      white: '#fff',
      gray: {
        300: '#E2E8F0',
        400: '#F2F0F6',
        500: '#C8C6D5',
        600: '#718096',
        700: '#4A5568',
        800: '#A09BB6'
      },
      blue: {
        500: '#1F0E93',
      },
      red: {
        500: '#D23244',
      },
      orange: {
        300: '#FFEEEE',
        400: '#EC4F4F',
        500: '#F86B27'
      },
      purple: {
        500: '#3535C7',
      },

    },
    extend: {
      boxShadow: {
        input: 'inset 0px 0px 1px rgba(46, 32, 139, 0.23913)'
      }
    }
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
    })
  ]
}