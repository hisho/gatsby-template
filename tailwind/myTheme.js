/* eslint-disable @typescript-eslint/no-var-requires */
const { customizeObject, rangeObject, variables } = require('./index');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  screens: customizeObject(variables.breakpoints, (key, value) => [
    key,
    `${value / 16}em`,
  ]),
  fontFamily: variables.fontFamily,
  fontSize: customizeObject(rangeObject(10, 81, 1), (key, value) => [
    key,
    `${+value / 16}rem`,
  ]),
  lineHeight: customizeObject(rangeObject(100, 201, 5), (key, value) => [
    key / 100,
    value / 100,
  ]),
};
