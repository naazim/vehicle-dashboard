import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Preloader } from '../Preloader';
import { Button } from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Button className="btn-primary">Primary Button</Button>;
  })
  .add('with loader', () => {
    return (
      <Button className="btn btn-primary btn-loader">
        Login
        <Preloader
          className="form__btn-preloader"
          isVisible={boolean('isVisible', true)}
        />
      </Button>
    );
  });
