const sass = require('sass');

global.compileCSS = async (filePath = '') => {
  const { css } = await sass.compileAsync(filePath, {
    quietDeps: true,
    logger: sass.Logger.silent,
  });

  return css;
};
