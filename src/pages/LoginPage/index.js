import React from 'react';
import { Login } from '../../components/Login';
import { userService } from '../../services/user.service';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });

    userService.login(username, password).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: '/' }
        };
        this.props.history.push(from);
      },
      error => this.setState({ error, loading: false })
    );
  };

  render() {
    const { username, password, submitted, loading, error } = this.state;

    return (
      <Login
        username={username}
        password={password}
        submitted={submitted}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export { LoginPage };
