import React, { Component } from 'react';
import clsx from 'clsx';
import { Map } from '../Map';
import { Juice } from '../Juice';
import { IconText } from '../IconText';
import { ScrambleAnimate } from '../ScrambleAnimate';
import { ReactComponent as LockIcon } from '../../assets/locked.svg';
import { ReactComponent as UnlockIcon } from '../../assets/unlocked.svg';
import { ReactComponent as PlateIcon } from '../../assets/plate.svg';
import { ReactComponent as StatusIcon } from '../../assets/status.svg';
import { ReactComponent as GpsIcon } from '../../assets/gps.svg';
import { vehicleImages } from '../../helpers/vehicle-images';

class VehicleDetail extends Component {
  state = {
    isMapVisible: false,
    vehicleId: null,
    location: { lat: '52.5200', lng: '13.4050' }
  };

  componentDidUpdate(prevProps) {
    if (this.props.vehicleData.vehicleId !== prevProps.vehicleData.vehicleId) {
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
    }
  }

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

    const imageUrl = vehicleImages.filter(image => image.name === name)[0].src;
    console.log('Outside map ====', this.state.location);

    return (
      <div className="vehicle-detail">
        <div className="vehicle-detail__content">
          <h1 className="vehicle-detail__name">
            <ScrambleAnimate string={name} />
          </h1>
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
            <img className="vehicle-detail__image" src={imageUrl} alt={name} />
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
          center={this.state.location}
          theme="normal.night.grey"
        />
      </div>
    );
  }
}

export { VehicleDetail };
