import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    clearMocks: true,
    coverage: {},
    environment: 'jsdom',
    exclude: ['**/node_modules/**'],
    globals: true,
    setupFiles: ['./test/vitest-setup.mjs'],
  },
});
