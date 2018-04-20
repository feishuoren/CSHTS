import React, {Component} from 'react';

export default class ItemMessage extends Component {
  componentWillMount() {
    const itemId = this.props.location.state.itemId;
    this.props.getItemMessage(itemId);
  }

  setCommentList() {
    return this.props.itemMessage.itemComments.reverse().map((ele, index)=> {
      return <div key={index} className="commentBox">
        <div>
          {ele.comment}
        </div>
        <div>
          {ele.nickname}
        </div>
        <div>
          {ele.addTime}
        </div>
      </div>;
    });
  }

  submitComment() {
    if (!this.getCookieUser()) {
      window.location = '#/loginBar';
    } else {
      if (this.inputComment.value) {
        const itemId = this.props.itemMessage._id;
        const itemName = this.props.itemMessage.itemName;
        const nickname = this.getCookieUser().nickname;
        const sno = this.getCookieUser().sno;
        const comment = this.inputComment.value;
        this.props.addComment(itemId, itemName, nickname, sno, comment);
      }
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
    const itemName = this.props.itemMessage.itemName;
    const itemBrand = this.props.itemMessage.itemBrand;
    const contactInfo = this.props.itemMessage.contactInfo;
    const itemSynopsis = this.props.itemMessage.itemSynopsis;
    const itemComments = Array.isArray(this.props.itemMessage.itemComments) && this.props.itemMessage.itemComments.length > 0 ? this.setCommentList() : '暂时没有评论，等待你来发掘';

    return (
      <div>
        <div>名称:{itemName}</div>
        <div>厂牌:{itemBrand}</div>
        <div>联系方式：{contactInfo}</div>
        <div>简介:{itemSynopsis}</div>
        <div>
          <input type="text" ref={(c)=>this.inputComment = c}/>
          <button onClick={this.submitComment.bind(this)}>我要评论</button>
          {itemComments}
        </div>
      </div>
    );
  }
}
