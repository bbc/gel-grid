describe('gel-layout()', () => {
  it('creates a layout to wrap around items', async () => {
    const css = await global.compileCSS('test/data/gel-layout/t1.scss');

    expect(css).toMatchSnapshot();
  });

  it('creates a layout to wrap around items, with an optional whitespace adjustment', async () => {
    const css = await global.compileCSS('test/data/gel-layout/t2.scss');

    expect(css).toMatchSnapshot();
  });
});
