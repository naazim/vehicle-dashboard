import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Speedometer from './index';
import '../../scss/main.scss';

storiesOf('Speedometer', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const options = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    };
    const value = number('Progress Value', 30, options, 'Group1');

    return <Speedometer value={value} />;
  });
