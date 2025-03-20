const sass = require('sass');

describe('gel-output-grid()', () => {
  it('generates a collection of generic grid classes', async () => {
    const { css } = await sass.compileAsync('test/data/gel-output-grid/t1.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });

  it('generates a collection of generic grid classes, with all options enabled', async () => {
    const { css } = await sass.compileAsync('test/data/gel-output-grid/t2.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });
});
