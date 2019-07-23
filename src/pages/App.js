import React from "react";
import Speedometer from "../components/Speedometer";
import Map from "../components/Map";
import "../scss/main.scss";

function App() {
  return (
    <div className="App">
    <main className="fleet-main">
      <div className="fleet-wrapper">
        <Speedometer />
        <Map className="fleet-map" />
      </div>
      </main>
    </div>
  );
}

export default App;
