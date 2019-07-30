import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../../util/fakeAuth";
import Button from "../Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "test@vw.com",
      password: "aaaa",
      redirectToReferrer: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.login();
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" }
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login form">
        <form onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label">Email</label>
            <input
              className="form__control"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form__group">
            <label className="form__label">Password</label>
            <input
              className="form__control"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <Button
            className="btn-primary"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
