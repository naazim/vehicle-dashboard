import React, { Component } from 'react';
import { Juice } from '../Juice';
import { IconText } from '../IconText';
import { VehicleHeader } from '../VehicleHeader';
import { VehicleFooter } from '../VehicleFooter';
import { ReactComponent as LockIcon } from '../../assets/locked.svg';
import { ReactComponent as UnlockIcon } from '../../assets/unlocked.svg';
import { ReactComponent as MileageIcon } from '../../assets/mileage.svg';
import { ReactComponent as StatusIcon } from '../../assets/status.svg';
import { vehicleImages } from '../../helpers/vehicle-images';

const defaultCarImage =
  'https://dl.dropboxusercontent.com/s/6udxa1n4lb46axp/car-empty.webp';

class VehicleDetail extends Component {
  state = {
    lockStatus: this.props.vehicleData.vehicleLockStatus
  };

  setLockStatus = () => {
    this.setState(() => ({
      lockStatus: !this.state.lockStatus
    }));
  };

  render() {
    const {
      name,
      licensePlateNumber,
      odometer_km,
      batteryStatus,
      chargingStatus,
      vehicleStatus
    } = this.props.vehicleData;

    const isCharging =
      (!!chargingStatus && chargingStatus.chargingState === 'on') || false;

    const batteryInfo =
      !!batteryStatus && batteryStatus.currentSOC_pct
        ? `${batteryStatus.currentSOC_pct}% ${isCharging ? '(Charging)' : ''}`
        : 'Unknown';

    const batteryValue =
      (batteryStatus && batteryStatus.currentSOC_pct) || 'Unknown';

    const imageUrl =
      vehicleImages.filter(image => image.name === name)[0].src ||
      defaultCarImage;

    const { lockStatus } = this.state;

    return (
      <div className="vehicle-detail">
        <VehicleHeader name={name} licensePlateNumber={licensePlateNumber} />

        <div className="vehicle-detail__content">
          <div className="vehicle-detail__data">
            <div className="vehicle-detail__row">
              <IconText
                label="vehicle Lock Status"
                value={!!lockStatus ? 'Locked' : 'unlocked'}
              >
                {!!lockStatus ? <LockIcon /> : <UnlockIcon />}
              </IconText>
              <IconText label="vehicle Status" value={vehicleStatus}>
                <StatusIcon />
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
              <IconText
                label="Battery Charge"
                value={batteryInfo}
                type="number"
              >
                <Juice value={batteryValue} isCharging={isCharging} />
              </IconText>
            </div>
          </div>

          <div className="vehicle-detail__picture" data-title={name}>
            <img className="vehicle-detail__image" src={imageUrl} alt={name} />
          </div>
        </div>

        <VehicleFooter
          vehicleData={this.props.vehicleData}
          setLockStatus={this.setLockStatus}
        />
      </div>
    );
  }
}

export { VehicleDetail };
