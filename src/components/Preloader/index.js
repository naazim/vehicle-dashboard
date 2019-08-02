import React from 'react';
import clsx from 'clsx';

const Preloader = ({ className }) => (
  <span className={clsx('fl-preloader', className)} />
);

export { Preloader };
