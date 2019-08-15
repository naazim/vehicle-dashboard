import React, { Component } from 'react';
import clsx from 'clsx';
import { setTheme } from '../../helpers/setTheme';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { VehicleDetail } from '../../components/VehicleDetail';
import { ReactComponent as PreoaderIcon } from '../../assets/preloader.svg';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      vehicleData: null,
      theme: 'dark',
      isLoading: false
    };
  }

  componentDidMount() {
    this.toggleTheme();
  }

  onVehicleClick = data => {
    if (!data) {
      this.setState(() => ({
        isLoading: true
      }));
    } else {
      this.setState(() => ({
        vehicleData: data,
        isLoading: false
      }));
    }
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
    const { vehicleData, theme, isLoading } = this.state;

    return (
      <div className={clsx('fl-container', `theme-${theme}`)}>
        <Nav onVehicleClick={this.onVehicleClick} />
        <div className="fl-content">
          <Header toggleTheme={this.toggleTheme} currentTheme={theme} />
          {isLoading && (
            <div className="preloader">
              <PreoaderIcon className="preloader__spinner" />
            </div>
          )}
          {vehicleData && (
            <VehicleDetail vehicleData={vehicleData} isLoading={isLoading} />
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
