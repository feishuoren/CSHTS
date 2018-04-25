import React, {Component} from 'react';

export default class PersonalMessage extends Component {
  componentWillMount() {
    if (!this.getCookieUser().sno) {
      window.location = '#/loginBar';
    } else {
      const userSno = this.getCookieUser().sno;
      this.props.getUserMessage(userSno);
    }
  }

  getCookieUser() {
    let nickname;
    let sno;
    let allCookies = document.cookie.split('; ');
    allCookies.forEach((val) => {
      let cookie = val.split('=');
      let cookieName = cookie[0];
      let cookieValue = cookie[1];
      if (cookieName === 'nickname') {
        nickname = cookieValue;
      }
      if (cookieName === 'sno') {
        sno = cookieValue;
      }
    });
    return {nickname, sno};
  }

  render() {
    const nickname = this.getCookieUser().nickname;
    const sno = this.getCookieUser().sno;
    // const userMessage = this.props.userMessage;

    return (
      <div>
        <div>昵称：{nickname}</div>
        <div>学号：{sno}</div>
      </div>
    );
  }
}
