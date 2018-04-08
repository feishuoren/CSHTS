import React, {Component} from 'react';

export default class LoginContent extends Component {

  render() {
    return (
      <div className="login-content">
        <h1>Student Login</h1>

        <form id="login-form">
          <label>StudentNumber</label><br/>
          <input type="text" name="username" id="username"/>
          <br/>
          <label>Password</label><br/>
          <input type="password" name="password"/>

          <p className="forgot-password-callout"><a href="#">I forgot my login!</a></p>
          <p className="submit-login"><a href="#" className="button submit">Log In</a></p>
        </form>
      </div>
    );
  }
}
