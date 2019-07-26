import React, { Component } from 'react';
import logo from '../assets/vw-logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Dashboard from './Dashboard';
import Login from './Login';
import FleetOverview from './FleetOverview';
import VehicleDetail from './VehicleDetail';
import '../scss/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav />
          </header>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/fleet-overview" component={FleetOverview} />
            <Route exact path="/vehicle-detail" component={VehicleDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;