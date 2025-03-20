const sass = require('sass');

describe('gel-layout()', () => {
  it('creates a layout to wrap around items', async () => {
    const { css } = await sass.compileAsync('test/data/gel-layout/t1.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });

  it('creates a layout to wrap around items, with an optional whitespace adjustment', async () => {
    const { css } = await sass.compileAsync('test/data/gel-layout/t2.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });
});
