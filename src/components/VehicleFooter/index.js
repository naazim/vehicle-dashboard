import React, { Component } from 'react';
import { ModalWrapper } from '../Modal';
import clsx from 'clsx';
import { Map } from '../Map';
import { ReactComponent as GpsIcon } from '../../assets/gps.svg';

class VehicleFooter extends Component {
  state = {
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

  toggleMapVisibility = () => {
    this.setState(() => ({
      isMapVisible: !this.state.isMapVisible
    }));
  };

  render() {
    const { isMapVisible, location } = this.state;

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
          <ModalWrapper data={this.props.vehicleData} />
        </footer>

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
