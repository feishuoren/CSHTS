import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '!style-loader!css-loader!./../../style/orders.css';

export default class PersonalBoughtOrders extends Component {
  componentWillMount() {
    if (!this.getCookieUser().sno) {
      window.location = '#/loginBar';
    } else {
      const userSno = this.getCookieUser().sno;
      this.props.getUserSellOrders(userSno);
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

  setOrderList() {
    return this.props.userSellOrders.map((ele, index) => {
      const nickname = this.getCookieUser().nickname;
      const sno = this.getCookieUser().sno;
      return <div key={index} className="itemOrders">
        <Link to={`/items/getItemMessage:${ele.itemId}`}>
          <div className="itemPicture">
            <img src={ele.itemPicture}/>
          </div>
        </Link>
        <div className="orderMessage">
          <div className="itemOwner">
            买家：{ele.boughtUserName}
          </div>
          <div className="itemName">
            名称：{ele.itemName}
          </div>
          <div className="itemPrice">
            价格：{ele.itemPrice}元
          </div>
          <div className="itemCount">
            数量：{ele.count}
          </div>
          <div className="itemPayType">
            支付方式：{ele.payType}
          </div>
          <div className="itemAddTime">
            订单编号：{ele.orderId}
          </div>
          <div className="itemAddTime">
            创建时间：{ele.addTime}
          </div>
        </div>


      </div>;
    });
  }

  render() {
    const userSellOrders = Array.isArray(this.props.userSellOrders) && this.props.userSellOrders.length > 0 ? this.setOrderList() : '暂时没有订单，等待你来发掘';

    return (
      <div id="orderList">
        <div id="orders">
          {userSellOrders}
        </div>
      </div>
    );
  }
}
