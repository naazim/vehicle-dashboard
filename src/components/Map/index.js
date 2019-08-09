import React from 'react';
import clsx from 'clsx';
import HereMap from './here-map';

const Map = ({ center, className, theme }) => (
  <HereMap
    className={clsx('fl-map', className)}
    app_id={process.env.REACT_APP_MAP_APP_ID}
    app_code={process.env.REACT_APP_MAP_APP_CODE}
    center={center}
    zoom={14}
    theme={theme}
  />
);

export { Map };
