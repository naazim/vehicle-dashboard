import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import { Vehicle } from '../Vehicle';

const Fleets = ({
  data: fleets,
  onFleetClick,
  onVehicleClick,
  fleetVehicles
}) => (
  <div className="fleets">
    {fleets.map(fleet => (
      <div className="fleets__item" key={fleet.id}>
        <Button
          className="btn-light fleets__btn"
          onClick={() => onFleetClick(fleet.id)}
        >
          {fleet.fleetName}
          <label
            className={clsx(
              'fleets__label',
              fleet.fleetStatus === 'Active' && 'fleets__label--active'
            )}
          >
            {fleet.noOfVehicles}
          </label>
        </Button>

        {fleetVehicles.length > 0 &&
          fleetVehicles
            .filter(vehicle => vehicle.fleetId === fleet.id)
            .map(vehicle => (
              <Vehicle
                key={vehicle.vehicleId}
                vehicleData={vehicle}
                onVehicleClick={onVehicleClick}
              />
            ))}
      </div>
    ))}
  </div>
);

export { Fleets };
