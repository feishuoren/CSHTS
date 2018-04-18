import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PersonalCenterBar extends Component {

  render() {
    return (
      <div id="personalBox">
        <div className="personalBox"><Link to='/personalCenter'>个人信息</Link></div>
        <div className="personalBox"><Link to='/personalCenter/items'>我发布的</Link></div>
        <div className="personalBox"><Link to='/'>我的评论</Link></div>
      </div>
    );
  }
}
