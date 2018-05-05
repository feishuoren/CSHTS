import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/userBridge.css';

import {Link} from 'react-router-dom';

export default class UserBridge extends Component {
  exitLogin() {
    this.user_cookie.innerHTML = '欢迎你，游客';
    document.cookie = 'nickname=' + '';
    document.cookie = 'sno=' + '';
    window.location.href = '/';
  }

  render() {
    let nickname = '游客';
    const cookies = document.cookie.split('; ');
    cookies.find((val) => {
      const cookieName = val.split('=');
      if (cookieName[0] === 'nickname' && cookieName[1] != '') {
        nickname = cookieName[1];
      }
    });
    return (
      <div id="user-box">
        <div id="user_cookie" ref={(c) => this.user_cookie = c}>
          欢迎你，{nickname}
        </div>
        <div id="login-button"><Link to='/loginBar'>注册登录</Link></div>
        <div id="exit-button">
          <a onClick={this.exitLogin.bind(this)}>退出</a>
        </div>
      </div>
    );
  }
}
