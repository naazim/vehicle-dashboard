import React from 'react';
import { Juice } from '../Juice';
import BeetleImg from '../../assets/vehicles/2019-beetle-wolfsburg.png';

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
      <h1 className="vehicle-detail__name">{name}</h1>
      <div>vehicleId: {vehicleId}</div>
      <div>vehicleStatus: {vehicleStatus}</div>
      <div>name: {name}</div>
      <div>vin: {vin}</div>
      <div>number: {licensePlateNumber}</div>
      <div>make: {make}</div>
      <div>model: {model}</div>
      <div>mileage: {mileage}</div>
      <div>batteryChangeLevel: {batteryChangeLevel}</div>
      <div>vehicleLockStatus: {vehicleLockStatus}</div>
      <div>vehicleInteriorTemperature: {vehicleInteriorTemperature}</div>
      <div>batteryChargingStatus: {batteryChargingStatus}</div>
      <div>fleetId: {fleetId}</div>
      <div>fuellevel: {fuellevel}</div>
      {true && (
        <Juice value={batteryChangeLevel} isCharging={batteryChargingStatus} />
      )}
      <div className="vehicle-detail__picture">
        <div className="vehicle-detail__brand">{name}</div>
        <img className="vehicle-detail__image" src={BeetleImg} alt="Beetle" />
      </div>
    </div>
  );
};

export { VehicleDetail };
