import React, { Component } from 'react';
import { Juice } from '../Juice';
import { IconText } from '../IconText';
import { ScrambleAnimate } from '../ScrambleAnimate';
import { VehicleFooter } from '../VehicleFooter';
import { LicensePlate } from '../LicensePlate';
import { ReactComponent as LockIcon } from '../../assets/locked.svg';
import { ReactComponent as UnlockIcon } from '../../assets/unlocked.svg';
import { ReactComponent as PlateIcon } from '../../assets/plate.svg';
import { ReactComponent as StatusIcon } from '../../assets/status.svg';
import { ReactComponent as MileageIcon } from '../../assets/mileage.svg';
import { ReactComponent as TemperatureIcon } from '../../assets/temperature.svg';
import { vehicleImages } from '../../helpers/vehicle-images';

const defaultCarImage =
  'https://dl.dropboxusercontent.com/s/6udxa1n4lb46axp/car-empty.webp';

class VehicleDetail extends Component {
  render() {
    const {
      vehicleStatus,
      name,
      licensePlateNumber,
      odometer_km,
      batteryStatus,
      chargingStatus,
      vehicleLockStatus,
      vehicleInteriorTemperature
    } = this.props.vehicleData;

    const isCharging = chargingStatus.chargingState === 'on';

    const batteryInfo = batteryStatus.currentSOC_pct
      ? `${batteryStatus.currentSOC_pct}% ${isCharging ? '(Charging)' : ''}`
      : 'Unknown';

    const imageUrl =
      vehicleImages.filter(image => image.name === name)[0].src ||
      defaultCarImage;

    return (
      <div className="vehicle-detail">
        <div className="vehicle-detail__header">
          <h1 className="vehicle-detail__name">
            <ScrambleAnimate string={name} />
          </h1>
          <LicensePlate text={licensePlateNumber} />
        </div>
        <div className="vehicle-detail__content">
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
              <IconText
                label="interior temperature"
                value={`${vehicleInteriorTemperature} °C`}
              >
                <TemperatureIcon />
              </IconText>
              <IconText
                label="Battery Charge"
                value={batteryInfo}
                type="number"
              >
                <Juice
                  value={batteryStatus.currentSOC_pct}
                  isCharging={isCharging}
                />
              </IconText>
            </div>
            <div className="vehicle-detail__row">
              <IconText
                label="mileage"
                value={`${odometer_km} km`}
                type="number"
              >
                <MileageIcon />
              </IconText>
              <IconText label="License Plate" value={licensePlateNumber}>
                <PlateIcon />
              </IconText>
            </div>
          </div>

          <div className="vehicle-detail__picture" data-title={name}>
            <img className="vehicle-detail__image" src={imageUrl} alt={name} />
          </div>

          <VehicleFooter vehicleData={this.props.vehicleData} />
        </div>
      </div>
    );
  }
}

export { VehicleDetail };
