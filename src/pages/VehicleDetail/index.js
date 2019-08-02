import React from 'react';
import Speedometer from '../../components/Speedometer';
import Map from '../../components/Map';

const VehicleDetail = () => {
  return (
    <div className="detail-wrapper">
      <Speedometer value={45} />
      <Map className="fl-map" lat="42.345978" lng="-83.0405" />
    </div>
  );
};

VehicleDetail.propTypes = {};

export default VehicleDetail;
