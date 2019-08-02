import React from 'react';

class Login extends React.Component {
  render() {
    const {
      username,
      password,
      submitted,
      loading,
      error,
      handleSubmit,
      handleChange
    } = this.props;
    return (
      <div className="fleet-login">
        <form name="form" onSubmit={handleSubmit}>
          <div
            className={
              'form__group' + (submitted && !username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form__control"
              name="username"
              value={username}
              onChange={handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              'form__group' + (submitted && !password ? ' has-error' : '')
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form__control"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form__group">
            <button className="btn btn-primary" disabled={loading}>
              Login
              {loading && (
                <img
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                  alt="img"
                />
              )}
            </button>
          </div>
          {error && <div className={'alert alert-danger'}>{error}</div>}
        </form>
      </div>
    );
  }
}

export { Login };
