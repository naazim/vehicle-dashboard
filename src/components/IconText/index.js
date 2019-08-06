import React from 'react';

const IconText = ({ label, value, children }) => (
  <div className="fl-icon-text">
    <div className="fl-icon-text__img">{children}</div>
    <div className="fl-icon-text__content">
      <h3 className="fl-icon-text__label">{label}</h3>
      <span className="fl-icon-text__value">{value}</span>
    </div>
  </div>
);

export { IconText };
