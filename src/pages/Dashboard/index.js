import React from 'react';
import Speedometer from '../../components/Speedometer';
import Map from '../../components/Map';

const Dashboard = () => {
    return (
        <main className="fleet-main">
    <div className="fleet-wrapper">
      <Speedometer value={45}/>
      <Map
        className="fleet-map"
        lat="42.345978"
        lng="-83.0405"
      />
    </div>
  </main>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;
