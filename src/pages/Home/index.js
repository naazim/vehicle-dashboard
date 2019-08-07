import React, { Component } from 'react';
import { setTheme } from '../../helpers/setTheme';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { VehicleDetail } from '../../components/VehicleDetail';

class Home extends Component {
  state = {
    vehicleData: null,
    theme: 'dark'
  };

  onVehicleClick = data => {
    this.setState(() => ({
      vehicleData: data
    }));
  };

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState(() => ({
      theme: theme === 'dark' ? 'light' : 'dark'
    }));

    setTheme(theme);
  };

  render() {
    const { vehicleData, theme } = this.state;

    return (
      <div className="fl-container">
        <Nav onVehicleClick={this.onVehicleClick} />
        <div className="fl-content">
          <Header toggleTheme={this.toggleTheme} currentTheme={theme} />
          {vehicleData && <VehicleDetail vehicleData={vehicleData} />}
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
