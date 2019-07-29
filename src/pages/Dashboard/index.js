import React, { Component } from "react";
import Fleets from "../../components/Fleets";
const API_FLEETS_URL = "/fleet";

class Dashboard extends Component {
  state = {
    fleets: [],
    fleetVehicles: []
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
    console.log("clicked", fleetId);
    const API_FLEET_VEHICLES_URL = `/fleet/${fleetId}/vehicle`;

    fetch(API_FLEET_VEHICLES_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ fleetVehicles: data.fleets });
        console.log(data);
      })
      .catch(console.log);
  };

  render() {
    const { fleets } = this.state;
    return (
      <main className="fleet-main">
        <div className="fleet-dashboard">
          <Fleets data={fleets} onClick={this.onFleetClick} />
        </div>
        <div className="fleet-vehicles"></div>
      </main>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
