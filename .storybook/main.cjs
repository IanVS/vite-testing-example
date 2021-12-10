const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

const IS_TESTING = process.env.NODE_ENV === 'test';

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    const plugins = [
      ...config.plugins.filter((plugin) => {
        return !(Array.isArray(plugin) && plugin[0].name === 'vite:react-babel');
      }),
      reactPlugin({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        fastRefresh: !IS_TESTING,
      }),
    ];

    return {
      ...config,
      plugins,
      // Use our standard cache dir, to make it easy to clear
      cacheDir: path.resolve(__dirname, '../node_modules/.cache/vite'),
      optimizeDeps: {
        ...config.optimizeDeps,
        // Entries are specified relative to the root
        entries: [`${path.relative(config.root, path.resolve(__dirname, '../src'))}/**/*.stories.tsx`],
        include: [...(config.optimizeDeps?.include ?? [])],
      },
    };
  },
};
