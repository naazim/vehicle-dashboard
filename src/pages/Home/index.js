import React, { Component } from 'react';
import clsx from 'clsx';
import { setTheme } from '../../helpers/setTheme';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { VehicleDetail } from '../../components/VehicleDetail';

class Home extends Component {
  state = {
    vehicleData: null,
    theme: 'dark'
  };

  componentDidMount() {
    // setTheme(this.state.theme);
  }

  onVehicleClick = data => {
    this.setState(() => ({
      vehicleData: data
    }));
  };

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState(
      () => ({
        theme: this.state.theme === 'dark' ? 'light' : 'dark'
      }),
      () => {
        setTheme(theme);
      }
    );
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
