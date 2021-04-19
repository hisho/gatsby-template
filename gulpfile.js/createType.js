/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
/* eslint-disable @typescript-eslint/no-var-requires */

const image = (done) => {
  const images = glob.sync(`**/*.+(png|jpe?g)`, {
    ignore: `**/sp_*.+(png|jpe?g)`,
    cwd: path.resolve(process.cwd(), 'src/images'),
  });

  // console.log(images);
  fs.outputFileSync(
    `src/configs/images.ts`,
    `export const imagePaths = [
  ${images.map((n) => `"${n}",`).join('\n')}
] as const;`
  );
  done();
};

module.exports = image;
