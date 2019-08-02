import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';

class Home extends Component {
  render() {
    return (
      <main className="fl-main">
        <Nav />
        <Header />
      </main>
    );
  }
}

Home.propTypes = {};

export default Home;
