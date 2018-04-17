import React, {Component} from 'react';
import UserBridge from './UserBridge';
import TopBar from './TopBar';

export default class App extends Component {
  render() {
    return <div>
      <Header />
      <div>{this.props.children}</div>
    </div>;
  }
}

class Header extends Component {

  render() {
    return (
      <div id="header">
        <div id="logo">
          <img src="../../images/logo.png"/>
        </div>
        <div id="appTop">
          <UserBridge />
          <TopBar/>
        </div>
      </div>

    );
  }
}

