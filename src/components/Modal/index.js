import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import clsx from 'clsx';
import { VehicleDoors } from '../VehicleDoors';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';

export class ModalWrapper extends Component {
  state = {
    isModalOpen: false
  };

  onToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const {
      vehicleId,
      vehicleStatus,
      name,
      vin,
      batteryStatus,
      licensePlateNumber,
      make,
      model,
      vehicleLockStatus,
      vehicleInteriorTemperature,
      fleetId,
      userId,
      odometer_km
    } = this.props.data;

    const { isModalOpen } = this.state;

    const batteryStatusValue =
      (!!batteryStatus && batteryStatus.currentSOC_pct) || 'unknown';

    return (
      <>
        <button
          type="button"
          className={clsx('btn-icon btn-circle btn-circle__info', {
            'btn-circle__info--active': isModalOpen
          })}
          onClick={this.onToggleModal}
        >
          <InfoIcon />
        </button>

        <Modal
          open={isModalOpen}
          onClose={this.onToggleModal}
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
          <div className="fl-modal__content">
            <dl className="fl-modal__info">
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
            <VehicleDoors vehicleId={vehicleId} />
          </div>
        </Modal>
      </>
    );
  }
}
