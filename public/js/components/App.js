import React, {Component} from 'react';
import UserBridge from './UserBridge';
import TopBar from './TopBar';

class App extends Component {
  render() {
    return <div>
      <UserBridge />
      <TopBar/>
      <div>{this.props.children}</div>
    </div>;
  }
}

module.exports = App;
