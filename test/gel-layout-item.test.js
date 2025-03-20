describe('gel-layout-item()', () => {
  it('creates a single layout group/row, this wraps individual layout items', async () => {
    const css = await global.compileCSS('test/data/gel-layout-item/t1.scss');

    expect(css).toMatchSnapshot();
  });
});
