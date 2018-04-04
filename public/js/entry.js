import '!style-loader!css-loader!./../style/bodyStyle.css';
import {render} from 'react-dom';
import React from 'react';

import {Switch, Route, HashRouter as Router} from 'react-router-dom';

import ShowItems from './components/ShowItems';
import SellItem from './components/SellItem';

import App from './components/App';

render((
  <Router>
    <Route path="/" component={(props) => (
      <App {...props}>
        <Switch>
          <Route path='/' exact component={ShowItems}/>
          <Route path='/sellItem' component={SellItem}/>
        </Switch>
      </App>
    )}/>
  </Router>
), document.getElementById('app'));
