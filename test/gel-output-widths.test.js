describe('gel-output-widths()', () => {
  it('outputs a collection of grid-agnostic width utility classess', async () => {
    const css = await global.compileCSS('test/data/gel-output-widths/t1.scss');

    expect(css).toMatchSnapshot();
  });
});
