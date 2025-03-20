const sass = require('sass');

describe('gel-layout-item()', () => {
  it('creates a single layout group/row, this wraps individual layout items', async () => {
    const { css } = await sass.compileAsync('test/data/gel-layout-item/t1.scss', { quietDeps: true, logger: sass.Logger.silent });

    expect(css).toMatchSnapshot();
  });
});
