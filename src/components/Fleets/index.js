import React from 'react';
import clsx from 'clsx';
import Button from '../Button';

const Fleets = ({ data: fleets, onClick }) => (
  <div className="fleets">
    {fleets.map(fleet => (
      <Button
        key={fleet.id}
        className="btn-light fleets__btn"
        onClick={() => onClick(fleet.id)}
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
    ))}
  </div>
);

export { Fleets };
