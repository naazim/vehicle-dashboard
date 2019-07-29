import React, { Component } from "react";

const API_URL = "/fleet/1/vehicle";

class FleetOverview extends Component {
  state = {
    vehicles: []
  };

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ vehicles: data.vehicles });
      })
      .catch(console.log);
  }

  render() {
    const { vehicles } = this.state;

    return (
      <div className="fleet-overview">
        {vehicles.map(vehicle => (
          <button key={vehicle.vehicleId}>{vehicle.vehicleId}</button>
        ))}
      </div>
    );
  }
}
export default FleetOverview;
