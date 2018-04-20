import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PersonalItems extends Component {
  componentWillMount() {
    if (!this.getCookieUser()) {
      window.location = '#/loginBar';
    } else {
      const userSno = this.getCookieUser();
      this.props.getUserItems(userSno);
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
      if (cookieName === 'sno') {
        sno = cookieValue;
      }
    });
    return sno;
  }

  setItemList() {
    return this.props.userItems.map((val, index) => {
      return <div key={index} className="item">
        <Link to={{
          pathname: '/getItemMessage',
          search: '?sort=name',
          hash: '#the-hash',
          state: {itemId: val._id}
        }}>
          <div className="itemPicture">
            <img height='100px' src={val.itemPicture}/>
          </div>
          <div className="itemMessage">
            <div className="itemName">
              名称：{val.itemName}
            </div>
            <div className="itemBrand">
              厂牌：{val.itemBrand}
            </div>
            <div className="itemOwner">
              拥有者：{val.itemOwner}
            </div>
            <div className="itemStatus">
              状态：{val.itemStatus == true ? '出售中' : '已售出'}
            </div>
          </div>
          <div className="itemSynopsis">
            简介：{val.itemSynopsis}
          </div>
        </Link>
      </div>;
    });
  }

  render() {
    const userItems = Array.isArray(this.props.userItems) && this.props.userItems.length > 0 ? this.setItemList() : '暂时没有商品，等待你来发掘';

    return (
      <div id="itemList">
        <div id="items">
          {userItems}
        </div>
      </div>
    );
  }
}
