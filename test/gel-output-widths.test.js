const sass = require('sass');

describe('gel-output-widths()', () => {
  it('outputs a collection of grid-agnostic width utility classess', async () => {
    const { css } = await sass.compileAsync('test/data/gel-output-widths/t1.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });
});
