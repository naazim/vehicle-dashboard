import React from 'react';
import { ScrambleAnimate } from '../ScrambleAnimate';
import { ReactComponent as PlateSideIcon } from '../../assets/side-plate.svg';

const LicensePlate = ({ text }) => (
  <div className="fl-license-plate">
    <PlateSideIcon className="fl-license-plate__icon" />
    <span className="fl-license-plate__text">
      <ScrambleAnimate string={text} />
    </span>
  </div>
);

export { LicensePlate };
