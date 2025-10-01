import * as sass from 'sass';

global.compileCSS = async (filePath = '') => {
  const { css } = await sass.compileAsync(filePath, { loadPaths: ['./node_modules'] });

  return css;
};
