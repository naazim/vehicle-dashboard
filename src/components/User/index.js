import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Usericon from '../../assets/user.svg';

class User extends Component {
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
      <div className="fleet-user">
        <div className="fleet-user__content">
          <span className="fleet-user__name">{user.firstName}</span>
          <Link to="/login" className="fleet-user__signout">
            Logout
          </Link>
        </div>
        <img className="fleet-user__pic" src={Usericon} alt="profile pic" />
      </div>
    );
  }
}

export { User };
