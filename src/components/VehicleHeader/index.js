import React from 'react';
import { ScrambleAnimate } from '../ScrambleAnimate';
import { LicensePlate } from '../LicensePlate';

const VehicleHeader = ({ name, licensePlateNumber }) => (
  <div className="fl-vehicle-header">
    <h1 className="fl-vehicle-header__name">
      <ScrambleAnimate string={name} />
    </h1>
    <LicensePlate text={licensePlateNumber} />
  </div>
);

export { VehicleHeader };
