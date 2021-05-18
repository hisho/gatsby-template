/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const path = require('path');
const image = require('./createType');
const tailwindConfigType = require('./tailwindConfigType');
/* eslint-disable @typescript-eslint/no-var-requires */

exports.image = image;
exports.tailwindConfigType = tailwindConfigType;

exports.watch = () => {
  gulp.watch([`src/images/**/*.png`, `src/images/**/*.jpg`], image);
  gulp.watch(
    [
      `src/configs/variables.ts`,
      path.join(process.cwd(), 'tailwind.config.js'),
      'tailwind/**/*.js',
    ],
    tailwindConfigType
  );
};
