import React, { useContext, useState } from 'react';
import Modal from 'react-responsive-modal';
import clsx from 'clsx';
import { VehicleDoors } from '../VehicleDoors';
import { ThemeContext } from '../../context/theme';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';

const ModalWrapper = ({ data }) => {
  const [isModalOpen, onToggleModal] = useState(false);

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
  } = data;

  const batteryStatusValue =
    (!!batteryStatus && batteryStatus.currentSOC_pct) || 'unknown';

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button
        type="button"
        className={clsx('btn-icon btn-circle btn-circle__info', {
          'btn-circle__info--active': isModalOpen
        })}
        onClick={() => onToggleModal(!isModalOpen)}
      >
        <InfoIcon />
      </button>

      <Modal
        open={isModalOpen}
        onClose={() => onToggleModal(!isModalOpen)}
        center
        classNames={{
          overlay: 'fl-modal__overlay',
          modal: `fl-modal fl-modal--${theme}`,
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
};

export { ModalWrapper };
