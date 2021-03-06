//Tailwindの自作classを生成するプラグイン
const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const variables = require('./src/data/variables.json');
const _ = require('lodash');

function customizeObject($object, $func) {
  return Object.fromEntries(Object.entries($object).map(([key, value]) => $func(key, value)));
}

function rangeObject(start, end, step) {
  return _.range(start, end, step).reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
}

function makeWhiteList($key) {
  return [$key, ...Object.keys(variables.breakpoints).map((n) => `${n}:${$key}`)];
}
const whiteList = [...makeWhiteList('block'), ...makeWhiteList('hidden')];

module.exports = {
  target: [
    'ie11',
    {
      objectFit: 'default',
      objectPosition: 'default',
      position: 'default',
    },
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    // applyComplexClasses: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['./src/**/*.ts', './src/**/*.tsx'],
    options: {
      whitelist: whiteList,
    },
  },
  theme: {
    screens: customizeObject(variables.breakpoints, (key, value) => [key, `${value / 16}em`]),
    fontFamily: variables.fontFamily,
    zIndex: variables.zIndex,
    fontSize: customizeObject(rangeObject(10, 80, 2), (key, value) => [key, `${+value / 16}rem`]),
    extend: {
      spacing: customizeObject({ ..._.range(0, 101) }, (key, value) => [key, `${(value * 4) / 16}rem`]),
      colors: variables.colors,
      maxWidth: customizeObject(variables.breakpoints, (key, value) => [`screen-${key}`, `${value}px`]),
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
      const wrapperWidth = variables.breakpoints.lg / 16;
      const containerWidth = variables.breakpoints.md / 16;
      const wrapperPadding1 = 40 / 16;
      const wrapperPadding2 = 24 / 16;
      const newComponents = {
        '.wrapper': {
          maxWidth: `${wrapperWidth + wrapperPadding2 * 2}rem`,
          paddingLeft: `${wrapperPadding2}rem`,
          paddingRight: `${wrapperPadding2}rem`,
          width: `100%`,
          marginLeft: `auto`,
          marginRight: `auto`,
        },
        '.container': {
          maxWidth: `${containerWidth + wrapperPadding2 * 2}rem`,
          width: `100%`,
          paddingTop: `${50 / 16}rem`,
          paddingBottom: `${50 / 16}rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
          '@screen sm': {
            paddingLeft: `${wrapperPadding2}rem`,
            paddingRight: `${wrapperPadding2}rem`,
            paddingTop: `${100 / 16}rem`,
            paddingBottom: `${100 / 16}rem`,
          },
        },
      };
      addComponents(newComponents);
    }),
  ],
  important: true,
  corePlugins: {
    container: false,
  },
  variants: ['responsive', 'hover', 'focus'],
};
