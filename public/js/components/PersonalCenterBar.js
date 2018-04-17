import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/personalCenter.css';

export default class PersonalCenterBar extends Component {

  render() {
    return (
      <div id="personalBox">
        <div className="personalBox">个人信息</div>
        <div className="personalBox">我发布的</div>
        <div className="personalBox">我的评论</div>
      </div>
    );
  }
}
