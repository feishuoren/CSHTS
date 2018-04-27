import '!style-loader!css-loader!./../style/bodyStyle.css';
import {render} from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';

import App from './components/App';

import ShowItems from './containers/ShowItems';
import ItemMessage from './containers/ItemMessage';
import UpdateItemMessage from './containers/UpdateItemMessage';
import SellItem from './containers/SellItem';
import LoginBar from './containers/LoginBar';

import PersonalCenter from './components/PersonalCenter';

import PersonalMessage from './containers/GetUserMessage';
import PersonalItems from './containers/UserItems';
import PersonalComments from './containers/UserComments';

import reducer from './reducers/index';

import showItems from './middlewares/showItems';
import getItemMessage from './middlewares/getItemMessage';
import updateItemMessage from './middlewares/updateItemMessage';
import addItemComment from './middlewares/addItemComment';
import signIn from './middlewares/signIn';
import logIn from './middlewares/logIn';
import sellItem from './middlewares/sellItem';
import getUserMessage from './middlewares/getUserMessage';
import getUserItems from './middlewares/getUserItems';
import deleteUserItem from './middlewares/deleteUserItem';
import getUserComments from './middlewares/getUserComments';
import deleteUserComment from './middlewares/deleteUserComment';

const middleware = applyMiddleware(showItems, getItemMessage, updateItemMessage, addItemComment, signIn, logIn, sellItem, getUserMessage,
  getUserItems, deleteUserItem, getUserComments, deleteUserComment);
const store = createStore(reducer, middleware);

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={(props, match) => (
        <App {...props}>
          <Switch>
            <Route path='/' exact component={ShowItems}/>
            <Route path='/getItemMessage' component={ItemMessage}/>
            <Route path='/updateItemMessage' component={UpdateItemMessage}/>
            <Route path='/sellItem' component={SellItem}/>
            <Route path='/loginBar' component={LoginBar}/>
            <Route path='/personalCenter' component={(props) => (
              <PersonalCenter {...props}>
                <Switch>
                  <Route path='/personalCenter' exact component={PersonalMessage}/>
                  <Route path='/personalCenter/items' component={PersonalItems}/>
                  <Route path='/personalCenter/comments' component={PersonalComments}/>
                </Switch>
              </PersonalCenter>
            )}/>
          </Switch>
        </App>
      )}/>
    </Router>
  </Provider>
), document.getElementById('app'));
