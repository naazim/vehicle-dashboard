import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "../assets/vw-logo.svg";
// import Nav from "../components/Nav";
// import Dashboard from "./Dashboard";
// import Login from "./Auth";
// import FleetOverview from "./FleetOverview";
// import VehicleDetail from "./VehicleDetail";
import { PrivateRoute } from "../components/PrivateRoute";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import "../scss/main.scss";

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
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
/*<Route exact path="/fleet-overview" component={FleetOverview} />*/
/*<Route exact path="/vehicle-detail" component={VehicleDetail} />*/
/*</div>*/
/*</div>*/
/*</Router>*/
