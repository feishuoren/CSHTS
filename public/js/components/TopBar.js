import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/topBar.css';

import {Link} from 'react-router-dom';

export default class TopBar extends Component {

  render() {
    return (
      <div>
        <UserBridge />
        <Box />
      </div>
    );
  }
}

class Box extends Component {

  render() {
    return (
      <div id="box">
        <div id="left_box"><Link to='/'>商品列表</Link></div>
        <div id="center_box"><Link to='/sellItem'>我要出手</Link></div>
        <div id="right_box"><a herf="#">个人中心</a></div>
      </div>
    );
  }
}

class UserBridge extends Component {

  render() {
    let nickname;
    let sno;
    const cookies = document.cookie.split('; ');
    cookies.find((val) => {
      const cookieName = val.split('=');
      if (cookieName[0] === 'nickname') {
        nickname = cookieName[1];
      }
    });
    return (
      <div id="user-box">
        <div id="login-button"><Link to='/loginBar'>Log In</Link></div>
        <div id="user_cookie">
          欢迎你，{nickname}
        </div>
      </div>
    );
  }
}


