const path = require('path');

module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    'storybook-addon-mock/register',
    'storybook-dark-mode/register',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    };
    return config;
  },
};
