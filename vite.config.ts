/* eslint-disable import/no-default-export */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const IS_TESTING = process.env.NODE_ENV === 'test';

export default defineConfig({
  plugins: [react({ fastRefresh: !IS_TESTING })],
  cacheDir: 'node_modules/.cache/vite',
  mode: IS_TESTING ? 'test' : undefined,
  server: {
    hmr: !IS_TESTING,
    port: 8080,
  },
  logLevel: IS_TESTING ? 'silent' : 'info',
  optimizeDeps: {
    include: [
      '@storybook/expect',
      '@storybook/testing-react',
      '@testing-library/jest-dom',
      '@testing-library/react',
      'jest-mock',
    ],
  },
});
