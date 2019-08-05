import React from 'react';

const Vehicle = ({ vehicleData, onVehicleClick }) => {
  const { vehicleId, name, vehicleStatus } = vehicleData;

  return (
    <button
      type="button"
      className="fl-vehicle__btn"
      onClick={() => onVehicleClick(vehicleId)}
    >
      <div className="fl-vehicle__name">{name}</div>
      <div className="fl-vehicle__status">Status: {vehicleStatus}</div>
    </button>
  );
};

export { Vehicle };
