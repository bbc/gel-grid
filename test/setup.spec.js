const glob = require('glob');
const path = require('path');
const sassTrue = require('sass-true');

describe('Sass', () => {
  const sassTestFiles = glob.sync(
    path.resolve(process.cwd(), 'test/**/*.spec.scss'),
  );

  sassTestFiles.forEach((sassFile) => sassTrue.runSass(
    { describe, it },
    sassFile,
    { style: 'expanded', loadPaths: ['node_modules'] },
  ));
});
