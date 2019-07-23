import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MAP_THEME from "./map-theme";
import car from  '../../assets/car.png';

const VehicleIcon = () => <img src={car} alt="car icon" width="15" />;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.52,
      lng: 13.4
    },
    zoom: 11,
    styles: MAP_THEME
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="fleet-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBF_eoe4gPKXu4PM6RolxjUuT0syuj5ajE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <VehicleIcon lat={52.52} lng={13.4} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
