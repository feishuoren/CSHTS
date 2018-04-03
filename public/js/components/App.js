import React, {Component} from 'react';
import TopBar from './TopBar';

class App extends Component {
  render() {
    return <div>
      <TopBar/>
      <div>{this.props.children}</div>
    </div>;
  }
}

module.exports = App;
