import React, { Component } from 'react';
import clsx from 'clsx';

export class VehicleDoors extends Component {
  state = {
    doors: null
  };
  componentDidMount() {
    const API_FLEET_VEHICLE_DOORS_URL = `/vehicle/${this.props.vehicleId}/access/status`;

    fetch(API_FLEET_VEHICLE_DOORS_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.data.access.doors);
        this.setState({ doors: data.data.access.doors });
      })
      .catch(console.log);
  }

  render() {
    const { doors } = this.state;

    const rearRight = (!!doors &&
      doors.filter(door => door.name === 'rearRight')[0].status)[1];
    const rearLeft = (!!doors &&
      doors.filter(door => door.name === 'rearLeft')[0].status)[1];
    const frontRight = (!!doors &&
      doors.filter(door => door.name === 'frontRight')[0].status)[1];
    const frontLeft = (!!doors &&
      doors.filter(door => door.name === 'frontLeft')[0].status)[1];

    return (
      <svg
        className="fl-vehicle-doors"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="24 24 216 361"
      >
        {/*Loader*/}
        <g
          className={clsx('fl-vehicle-doors__loader fl-vehicle-doors__stroke', {
            'fl-vehicle-doors__loader--hide': doors
          })}
          transform="scale(0.8) translate(145 267)"
          strokeWidth="2"
          stroke="#05A4DE"
          fill="none"
        >
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path
            d="M36 18c0-9.94-8.06-18-18-18"
            transform="rotate(184.726 18 18)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        <g
          fill="none"
          fillRule="evenodd"
          stroke="#05A4DE"
          className="fl-vehicle-doors__stroke"
        >
          {/*Car Body*/}
          <path
            strokeWidth="1.5"
            d="M156.113 347.658c14.515-1.341 23.383-10.344 28.757-22.563 5.378-12.21 4.167-29.253 4.173-40.795-.006-11.554-3.631-19.198-3.631-19.198s.742-11.742 1.284-26.064c.333-.127 2.583-1.253 2.865-5.808.257-4.175-1.843-6.09-2.464-6.564.023-.97.053-1.944.07-2.918.398-20.122-.686-61.323-.68-61.588 4.703 2.41 12.363 3.09 12.492 3.072.54-4.964-9.683-11.536-9.81-11.275 2.16-18.117 2.021-31.41 1.485-39.195-.545-7.773-.96-19.45-12.637-29.933-13.284-11.924-36.426-13.816-46.995-13.828 0-.003-.018 0-.018 0s-.024.012-.024 0c-10.578.012-33.71 1.904-47.004 13.837-11.653 10.474-12.086 22.151-12.63 29.924-.534 7.794-.67 21.078 1.483 39.19-.138-.265-10.336 6.316-9.81 11.288.142-.008 7.802-.676 12.487-3.074.015.259-1.077 41.46-.668 61.59.03.96.044 1.928.065 2.88-.598.46-2.748 2.366-2.48 6.585.289 4.705 2.677 5.764 2.871 5.835.551 14.31 1.29 26.046 1.29 26.046S72.96 272.75 72.96 284.3c.009 11.536-1.207 28.585 4.179 40.801 5.363 12.207 14.224 21.225 28.746 22.563 14.468 1.336 16.81 1.327 25.085 1.327.014-.006.023 0 .032.009.015-.009.038-.009.038-.009 8.267 0 10.608-.006 25.074-1.333zm-28.304-268.31c0-.703 1.431-1.292 3.168-1.292 1.756.006 3.166.589 3.166 1.292 0 .709-1.41 1.265-3.166 1.26-1.746.014-3.168-.551-3.168-1.26zM79.149 97.26c-1.016-1.407 1.184-4.725 4.927-7.417 3.726-2.675 7.601-3.699 8.614-2.301 1.013 1.438-1.187 4.745-4.93 7.432-3.737 2.677-7.598 3.713-8.61 2.286zm95.016-2.286c-3.728-2.687-5.93-6.008-4.924-7.423 1.028-1.407 4.871-.377 8.614 2.3 3.743 2.684 5.928 6.011 4.924 7.406-1.022 1.424-4.87.394-8.614-2.283zm8.862 169.863l-3.755 30.731s-2.185-15.961-3.254-27.915c-1.072-11.936-.274-59.605 1.075-70.743 1.228-10.345 5.945-47.775 5.945-47.775 1.105 27.515-.011 115.702-.011 115.702zM81.23 139.867l.115-.232c4.615-9.153 13.258-15.82 25.671-19.777 10.732-3.401 21.057-3.698 23.963-3.698 2.913.009 13.238.288 23.972 3.69 12.416 3.965 21.05 10.62 25.674 19.785l.1.227-.108.03c-.374 1.89-3.897 28.082-5.758 42.01l-.032.262-.233-.092c-.041-.035-4.258-1.635-11.703-3.221-6.874-1.46-18-3.204-31.912-3.204-13.917 0-25.046 1.736-31.923 3.204-7.445 1.594-11.641 3.186-11.685 3.221l-.23.092-.044-.253c-1.85-13.937-5.378-40.137-5.737-42.011l-.13-.032zm-2.33 124.97s-1.115-88.178 0-115.702c0 0 4.698 37.45 5.953 47.783 1.345 11.13 2.135 58.784 1.063 70.74-1.057 11.946-3.26 27.91-3.26 27.91l-3.755-30.73zm14.387 52.312l-.038-.039-.012-.05s-.421-10.406-.836-20.8c-.207-5.205-.43-10.404-.566-14.308-.124-3.492-.182-5.14-.182-5.946-.01-.212-.018-.368.005-.471l-.015-.035.015-.006c.021-.236.065-.244.142-.26l.168-.034.023.108c9.342 4.967 38.673 5.02 38.97 5.014.304.006 29.636-.047 38.968-5.028l.036-.088.162.023c.064.02.118.03.147.265h.018l-.024.041c.035.538-.015 2.039-.177 6.417a3046.8 3046.8 0 01-.565 14.302l-.836 20.806-.024.062c-.17.453-4.35 11.074-35.584 11.139h-.327c-9.424.038-32.167-.95-39.468-11.112zm46.041 13.321v1.751H122.6v-1.75h16.73zm-49.404 7.209c-3.437-1.88-5.64-4.431-4.933-5.737.713-1.3 4.064-.833 7.498 1.041 3.434 1.857 5.64 4.437 4.93 5.731-.695 1.3-4.064.836-7.495-1.035zm74.587 1.035c-.71-1.288 1.496-3.866 4.93-5.731 3.422-1.886 6.794-2.35 7.506-1.041.695 1.3-1.508 3.863-4.941 5.743-3.434 1.856-6.803 2.33-7.495 1.03z"
          />

          {/*Doors*/}
          <path
            className={clsx(
              'fl-vehicle-doors__front-right',
              `fl-vehicle-doors__front-right--${frontRight}`
            )}
            d="M236.606 191.13a1.5 1.5 0 0 1 .548 2.048l-2.622 4.547-.003.006a1.5 1.5 0 0 1-2.052.54l-45.523-26.55a1.5 1.5 0 0 1-.736-1.458l.6-5.502a1.5 1.5 0 0 1 2.242-1.136l47.546 27.505z"
          />
          <path
            className={clsx(
              'fl-vehicle-doors__rear-right',
              `fl-vehicle-doors__rear-right--${rearRight}`
            )}
            d="M233.476 272.635l.014.008a1.5 1.5 0 0 0 2.048-.55l2.616-4.536a1.5 1.5 0 0 0-.548-2.048l-47.726-27.61a1.5 1.5 0 0 0-2.229 1.04l-.87 4.955a1.5 1.5 0 0 0 .714 1.55l45.98 27.19z"
          />
          <path
            className={clsx(
              'fl-vehicle-doors__front-left',
              `fl-vehicle-doors__front-left--${frontLeft}`
            )}
            d="M24.993 191.288a1.5 1.5 0 0 0-.548 2.048l2.622 4.547.003.006a1.5 1.5 0 0 0 2.052.54l45.523-26.55a1.5 1.5 0 0 0 .736-1.458l-.6-5.502a1.5 1.5 0 0 0-2.242-1.136l-47.546 27.505z"
          />
          <path
            className={clsx(
              'fl-vehicle-doors__rear-left',
              `fl-vehicle-doors__rear-left--${rearLeft}`
            )}
            d="M28.633 272.793l-.014.008a1.5 1.5 0 0 1-2.049-.55l-2.616-4.536a1.5 1.5 0 0 1 .549-2.048l47.726-27.61a1.5 1.5 0 0 1 2.229 1.04l.87 4.955a1.5 1.5 0 0 1-.714 1.55l-45.98 27.19z"
          />
        </g>
      </svg>
    );
  }
}
