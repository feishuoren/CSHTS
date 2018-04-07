import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/login.css';

export default class LogIn extends Component {

  render() {
    return (
      <div className="content-box">
        <div id="content_left" className="combined-login"><LoginContent /></div>
        <div id="content_right" className="combined-login"><SigninContent /></div>
      </div>
    );
  }
}

class LoginContent extends Component {

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

class SigninContent extends Component {

  render() {
    return (
      <div className="register-content">
        <h1>Sign Up, It's Free!</h1>

        <form id="reg-form">
          <div className="column-left">
            <label>StudentNumber</label><br/>
            <input type="text" name="username"/>
            <br/>
            <label>Password</label><br/>
            <input type="password" name="password" className="valid"/>

          </div>
          <div className="column-right">
            <label>Email (optional)</label><br/>
            <input type="text" name="email"/>
            <br/>
            <label>Password Again</label><br/>
            <input type="password" name="password2" value=""/>

            <p><a href="#" className="button submit">Create Free Account</a></p>
          </div>
        </form>
      </div>
    );
  }
}


