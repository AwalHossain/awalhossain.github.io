// @see: https://tailwindcss.com/docs/configuration/
// @see: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Reminder! Tailwind can't recognize conditional classes when using purge.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Playfair Display",
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        'custom': ['"Playfair Display"', 'serif'],
        'custom2': ['"Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'custom': '50% 50% 50% 50% / 5% 5% 5% 5%',
      },
      rotate: {
        '140': '140deg',
      },
      boxShadow: {
        // The shadow-card class that is used for Cards.
        // @see: https://tailwindcss.com/docs/box-shadow
        card: '0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #c04de2, #340c7f)',
        'custom-dark-gradient': 'linear-gradient(to bottom right, rgb(3 7 18), rgb(3 7 18))',
      },
      // Tailwinds typography customization
      // @see: https://github.com/tailwindlabs/tailwindcss-typography#customization
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: '#0FF',
            a: {
              color: theme('colors.red.600'),
              '&:hover': {
                color: theme('colors.red.500'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/typography'),
  ],

};
