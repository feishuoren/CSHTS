import {combineReducers} from 'redux';
import showItems from './showItems';
import getItemMessage from './itemMessage';
import signIn from './signIn';
import logIn from './logIn';
import addSellItem from './sellItem';
import getUserMessage from './getUserMessage';
import userItems from './userItems';
import getUserComments from './getUserComments';

export default combineReducers({
  showItems,
  getItemMessage,
  signIn,
  logIn,
  addSellItem,
  getUserMessage,
  userItems,
  getUserComments
});
