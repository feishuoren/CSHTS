import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/login.css';

import LoginContent from './LogIn';
import SigninContent from './SignIn';

export default class LogIn extends Component {

  render() {
    return (
      <div id="loginBar" className="content-box">
        <div id="content_left" className="combined-login">
          <LoginContent submitLogin={this.props.submitLogin} fixLoginFlag={this.props.fixLoginFlag} isMatch={this.props.isMatch} userMes={this.props.userMes}/>
        </div>
        <div id="content_right" className="combined-login">
          <SigninContent submitSignin={this.props.submitSignin} signIn={this.props.signIn}/>
        </div>
      </div>
    );
  }
}

