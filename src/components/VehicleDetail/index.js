import React, { Component } from 'react';
import clsx from 'clsx';
import { Map } from '../Map';
import { Juice } from '../Juice';
import { IconText } from '../IconText';
import { ReactComponent as LockIcon } from '../../assets/locked.svg';
import { ReactComponent as UnlockIcon } from '../../assets/unlocked.svg';
import { ReactComponent as PlateIcon } from '../../assets/plate.svg';
import { ReactComponent as StatusIcon } from '../../assets/status.svg';
import { ReactComponent as GpsIcon } from '../../assets/gps.svg';

import BeetleImg from '../../assets/vehicles/2019-beetle-wolfsburg.png';

class VehicleDetail extends Component {
  state = {
    isMapVisible: false
  };

  showMap = () => {
    this.setState(() => ({
      isMapVisible: !this.state.isMapVisible
    }));
  };

  render() {
    const {
      vehicleId,
      vehicleStatus,
      name,
      vin,
      licensePlateNumber,
      make,
      model,
      mileage,
      fuellevel,
      batteryChangeLevel,
      vehicleLockStatus,
      vehicleInteriorTemperature,
      batteryChargingStatus,
      fleetId
    } = this.props.vehicleData;
    const { isMapVisible } = this.state;

    const batteryStatus =
      batteryChangeLevel &&
      `${batteryChangeLevel}% ${!!batteryChargingStatus ? '(Charging)' : ''}`;

    return (
      <div className="vehicle-detail">
        <div className="vehicle-detail__content">
          <h1 className="vehicle-detail__name">{name}</h1>
          <div className="vehicle-detail__data">
            <div className="vehicle-detail__row">
              <IconText label="vehicle Lock Status" value={vehicleLockStatus}>
                {vehicleLockStatus === 'locked' ? <LockIcon /> : <UnlockIcon />}
              </IconText>
              <IconText label="vehicle Status" value={vehicleStatus}>
                <StatusIcon />
              </IconText>
            </div>
            <div className="vehicle-detail__row">
              <IconText label="Battery Charge" value={batteryStatus}>
                <Juice
                  value={batteryChangeLevel}
                  isCharging={batteryChargingStatus}
                />
              </IconText>
              <IconText label="vehicle Number" value={licensePlateNumber}>
                <PlateIcon />
              </IconText>
            </div>
          </div>

          <div className="vehicle-detail__info">
            <div>vehicleId: {vehicleId}</div>
            <div>vehicleStatus: {vehicleStatus}</div>
            <div>vin: {vin}</div>
            <div>make: {make}</div>
            <div>model: {model}</div>
            <div>mileage: {mileage}</div>
            <div>vehicleInteriorTemperature: {vehicleInteriorTemperature}</div>
            <div>fleetId: {fleetId}</div>
            <div>fuellevel: {fuellevel}</div>
          </div>

          <div className="vehicle-detail__picture" data-title={name}>
            {/*<div className="vehicle-detail__brand">{name}</div>*/}
            <img
              className="vehicle-detail__image"
              src={BeetleImg}
              alt="Beetle"
            />
          </div>
        </div>

        <footer className="vehicle-detail__footer">
          <button
            type="button"
            className={clsx('btn-icon btn-circle btn-circle__map', {
              'btn-circle__map--active': isMapVisible
            })}
            onClick={this.showMap}
          >
            <GpsIcon />
          </button>
        </footer>

        <Map
          className={clsx('vehicle-detail__map', {
            'vehicle-detail__map--active': isMapVisible
          })}
          lat="42.345978"
          lng="-83.0405"
        />
      </div>
    );
  }
}

export { VehicleDetail };
