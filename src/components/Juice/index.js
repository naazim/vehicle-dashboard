import React from 'react';
import clsx from 'clsx';
import { ReactComponent as SparkIcon } from '../../assets/spark.svg';

const Juice = ({ value, isCharging }) => {
  const juiceClass = clsx(
    'fl-juice__meter',
    value < 30 && !isCharging && 'fl-juice__meter--low'
  );

  return (
    <div className="fl-juice">
      {isCharging && <SparkIcon className="fl-juice__charging" />}
      <div className={juiceClass} style={{ height: `${value || 0}%` }} />
    </div>
  );
};

export { Juice };
