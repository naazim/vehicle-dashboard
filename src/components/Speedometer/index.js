import React from 'react';
import { CircularProgress } from './circular-progress';

const settings = {
  width: 500,
  innerRadius: 244,
  outerRadius: 250,
  fill: '#41ACFE'
};

class Speedometer extends React.Component {
  static progressBar;

  componentDidMount() {
    const charts = document.getElementById('chart');
    this.progressBar = new CircularProgress(charts, settings);
    this.progressBar.update([this.props.value]);
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.progressBar.update([this.props.value]);
    }
  }

  render() {
    return <div id="chart" className="fl-speedometer" />;
  }
}

export default Speedometer;
