import React from 'react';
import HereMap from './here-map';

const Map = ({ lat, lng }) => (
  <HereMap
    className="fl-map"
    app_id={process.env.REACT_APP_MAP_APP_ID}
    app_code={process.env.REACT_APP_MAP_APP_CODE}
    center={{ lat, lng }}
    zoom={12}
  />
);

export default Map;
