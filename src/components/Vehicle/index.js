import React from "react";

const Vehicle = ({ vehicleData, onClick }) => {
  const {
    vehicleId,
    licensePlateNumber,
    make,
    model,
    name,
    vehicleStatus
  } = vehicleData;

  return (
    <button
      type="button"
      className="vehicle"
      onClick={() => onClick(vehicleId)}
    >
      <div>id: {vehicleId}</div>
      <div>number: {licensePlateNumber}</div>
      <div>make: {make}</div>
      <div>model: {model}</div>
      <div>name: {name}</div>
      <div>vehicleStatus: {vehicleStatus}</div>
    </button>
  );
};

export default Vehicle;
