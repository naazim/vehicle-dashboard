import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../User';

const Header = () => (
  <div className="fleet-header">
    <User />
    <Link to="/login" className="fleet-header__signout">
      Logout
    </Link>
  </div>
);

export { Header };
