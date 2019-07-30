import React from 'react';
import clsx from 'clsx';

const Juice = ({ value }) => (
  <div className="fleet-juice">
    <div
      className={clsx(
        'fleet-juice__meter',
        value < 30 && 'fleet-juice__meter--low'
      )}
      style={{ height: `${value || 0}%` }}
    ></div>
  </div>
);

Juice.defaultProps = {
  value: 0
};

export { Juice };
