import React from 'react';
import { ScrambleAnimate } from '../ScrambleAnimate';

const IconText = ({ label, value, children }) => (
  <div className="fl-icon-text">
    <div className="fl-icon-text__img">{children}</div>
    <div className="fl-icon-text__content">
      <h3 className="fl-icon-text__label">{label}</h3>
      <span className="fl-icon-text__value">
        <ScrambleAnimate string={value} />
      </span>
    </div>
  </div>
);

export { IconText };
