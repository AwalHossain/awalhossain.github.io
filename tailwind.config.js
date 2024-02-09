// @see: https://tailwindcss.com/docs/configuration/
// @see: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Reminder! Tailwind can't recognize conditional classes when using purge.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
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
    require('daisyui')
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "white", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

};
