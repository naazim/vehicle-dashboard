import React from 'react';
import { storiesOf } from '@storybook/react';
import { Preloader } from './index';

storiesOf('Preloader', module).add('default', () => {
  return <Preloader />;
});
