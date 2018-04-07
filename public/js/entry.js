import '!style-loader!css-loader!./../style/bodyStyle.css';
import {render} from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';

import App from './components/App';

import ShowItems from './containers/ShowItems';
import SellItem from './components/SellItem';
import LogIn from './components/LogIn';

import reducer from './reducers/index';

import showItems from './middlewares/showItems';

const middleware = applyMiddleware(showItems);
const store = createStore(reducer, middleware);

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={(props) => (
        <App {...props}>
          <Switch>
            <Route path='/' exact component={ShowItems}/>
            <Route path='/sellItem' component={SellItem}/>
            <Route path='/logIn' component={LogIn}/>
          </Switch>
        </App>
      )}/>
    </Router>
  </Provider>
), document.getElementById('app'));
