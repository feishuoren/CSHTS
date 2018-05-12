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
        <input type="checkbox" onChange={this.check.bind(this, [val, index])}/>

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
          <button onClick={this.handleDelete.bind(this, sno, val)}>
            删除
          </button>
        </div>
      </div>;
    });
  }

  handleDelete(sno, val) {
    let checkedItems = this.props.checkedItems;
    if (checkedItems.indexOf(val) >= 0) {
      checkedItems.splice(checkedItems.indexOf(val), 1);
      this.props.changeCheckedItems(checkedItems);
      this.calculateTotalPrice();
    }

    this.props.deleteUserShoppingCartItem(sno, val);
  }

  check(itemarray) {
    const ele = itemarray[0];
    const index = itemarray[1];
    let checkedItems = this.props.checkedItems;

    if (checkedItems.indexOf(ele) < 0) {
      checkedItems.push(ele);
      this.props.changeCheckedItems(checkedItems);
    } else {
      checkedItems.splice(checkedItems.indexOf(ele), 1);
      this.props.changeCheckedItems(checkedItems);
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let priceArray = [];
    this.props.checkedItems.forEach((ele, index) => {
      priceArray.push(ele.itemPrice * ele.count);
    });
    let totalPrice = Array.isArray(priceArray) && priceArray.length > 0 ? priceArray.reduce((prior, next) => prior + next) : 0;

    this.totalPrice.innerHTML = totalPrice;
  }

  render() {
    const userShoppingCartItems = Array.isArray(this.props.userShoppingCartItems) && this.props.userShoppingCartItems.length > 0 ? this.setItemList() : '暂时没有商品，等待你来添加';

    return (
      <div id="itemList">
        <div id="items">
          {userShoppingCartItems}
          总计：<span ref={(c) => this.totalPrice = c}>0</span>元
        </div>
      </div>
    );
  }
}
