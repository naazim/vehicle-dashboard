import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from "../assets/vw-logo.svg";
// import Nav from "../components/Nav";
import Home from './Home';
// import Login from "./Auth";
// import FleetOverview from "./FleetOverview";
// import VehicleDetail from "./VehicleDetail";
import { PrivateRoute } from '../components/PrivateRoute';
import { LoginPage } from './LoginPage';
import '../scss/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
        </>
      </Router>
    );
  }
}

export default App;

/*<Router>*/
/*<div className="App">*/
/*<header className="App-header">*/
/*<img src={logo} className="App-logo" alt="logo" />*/
/*<Nav />*/
/*</header>*/
/*<div>*/
/*<Route exact path="/" component={Login} />*/
/*<Route exact path="/dashboard" component={Dashboard} />*/
/*<Route exact path="/fl-overview" component={FleetOverview} />*/
/*<Route exact path="/vehicle-detail" component={VehicleDetail} />*/
/*</div>*/
/*</div>*/
/*</Router>*/
