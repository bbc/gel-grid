describe('gel-output-grid()', () => {
  it('generates a collection of generic grid classes', async () => {
    const css = await global.compileCSS('test/data/gel-output-grid/t1.scss');

    expect(css).toMatchSnapshot();
  });

  it('generates a collection of generic grid classes, with all options enabled', async () => {
    const css = await global.compileCSS('test/data/gel-output-grid/t2.scss');

    expect(css).toMatchSnapshot();
  });
});
