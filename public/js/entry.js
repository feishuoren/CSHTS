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
import UserShoppingCart from './containers/UserShoppingCart';
import PersonalBoughtOrders from './containers/UserBoughtOrders';
import PersonalSellOrders from './containers/UserSellOrders';
import AffirmOrder from './containers/AffirmOrder';

import reducer from './reducers/index';

import showItems from './middlewares/showItems';
import getItemMessage from './middlewares/getItemMessage';
import updateItemMessage from './middlewares/updateItemMessage';
import addItemToShoppingCart from './middlewares/addItemToShoppingCart';
import addItemComment from './middlewares/addItemComment';
import signIn from './middlewares/signIn';
import logIn from './middlewares/logIn';
import sellItem from './middlewares/sellItem';
import getUserMessage from './middlewares/getUserMessage';
import getUserShoppingCartItems from './middlewares/getUserShoppingCartItems';
import deleteUserShoppingCartItem from './middlewares/deleteUserShoppingCartItem';
import getUserItems from './middlewares/getUserItems';
import deleteUserItem from './middlewares/deleteUserItem';
import getUserComments from './middlewares/getUserComments';
import deleteUserComment from './middlewares/deleteUserComment';
import affirmOrder from './middlewares/affirmOrder';
import getUserBoughtOrders from './middlewares/getUserBoughtOrders';
import getUserSellOrders from './middlewares/getUserSellOrders';

const middleware = applyMiddleware(showItems, getItemMessage, updateItemMessage, addItemToShoppingCart, addItemComment,
  signIn, logIn, sellItem, getUserMessage, getUserShoppingCartItems, deleteUserShoppingCartItem, getUserItems,
  deleteUserItem, getUserComments, deleteUserComment, affirmOrder, getUserBoughtOrders, getUserSellOrders);
const store = createStore(reducer, middleware);

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={(props, match) => (
        <App {...props}>
          <Switch>
            <Route path='/' exact component={ShowItems}/>
            <Route path='/items/getItemMessage:itemId' component={ItemMessage}/>
            <Route path='/items/updateItemMessage:itemId' component={UpdateItemMessage}/>
            <Route path='/items/sellItem' component={SellItem}/>
            <Route path='/loginBar' component={LoginBar}/>
            <Route path='/userShoppingCart' component={UserShoppingCart}/>
            <Route path='/user/affirmOrder' component={AffirmOrder}/>
            <Route path='/personalCenter' component={(props) => (
              <PersonalCenter {...props}>
                <Switch>
                  <Route path='/personalCenter' exact component={PersonalMessage}/>
                  <Route path='/personalCenter/items' component={PersonalItems}/>
                  <Route path='/personalCenter/comments' component={PersonalComments}/>
                  <Route path='/personalCenter/boughtOrders' component={PersonalBoughtOrders}/>
                  <Route path='/personalCenter/sellOrders' component={PersonalSellOrders}/>
                </Switch>
              </PersonalCenter>
            )}/>
          </Switch>
        </App>
      )}/>
    </Router>
  </Provider>
), document.getElementById('app'));
