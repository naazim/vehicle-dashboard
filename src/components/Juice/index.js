import React from 'react';
import clsx from 'clsx';
import SparkIcon from '../../assets/spark.svg';

const Juice = ({ value, isCharging }) => {
  const juiceClass = clsx(
    'fleet-juice__meter',
    value < 30 && !isCharging && 'fleet-juice__meter--low'
  );

  return (
    <div className="fleet-juice">
      {isCharging && (
        <img className="fleet-juice__charging" src={SparkIcon} alt="Charging" />
      )}
      <div className={juiceClass} style={{ height: `${value || 0}%` }} />
    </div>
  );
};

export { Juice };
