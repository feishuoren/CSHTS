import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/topBar.css';

import {Link} from 'react-router-dom';

export default class TopBar extends Component {

  render() {
    return (
      <div id="box">
        <div id="left_box"><Link to='/s'>商品列表</Link></div>
        <div id="center_box"><Link to='/sellItem'>我要出手</Link></div>
        <div id="right_box"><a herf="#">个人中心</a></div>
      </div>
    );
  }
}
