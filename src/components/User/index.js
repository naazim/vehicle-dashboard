import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Usericon from '../../assets/user.png';

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
      <div className="fl-user">
        <div className="fl-user__content">
          <span className="fl-user__name">{user.firstName}</span>
          <Link to="/login" className="fl-user__signout">
            Logout
          </Link>
        </div>
        <img className="fl-user__pic" src={Usericon} alt="profile pic" />
      </div>
    );
  }
}

export { User };
