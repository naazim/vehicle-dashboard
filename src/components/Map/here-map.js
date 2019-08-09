import React, { Component } from 'react';
import CarIcon from '../../assets/car-location.svg';

class HereMap extends Component {
  constructor(props) {
    super(props);

    this.platform = null;
    this.map = null;
    this.marker = null;

    this.state = {
      app_id: props.app_id,
      app_code: props.app_code,
      center: props.center,
      zoom: props.zoom,
      theme: props.theme,
      style: props.style
    };
  }

  setTheme = (theme, style) => {
    const tiles = this.platform.getMapTileService({ type: 'base' });
    const fleetStyleLayer = tiles.createTileLayer(
      'maptile',
      theme,
      256,
      'png8',
      { style }
    );
    this.map.setBaseLayer(fleetStyleLayer);
  };

  addMarker = () => {
    // Create an icon, an object holding the latitude and longitude, and a marker:
    const icon = new window.H.map.Icon(CarIcon);
    this.marker = new window.H.map.Marker(this.state.center, { icon });
    // Add the marker to the map
    this.map.addObject(this.marker);
  };

  componentDidUpdate(prevProps) {
    const { center } = this.props;
    const isMapAnimated = true;

    if (prevProps.center !== center) {
      this.marker.setPosition(center, isMapAnimated);
      this.map.setCenter(center, isMapAnimated);
    }
  }

  componentDidMount() {
    this.platform = new window.H.service.Platform(this.state);

    const layer = this.platform.createDefaultLayers();
    const container = document.getElementById('here-map');

    this.map = new window.H.Map(container, layer.normal.map, {
      center: this.state.center,
      zoom: this.state.zoom
    });

    this.setTheme(this.props.theme, 'mini');

    this.addMarker();

    const events = new window.H.mapevents.MapEvents(this.map);
    // eslint-disable-next-line
    const behavior = new window.H.mapevents.Behavior(events);
    // eslint-disable-next-line
    const ui = new window.H.ui.UI.createDefault(this.map, layer);

    // add a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => this.map.getViewPort().resize());
  }

  render() {
    return <div id="here-map" className={this.props.className} />;
  }
}

export default HereMap;
