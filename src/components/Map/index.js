import React from 'react';
import HereMap from './here-map';

const Map = () => (
  <HereMap
    className="fleet-map"
    app_id={process.env.REACT_APP_MAP_APP_ID}
    app_code={process.env.REACT_APP_MAP_APP_CODE}
    center={{
      lat: '42.345978',
      lng: '-83.0405',
    }}
    zoom={12}
  />
);

export default Map;

