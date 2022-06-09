import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import '../src/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

export const decorators = [
  (Story) => {
    const isDark = useDarkMode();

    useEffect(() => {
      document.querySelector('html').dataset.theme = isDark ? 'dark' : 'light';
    }, [isDark]);

    return (
      <div className="tabletSm|p-5">
        <Story />
      </div>
    );
  },
];
