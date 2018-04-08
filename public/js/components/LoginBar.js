import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/login.css';

import LoginContent from './LogIn';
import SigninContent from './SignIn';

export default class LogIn extends Component {

  render() {
    return (
      <div className="content-box">
        <div id="content_left" className="combined-login">
          <LoginContent />
        </div>
        <div id="content_right" className="combined-login">
          <SigninContent submitSignin={this.props.submitSignin} signIn={this.props.signIn}/>
        </div>
      </div>
    );
  }
}

