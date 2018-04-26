import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PersonalComments extends Component {
  componentWillMount() {
    if (!this.getCookieUser().sno) {
      window.location = '#/loginBar';
    } else {
      const userSno = this.getCookieUser().sno;
      this.props.getUserComments(userSno);
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

  setCommentList() {
    return this.props.userComments.map((ele, index) => {
      const nickname = this.getCookieUser().nickname;
      const sno = this.getCookieUser().sno;
      return <div key={index} className="commentBox">
        <Link to={{
          pathname: '/getItemMessage',
          search: '?sort=name',
          hash: '#the-hash',
          state: {itemId: ele.itemId}
        }}>
          <div>
            <img src={ele.itemPicture}/>
          </div>
          <div className="commentContent">
            <div>
              商品：{ele.itemName}
            </div>
            <div>
              评论：{ele.comment}
            </div>
            <div>
              {ele.addTime}
            </div>
          </div>
        </Link>
        <div className="commentOptions">
          <button onClick={(e) => this.props.deleteUserComment(nickname, sno, ele)}>
            删除
          </button>
        </div>
      </div>;
    });
  }

  render() {
    const userComments = Array.isArray(this.props.userComments) && this.props.userComments.length > 0 ? this.setCommentList() : '暂时没有评论，等待你来发掘';

    return (
      <div id="itemList">
        <div id="items">
          {userComments}
        </div>
      </div>
    );
  }
}
