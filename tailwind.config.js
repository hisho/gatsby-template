// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

const {variables} = require('./src/configs/variables');
const plugin = require('tailwindcss/plugin');
const {colors} = require('tailwindcss/defaultTheme');
const _ = require('lodash');

function customizeObject($object, $func) {
  return Object.fromEntries(
    Object.entries($object).map(([key, value]) => $func(key, value))
  );
}

function rangeObject(start, end, step) {
  return _.range(start, end, step).reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
}

module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
    options: {
      safelist: [],
      keyframes: true,
    },
  },
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: customizeObject(variables.breakpoints, (key, value) => [key, `${value / 16}em`]),
    fontFamily: variables.fontFamily,
    fontSize: customizeObject(rangeObject(10, 81, 1), (key, value) => [key, `${+value / 16}rem`,]),
    lineHeight: customizeObject(rangeObject(100, 201, 5), (key, value) => [key / 100, value / 100]),
    extend: {
      spacing: customizeObject(rangeObject(0, 211), (key, value) => [key / 2, `${value * 2 / 16}rem`]),
      maxWidth: {
        ...customizeObject(rangeObject(0, 1201, 4), (key, value) => [key, `${+value / 16}rem`]),
        ...customizeObject(variables.breakpoints, (key, value) => [`screen-${key}`, `${value}px`])
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      colors: {
        ...colors,
        ...variables.colors,
      },
      borderColor: {
        ...colors,
        ...variables.colors,
      },
      fill: {
        ...colors,
        ...variables.colors,
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
        ':root': {
          ...customizeObject(variables.breakpoints, (key, value) => [`--breakpoint-${key}`, String(value)])
        }
      };
      addComponents(newComponents);
    }),
  ],
};
