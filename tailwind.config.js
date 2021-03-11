// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
    options: {
      safelist: [],
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.mx-full': {
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
        },
        '.ml-full': {
          marginLeft: 'calc(50% - 50vw)',
        },
        '.mr-full': {
          marginRight: 'calc(50% - 50vw)',
        },
        '.px-full': {
          paddingLeft: 'calc(50vw - 50%)',
          paddingRight: 'calc(50vw - 50%)',
        },
        '.pl-full': {
          paddingLeft: 'calc(50vw - 50%)',
        },
        '.pr-full': {
          paddingRight: 'calc(50vw - 50%)',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }),
    plugin(({ addComponents }) => {
      const wrapperWidth = 1000 / 16;
      const containerWidth = 960 / 16;
      const desktopWrapperPadding = 40 / 16;
      const mobileWrapperPadding = 24 / 16;
      const newComponents = {
        '.wrapper': {
          maxWidth: `${wrapperWidth + desktopWrapperPadding * 2}rem`,
          paddingLeft: `${mobileWrapperPadding}rem`,
          paddingRight: `${mobileWrapperPadding}rem`,
          width: `100%`,
          marginLeft: `auto`,
          marginRight: `auto`,
          '@screen sm': {
            paddingLeft: `${desktopWrapperPadding}rem`,
            paddingRight: `${desktopWrapperPadding}rem`,
          },
        },
        '.container': {
          maxWidth: `${containerWidth}rem`,
          width: `100%`,
          marginLeft: `auto`,
          marginRight: `auto`,
        },
      };
      addComponents(newComponents);
    }),
  ],
};
