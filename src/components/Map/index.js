import React, { Component } from 'react';



class Map extends Component {

  // For conciseness simply included all parameters in the querystring directly

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&z=10&t=5&poitxs=16&poitxc=black&poifc=yellow',
      points: [],
    }
  }

  // Helper function to format list of points

  getPOIList() {
    if (this.state.points.length > 0) {
      let param = '&poi=';
      for (let poi in this.state.points) {
        param += poi.latitude + ',' + poi.longitude;
      }
      return param;
    }

    return '';
  }

  // Render method builds the URL dynamically to fetch the image from the
  // HERE Map Image API

  render() {
    const {REACT_APP_MAP_APP_ID: appId, REACT_APP_MAP_APP_CODE: appCode} = process.env;
    return (
      <img
        src={`${this.state.url}&app_id=${appId}&app_code=${appCode+this.getPOIList()}`}
        alt="Todo Map"/>
    );
  }
}

export default Map;