import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <button>login</button>
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link to="/fleet-overview">
        <button>Fleet Overview</button>
      </Link>
      <Link to="/vehicle-detail">
        <button>Vehicle Detail</button>
      </Link>
    </div>
  );
};

Nav.propTypes = {

};

export default Nav;
