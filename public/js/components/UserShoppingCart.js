import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '!style-loader!css-loader!./../../style/userShoppingCart.css';

export default class UserShoppingCart extends Component {
  componentWillMount() {
    if (!this.getCookieUser()) {
      window.location = '#/loginBar';
    } else {
      const userSno = this.getCookieUser();
      this.props.getUserShoppingCartItems(userSno);
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
    return this.props.userShoppingCartItems.reverse().map((val, index) => {
      const sno = this.getCookieUser();
      return <div key={index} className="item shoppingCartItem">
        <Link to={`/items/getItemMessage:${val.itemId}`}>
          <div className="itemPicture">
            <img height='100px' src={val.itemPicture}/>
          </div>
          <div className="itemMessage">
            <div className="itemOwner">
              卖家：{val.itemOwner}
            </div>
            <div className="itemName">
              名称：{val.itemName}
            </div>
            <div className="itemPrice">
              价格：{val.itemPrice}元
            </div>
            <div className="itemCount">
              数量：{val.count}
            </div>
          </div>
        </Link>
        <div className="ShoppingCartOptions">
          <button onClick={(e) => this.props.deleteUserShoppingCartItem(sno, val)}>
            删除
          </button>
        </div>
      </div>;
    });
  }

  render() {
    const userShoppingCartItems = Array.isArray(this.props.userShoppingCartItems) && this.props.userShoppingCartItems.length > 0 ? this.setItemList() : '暂时没有商品，等待你来添加';

    return (
      <div id="itemList">
        <div id="items">
          {userShoppingCartItems}
        </div>
      </div>
    );
  }
}
