import React, { Component } from 'react';
import clsx from 'clsx';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { VehicleDetail } from '../../components/VehicleDetail';

class Home extends Component {
  state = {
    vehicleData: null,
    theme: 'light'
  };

  onVehicleClick = data => {
    this.setState(() => ({
      vehicleData: data
    }));
  };

  toggleTheme = () => {
    this.setState(() => ({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    }));
  };

  render() {
    const { vehicleData, theme } = this.state;

    return (
      <div className={clsx('fl-container', `theme-${theme}`)}>
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
