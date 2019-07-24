import React from "react";
import {CircularProgress} from "./circular-progress";

const settings = {
  width: 500,
  innerRadius: 244,
  outerRadius: 250,
  fill: "#41ACFE"
};

class Speedometer extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart = () => {
    const charts = document.getElementById("chart");

    const progress = new CircularProgress(charts, settings);
    setInterval(function() {
      progress.update([Math.floor(Math.random() * 100) + 1]);
    }, 1000);
  };

  render() {
    return <div id="chart" className="fleet-speedometer" />;
  }
}

export default Speedometer;
