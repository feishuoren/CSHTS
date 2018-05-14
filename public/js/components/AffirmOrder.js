import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/affirmOrder.css';

export default class AffirmOrder extends Component {
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

  calculateTotalPrice() {
    let priceArray = [];
    this.props.checkedItems.forEach((ele, index) => {
      priceArray.push(ele.itemPrice * ele.count);
    });
    let totalPrice = Array.isArray(priceArray) && priceArray.length > 0 ? priceArray.reduce((prior, next) => prior + next) : 0;

    return totalPrice;
  }

  handleSubmit() {
    let payType = this.payType.options[this.payType.selectedIndex].value;
    const checkedItems = this.props.checkedItems;
    const userSno = this.getCookieUser().sno;
    const userName = this.getCookieUser().nickname;
    this.props.submitOrder(payType, checkedItems, userSno, userName);
  }

  setTip() {
    let result = this.props.result;
    if (this.tip) {
      if (result === 'success') {
        this.tip.innerHTML = '您已提交成功';
        setTimeout(function () {
          this.tip.innerHTML = '';
          window.location.href = '#/';
        }, 3000);
      }

      if (result === 'fail') {
        this.tip.innerHTML = '失败，请重试';
        setTimeout(function () {
          this.tip.innerHTML = '';
        }, 3000);
      }
    }

  }

  render() {

    const checkedItems = this.props.checkedItems.map((val, index) => {

      return <div key={index} className="item shoppingCartItem">
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
      </div>;
    });

    return (
      <div id="affirmOrder">
        <h2>确认订单</h2>
        <div id="itemList">
          <div id="items">
            {checkedItems}
          </div>
        </div>
        总计：{this.calculateTotalPrice()}元
        支付方式：
        <select id="payType" ref={(c) => this.payType = c}>
          <option value="现金">现金</option>
          <option value="支付宝">支付宝</option>
          <option value="微信">微信</option>
        </select>
        <div>
          <button onClick={this.handleSubmit.bind(this)}>确认订单</button>
        </div>
        {this.setTip()}
        <div id="tip" ref={(c) => this.tip = c}></div>

      </div>
    );
  }
}
