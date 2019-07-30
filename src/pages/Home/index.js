import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dashboard } from '../Dashboard';

class Home extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    });
  }

  render() {
    const { user } = this.state;
    return (
      <main className="">
        <h1>Hi {user.firstName}!</h1>
        <Link to="/login">Logout</Link>
        <Dashboard />
      </main>
    );
  }
}

Home.propTypes = {};

export default Home;
