import React, {Component} from 'react';
import PersonalCenterBar from './PersonalCenterBar';

export default class PersonalCenter extends Component {

  render() {
    return (
      <div>
        <PersonalCenterBar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
