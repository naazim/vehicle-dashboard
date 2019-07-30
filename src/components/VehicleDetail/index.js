import React from 'react';

const VehicleDetail = ({ vehicleData }) => {
  const {
    vehicleId,
    vehicleStatus,
    name,
    vin,
    licensePlateNumber,
    make,
    model,
    mileage,
    fuellevel,
    batteryChangeLevel,
    vehicleLockStatus,
    vehicleInteriorTemperature,
    batteryChargingStatus,
    fleetId
  } = vehicleData;

  return (
    <div className="vehicle-detail">
      <div>vehicleId: {vehicleId}</div>
      <div>vehicleStatus: {vehicleStatus}</div>
      <div>name: {name}</div>
      <div>vin: {vin}</div>
      <div>number: {licensePlateNumber}</div>
      <div>make: {make}</div>
      <div>model: {model}</div>
      <div>mileage: {mileage}</div>
      <div>fuellevel: {fuellevel}</div>
      <div>batteryChangeLevel: {batteryChangeLevel}</div>
      <div>vehicleLockStatus: {vehicleLockStatus}</div>
      <div>vehicleInteriorTemperature: {vehicleInteriorTemperature}</div>
      <div>batteryChargingStatus: {batteryChargingStatus}</div>
      <div>fleetId: {fleetId}</div>
    </div>
  );
};

export { VehicleDetail };
