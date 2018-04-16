import {combineReducers} from 'redux';
import showItems from './showItems';
import signIn from './signIn';
import logIn from './logIn';
import addSellItem from './sellItem';

export default combineReducers({showItems, signIn, logIn, addSellItem});
