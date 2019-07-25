import React from "react";
import Speedometer from "../components/Speedometer";
import Map from "../components/Map";
import "../scss/main.scss";

function App() {
  return (
    <div className="App">
    <main className="fleet-main">
      <div className="fleet-wrapper">
        <Speedometer value={45} />
        <Map
          className="fleet-map"
          lat="42.345978"
          lng="-83.0405"
        />
      </div>
      </main>
    </div>
  );
}

export default App;
