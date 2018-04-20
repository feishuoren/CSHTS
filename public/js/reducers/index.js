import {combineReducers} from 'redux';
import showItems from './showItems';
import getItemMessage from './getItemMessage';
import signIn from './signIn';
import logIn from './logIn';
import addSellItem from './sellItem';
import getUserMessage from './getUserMessage';

export default combineReducers({showItems, getItemMessage, signIn, logIn, addSellItem, getUserMessage});
