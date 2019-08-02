import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { VehicleDetail } from '../../components/VehicleDetail';

class Home extends Component {
  state = {
    vehicleData: null
  };

  onVehicleClick = data => {
    this.setState(() => ({
      vehicleData: data
    }));
    console.log('hello', data);
  };

  render() {
    const { vehicleData } = this.state;

    return (
      <div className="fl-container">
        <Nav onVehicleClick={this.onVehicleClick} />
        <div className="fl-content">
          <Header />
          {vehicleData && <VehicleDetail vehicleData={vehicleData} />}
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
