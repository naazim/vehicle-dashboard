import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { Juice } from './index';

storiesOf('Juice', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const values = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    };

    const value = number('percentage', 25, values, 'GROUP-ID1');

    return <Juice value={value} isCharging={boolean('charging', false)} />;
  });
