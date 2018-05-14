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
    return this.props.userShoppingCartItems.map((val, index) => {
      const sno = this.getCookieUser();

      return <div key={index} className="item shoppingCartItem">
        <input type="checkbox" onChange={this.check.bind(this, val)}/>

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
    }

    this.props.deleteUserShoppingCartItem(sno, val);
  }

  check(theItem) {
    let checkedItems = this.props.checkedItems;

    if (this.props.checkedItems.filter(ele => ele.itemId === theItem.itemId).length == 0) {
      checkedItems.push(theItem);
      this.props.changeCheckedItems(checkedItems, this.calculateTotalPrice(checkedItems));
    } else {
      checkedItems = this.props.checkedItems.filter(ele => ele.itemId != theItem.itemId);
      this.props.changeCheckedItems(checkedItems, this.calculateTotalPrice(checkedItems));
    }
  }

  calculateTotalPrice(checkedItems) {
    let priceArray = [];

    if (Array.isArray(checkedItems) && checkedItems.length > 0) {
      checkedItems.forEach((ele, index) => {
        priceArray.push(ele.itemPrice * ele.count);
      });
    }
    let totalPrice = Array.isArray(priceArray) && priceArray.length > 0 ? priceArray.reduce((prior, next) => prior + next) : 0;
    return totalPrice;
  }

  render() {
    const userShoppingCartItems = this.props.userShoppingCartItems.length > 0 ? this.setItemList() : '暂时没有商品，等待你来添加';

    return (
      <div>
        <div id="itemList">
          <div id="items">
            {userShoppingCartItems}
          </div>
        </div>
        总计：{this.props.totalPrice}元
        <Link to='/user/affirmOrder'>
          <button>提交订单</button>
        </Link>
      </div>
    );
  }
}
