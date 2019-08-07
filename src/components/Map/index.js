import React from 'react';
import clsx from 'clsx';
import HereMap from './here-map';

const Map = ({ lat, lng, className }) => (
  <HereMap
    className={clsx('fl-map', className)}
    app_id={process.env.REACT_APP_MAP_APP_ID}
    app_code={process.env.REACT_APP_MAP_APP_CODE}
    center={{ lat, lng }}
    zoom={12}
  />
);

export { Map };
