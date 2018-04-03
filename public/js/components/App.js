import React, {Component} from 'react';
import TopBar from './TopBar';
import ShowItems from './ShowItems';
import SellItem from './SellItem';

class App extends Component {
  render() {
    return <div>
      <TopBar/>
      <SellItem/>
    </div>;
  }
}

module.exports = App;
