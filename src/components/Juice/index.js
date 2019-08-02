import React from 'react';
import clsx from 'clsx';
import SparkIcon from '../../assets/spark.svg';

const Juice = ({ value, isCharging }) => {
  const juiceClass = clsx(
    'fl-juice__meter',
    value < 30 && !isCharging && 'fl-juice__meter--low'
  );

  return (
    <div className="fl-juice">
      {isCharging && (
        <img className="fl-juice__charging" src={SparkIcon} alt="Charging" />
      )}
      <div className={juiceClass} style={{ height: `${value || 0}%` }} />
    </div>
  );
};

export { Juice };
