import React from 'react';
import { Preloader } from '../Preloader';

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
      <div className="fl-login">
        <div className="fl-login__content">
          <h1 className="fl-login__title header-light">Login</h1>
          <form name="form" onSubmit={handleSubmit}>
            <div
              className={
                'form__group' + (submitted && !username ? ' has-error' : '')
              }
            >
              {/*<label htmlFor="username">Username</label>*/}
              <input
                type="text"
                className="form__control"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
              />
              {submitted && !username && (
                <div className="form__alert">Username is required</div>
              )}
            </div>
            <div
              className={
                'form__group' + (submitted && !password ? ' has-error' : '')
              }
            >
              {/*<label htmlFor="password">Password</label>*/}
              <input
                type="password"
                className="form__control"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              {submitted && !password && (
                <div className="form__alert">Password is required</div>
              )}
            </div>

            {error && <div className="form__alert">{error}</div>}

            <div className="form__group form__btn-wrapper">
              <button className="btn btn-primary" disabled={loading}>
                Login
                {loading && <Preloader className="form__btn-preloader" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { Login };
