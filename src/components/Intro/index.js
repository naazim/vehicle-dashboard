import React from 'react';
import FleetLogo from '../../assets/fleet-logo.svg';

const Intro = () => (
  <div className="fl-intro">
    <div className="fl-intro__header">
      <div className="fl-intro__lines">
        <img className="fl-intro__logo" src={FleetLogo} alt="Fleet logo" />
      </div>
    </div>
    <h1 className="header-light fl-intro__title">
      <strong>Fleet for</strong>
      <br />
      every journey
    </h1>
    <div className="fl-intro__content">
      <p>
        Create your own car configurator based on the latest VW Group product
        data.
      </p>

      <p>
        Related to models, product data and the determination of technical data
        can be complex. Therefore, this API provides you access to the latest VW
        Group product data and the ability to configure a car iteratively. It
        also enables you to determine WLTP values for a valid configuration with
        an integrated built check.
      </p>
    </div>
  </div>
);

export { Intro };
