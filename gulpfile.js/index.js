/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const image = require('./createType');
/* eslint-disable @typescript-eslint/no-var-requires */

exports.image = image;
exports.watch = () => {
  gulp.watch(
    [`src/images/**/*.png`, `src/images/**/*.jpg`, `src/images/**/*.jpeg`],
    image
  );
};
