import React, { Component } from 'react';
import { ModalWrapper } from '../Modal';
import clsx from 'clsx';
import { Map } from '../Map';
import { ReactComponent as GpsIcon } from '../../assets/gps.svg';
import { ReactComponent as LockIcon } from '../../assets/locked-small.svg';
import { ReactComponent as UnlockIcon } from '../../assets/unlocked-small.svg';
import { ReactComponent as CircleIcon } from '../../assets/circle.svg';

class VehicleFooter extends Component {
  state = {
    isMapVisible: false,
    location: null,
    isLocked: !!this.props.vehicleData.vehicleLockStatus,
    isLockPressed: false
  };

  componentDidMount() {
    this.getMapLocation();
  }

  componentDidUpdate(prevProps) {
    if (this.props.vehicleData.vehicleId !== prevProps.vehicleData.vehicleId) {
      this.getMapLocation();
    }
  }

  getMapLocation = () => {
    const vehicleId = this.props.vehicleData.vehicleId;
    const API_VEHICLE_POSITION_URL = `/vehicle/${vehicleId}/parkingposition`;

    fetch(API_VEHICLE_POSITION_URL)
      .then(res => res.json())
      .then(data => {
        this.setState(() => ({
          location: {
            lat: parseFloat(data.latitude),
            lng: parseFloat(data.longitude)
          }
        }));
      })
      .catch(console.log);
  };

  toggleMapVisibility = () => {
    this.setState(() => ({
      isMapVisible: !this.state.isMapVisible
    }));
  };

  toggleLock = () => {
    this.setState(() => ({
      isLockPressed: !this.state.isLockPressed
    }));
    setTimeout(() => {
      this.setState(() => ({
        isLocked: !this.state.isLocked,
        isLockPressed: !this.state.isLockPressed
      }));
      this.props.setLockStatus();
    }, 3000);
  };

  render() {
    const { isMapVisible, location, isLocked, isLockPressed } = this.state;

    return (
      <>
        <footer className="vehicle-detail__footer">
          <button
            type="button"
            className={clsx('btn-icon btn-circle btn-circle__map', {
              'btn-circle__map--active': isMapVisible
            })}
            onClick={this.toggleMapVisibility}
          >
            <GpsIcon />
          </button>
          <button
            type="button"
            className={clsx('btn-icon btn-circle btn-circle__lockToggle', {
              'btn-circle__lockToggle--active': isLockPressed,
              'btn-circle__lockToggle--inactive': !isLockPressed
            })}
            onClick={this.toggleLock}
          >
            {!!isLocked ? (
              <LockIcon className="btn-circle__lockToggle-icon" />
            ) : (
              <UnlockIcon className="btn-circle__lockToggle-icon" />
            )}
            {isLockPressed && (
              <CircleIcon className="btn-circle__circle-icon" />
            )}
          </button>

          <ModalWrapper data={this.props.vehicleData} />
        </footer>

        {console.log(location)}
        {!!location && (
          <Map
            className={clsx('vehicle-detail__map', {
              'vehicle-detail__map--active': isMapVisible
            })}
            center={location}
            theme="normal.day"
          />
        )}
      </>
    );
  }
}

export { VehicleFooter };
