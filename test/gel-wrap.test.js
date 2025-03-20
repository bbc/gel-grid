const sass = require('sass');

describe('gel-wrap()', () => {
  it('supports a 1008px width by default', async () => {
    const { css } = await sass.compileAsync('test/data/gel-wrap/t1.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });

  it('adds box-sizing properties when box-sizing is enabled', async () => {
    const { css } = await sass.compileAsync('test/data/gel-wrap/t2.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });

  it('increases to a 1280px width when the 1280 breakpoint is enabled', async () => {
    const { css } = await sass.compileAsync('test/data/gel-wrap/t3.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });
});
