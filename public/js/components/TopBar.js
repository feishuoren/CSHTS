import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/topBar.css';

export default class TopBar extends Component {

  render() {
    return (
      <div id="top">
        <div id="box">
          <div id="left_box"><a herf="#">商品列表</a></div>
          <div id="center_box"><a herf="#">我要出手</a></div>
          <div id="right_box"><a herf="#">个人中心</a></div>
        </div>
      </div>
    );
  }
}
