import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import clsx from 'clsx';
import { Map } from '../Map';
import { ReactComponent as GpsIcon } from '../../assets/gps.svg';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';

class VehicleFooter extends Component {
  state = {
    isModalOpen: false,
    isMapVisible: false,
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

  onOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  toggleMapVisibility = () => {
    this.setState(() => ({
      isMapVisible: !this.state.isMapVisible
    }));
  };

  render() {
    const { isMapVisible, location, isModalOpen } = this.state;
    const {
      vehicleId,
      vehicleStatus,
      name,
      vin,
      batteryStatus,
      licensePlateNumber,
      make,
      model,
      mileage,
      vehicleLockStatus,
      vehicleInteriorTemperature,
      fleetId,
      userId,
      odometer_km
    } = this.props.vehicleData;

    const batteryStatusValue =
      (!!batteryStatus && batteryStatus.currentSOC_pct) || 'unknown';

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
            className={clsx('btn-icon btn-circle btn-circle__map', {
              'btn-circle__map--active': isMapVisible
            })}
            onClick={this.onOpenModal}
          >
            <InfoIcon />
          </button>
        </footer>

        <Modal
          open={isModalOpen}
          onClose={this.onCloseModal}
          center
          classNames={{
            overlay: 'fl-modal__overlay',
            modal: 'fl-modal',
            closeIcon: 'fl-modal__close-icon',
            closeButton: 'fl-modal__close-btn'
          }}
          closeIconSvgPath={
            <>
              <path d="M.005 26.794L26.875.567l1.12 1.093-26.87 26.227z" />
              <path d="M1.125.567l26.87 26.227-1.12 1.093L.005 1.66z" />
            </>
          }
        >
          <h4 className="fl-modal__title">Information</h4>
          <dl>
            <dt>name:</dt> <dd>{name}</dd>
            <dt>license Plate Number:</dt> <dd>{licensePlateNumber}</dd>
            <dt>vehicleId:</dt> <dd>{vehicleId}</dd>
            <dt>vehicleStatus:</dt> <dd>{vehicleStatus}</dd>
            <dt>VIN:</dt> <dd>{vin}</dd>
            <dt>make:</dt> <dd>{make}</dd>
            <dt>model:</dt> <dd>{model}</dd>
            <dt>vehicle Lock Status:</dt> <dd>{vehicleLockStatus}</dd>
            <dt>vehicleInteriorTemperature:</dt>{' '}
            <dd>{vehicleInteriorTemperature}</dd>
            <dt>battery status:</dt> <dd>{batteryStatusValue}</dd>
            <dt>mileage:</dt> <dd>{odometer_km}</dd>
            <dt>fleetId:</dt> <dd>{fleetId}</dd>
            <dt>userId:</dt> <dd>{userId}</dd>
          </dl>
        </Modal>

        <Map
          className={clsx('vehicle-detail__map', {
            'vehicle-detail__map--active': isMapVisible
          })}
          center={location}
          theme="normal.night.grey"
        />
      </>
    );
  }
}

export { VehicleFooter };

/*
{
    "chargingStatus": {
    "carCapturedTimestamp": "2019-08-13T13:29:09Z",
        "remainingChargingTimeToComplete_min": "-1",
        "chargingState": "off"
},
    "plugStatus": {
    "carCapturedTimestamp": "2019-08-13T13:29:09Z",
        "plugConnectionState": "disconnected",
        "plugLockState": "unlocked"
},
    "batteryStatus": {
    "carCapturedTimestamp": "2019-08-13T13:29:09Z",
        "currentSOC_pct": "15",
        "cruisingRangeElectric_km": "53"
},
    "climatisationStatus": {
    "remainingClimatisationTime_min": "10",
        "climatisationState": "off"
},
    "windowHeatingStatus": [
    {
        "windowLocation": "front",
        "windowHeatingState": "off"
    },
    {
        "windowLocation": "rear",
        "windowHeatingState": "off"
    }
],
}*/
