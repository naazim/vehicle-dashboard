import React, { Component } from 'react';
import { Fleets } from '../../components/Fleets';
import { VehicleDetail } from '../../components/VehicleDetail';
import { Button } from '../../components/Button';
import FleetLogo from '../../assets/fleet-logo.svg';

const API_FLEETS_URL = '/fleet';

class Nav extends Component {
  state = {
    fleets: [],
    fleetVehicles: [],
    vehicle: null
  };

  componentDidMount() {
    fetch(API_FLEETS_URL)
      .then(res => res.json())
      .then(data => {
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

    fetch(API_VEHICLE_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ vehicle: data });
        console.log(data);
      })
      .catch(console.log);
  };

  render() {
    const { fleets, fleetVehicles, vehicle: vehicleData } = this.state;
    return (
      <nav className="fl-nav">
        <div className="fl-nav__header">
          <img className="fl-nav__logo" src={FleetLogo} alt="Fleet logo" />
          <Button type="button" className="fl-hamburger btn-icon">
            ☰
          </Button>
        </div>
        <Fleets
          data={fleets}
          fleetVehicles={fleetVehicles}
          onFleetClick={this.onFleetClick}
          onVehicleClick={this.onVehicleClick}
        />
        {vehicleData && <VehicleDetail vehicleData={vehicleData} />}
      </nav>
    );
  }
}

Nav.propTypes = {};

export { Nav };
