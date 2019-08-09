import React, { Component } from 'react';

class HereMap extends Component {
  constructor(props) {
    super(props);

    this.platform = null;
    this.map = null;

    this.state = {
      app_id: props.app_id,
      app_code: props.app_code,
      center: props.center,
      zoom: props.zoom,
      theme: props.theme,
      style: props.style
    };
  }

  // TODO: Add theme selection discussed later HERE

  componentDidMount() {
    this.platform = new window.H.service.Platform(this.state);

    const layer = this.platform.createDefaultLayers();
    const container = document.getElementById('here-map');

    this.map = new window.H.Map(container, layer.normal.map, {
      center: this.state.center,
      zoom: this.state.zoom
    });

    const Marker = new window.H.map.Marker(this.props.center);
    this.map.addObject(Marker);

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
