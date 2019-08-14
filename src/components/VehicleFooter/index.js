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
            overlay: 'vehicle-detail__overlay',
            modal: 'vehicle-detail__modal'
          }}
        >
          <div>vehicleId: {vehicleId}</div>
          <div>vehicleStatus: {vehicleStatus}</div>
          <div>vin: {vin}</div>
          <div>make: {make}</div>
          <div>model: {model}</div>
          <div>mileage: {mileage}</div>
          <div>vehicleInteriorTemperature: {vehicleInteriorTemperature}</div>
          <div>fleetId: {fleetId}</div>
          <div>fuellevel: {fuellevel}</div>
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
