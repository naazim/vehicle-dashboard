import { configure, addParameters } from '@storybook/react';
import vwTheme from './theme';
import '../src/scss/main.scss';

const components = require.context(
  '../src/components',
  true,
  /\.stories\.jsx?$/
);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

addParameters({
  viewport: {},
  options: {
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    showPanel: true,
    selectedAddonPanel: undefined,
    theme: vwTheme
  },
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'grey25', value: '#e1e6eb' },
    { name: 'grey', value: '#646973' },
    { name: 'darkGrey', value: '#3c414b' },
    { name: 'black', value: '#000000' }
  ],
  readme: {
    theme: {
      fontFamily: '"DB Sans", sans-serif'
    }
  }
});

configure(loadStories, module);
