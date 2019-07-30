import React, { Component } from 'react';
import { Dashboard } from '../Dashboard';
import { Header } from '../../components/Header';

class Home extends Component {
  render() {
    return (
      <main className="fleet-main">
        <Header />
        <Dashboard />
      </main>
    );
  }
}

Home.propTypes = {};

export default Home;
