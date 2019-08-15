import React, { Component } from 'react';
import { Fleets } from '../../components/Fleets';
import FleetLogo from '../../assets/fleet-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/burger.svg';
import clsx from 'clsx';

const API_FLEETS_URL = '/fleet';

class Nav extends Component {
  state = {
    fleets: [],
    fleetVehicles: [],
    vehicle: null,
    isNavOpen: true
  };

  componentDidMount() {
    fetch(API_FLEETS_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ fleets: data.fleets });
      })
      .catch(console.log);
  }

  onFleetClick = fleetId => {
    const API_FLEET_VEHICLES_URL = `/fleet/${fleetId}/vehicle`;

    fetch(API_FLEET_VEHICLES_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ fleetVehicles: data.vehicles });
      })
      .catch(console.log);
  };

  onVehicleClick = vehicleId => {
    const API_VEHICLE_URL = `/vehicle/${vehicleId}`;
    this.props.onVehicleClick(false);

    fetch(API_VEHICLE_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ vehicle: data });
        this.props.onVehicleClick(data);
        console.log(data);
      })
      .catch(console.log);
  };

  toggleNav = () => {
    this.setState(() => ({
      isNavOpen: !this.state.isNavOpen
    }));
  };

  render() {
    const { fleets, fleetVehicles, isNavOpen } = this.state;
    return (
      <nav
        className={clsx(
          'fl-nav',
          isNavOpen ? 'fl-nav--open' : 'fl-nav--closed'
        )}
      >
        <div className="fl-nav__header">
          <img src={FleetLogo} alt="Logo" className="fl-nav__logo" />

          <button
            type="button"
            className="fl-hamburger btn-icon"
            onClick={this.toggleNav}
          >
            <Hamburger className="fl-hamburger__icon" />
          </button>
        </div>
        <Fleets
          data={fleets}
          fleetVehicles={fleetVehicles}
          onFleetClick={this.onFleetClick}
          onVehicleClick={this.onVehicleClick}
        />
      </nav>
    );
  }
}

Nav.propTypes = {};

export { Nav };
