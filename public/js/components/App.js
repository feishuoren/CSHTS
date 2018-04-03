import React, {Component} from 'react';
import TopBar from './TopBar';
import ShowItems from './ShowItems';

class App extends Component {
  render() {
    return <div>
      <TopBar/>
      <ShowItems/>
    </div>;
  }
}

module.exports = App;
