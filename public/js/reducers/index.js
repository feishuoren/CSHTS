import {combineReducers} from 'redux';
import showItems from './showItems';
import getItemMessage from './itemMessage';
import updateItemMessage from './updateItemMessage';
import signIn from './signIn';
import logIn from './logIn';
import addSellItem from './sellItem';
import getUserMessage from './getUserMessage';
import userShoppingCart from './userShoppingCart';
import userItems from './userItems';
import userComments from './userComments';
import affirmOrder from './affirmOrder';
import userBoughtOrders from './userBoughtOrders';
import userSellOrders from './userSellOrders';

export default combineReducers({
  showItems,
  getItemMessage,
  updateItemMessage,
  signIn,
  logIn,
  addSellItem,
  getUserMessage,
  userShoppingCart,
  userItems,
  userComments,
  affirmOrder,
  userBoughtOrders,
  userSellOrders
});
