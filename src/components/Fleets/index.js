import React from 'react';
import clsx from 'clsx';
import { Vehicle } from '../Vehicle';

const Fleets = ({
  data: fleets,
  onFleetClick,
  onVehicleClick,
  fleetVehicles
}) => (
  <div className="fleets">
    {fleets.map(fleet => (
      <div className="fleet__item" key={fleet.id}>
        <button className="fleet__btn" onClick={() => onFleetClick(fleet.id)}>
          <span
            className={clsx(
              'fleet__label',
              fleet.fleetStatus === 'Active' && 'fleet__label--active'
            )}
          >
            {fleet.noOfVehicles}
          </span>
          <span className="fleet__name">{fleet.fleetName}</span>
        </button>

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
