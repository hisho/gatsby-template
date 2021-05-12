/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const resolveConfig = require('tailwindcss/resolveConfig');
const config = require('../tailwind.config');
/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindConfigType = (done) => {
  const fullConfig = resolveConfig(config).theme;

  //fullConfigのthemeから型にするリスト
  const list = [
    'zIndex',
    'fontSize',
    'lineHeight',
    'colors',
    'boxShadow',
    'dropShadow',
    'fontFamily',
    'fontWeight',
    'letterSpacing',
    'maxWidth',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
  ];

  //fullConfigから上記のlistを抽出
  const filterFullConfig = Object.fromEntries(
    Object.entries(fullConfig).filter(([key]) => {
      return list.find((n) => n === key);
    })
  );

  //translateをspacingにリネームしてマージさせる
  const configs = {
    ...filterFullConfig,
    spacing: fullConfig.translate,
  };

  fs.outputFileSync(
    `src/configs/tailwind.ts`,
    `export const tailwindConfig = ${JSON.stringify(configs)} as const;`
  );
  done();
};

module.exports = tailwindConfigType;
