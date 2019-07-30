import React, { Component } from 'react';

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
        <span>Hi {user.firstName}!</span>
      </div>
    );
  }
}

export { User };
