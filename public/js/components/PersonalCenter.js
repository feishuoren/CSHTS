import React, {Component} from 'react';
import PersonalCenterBar from './PersonalCenterBar';
import '!style-loader!css-loader!./../../style/personalCenter.css';

export default class PersonalCenter extends Component {

  render() {
    return (
      <div id="personalCenter">
        <PersonalCenterBar />
        <div id="personalBoxContent">{this.props.children}</div>
      </div>
    );
  }
}
