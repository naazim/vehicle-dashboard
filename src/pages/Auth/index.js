import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { fakeAuth } from "../../util/fakeAuth";
import Login from "../../components/Login";
import Dashboard from "../../pages/Dashboard";

const Public = () => <h3>Public</h3>;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      Sign out
    </button>
  ) : (
    <p>You are not logged in.</p>
  )
);

export default function Auth() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}
