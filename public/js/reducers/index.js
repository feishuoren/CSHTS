import {combineReducers} from 'redux';
import showItems from './showItems';
import signIn from './signIn';
import addSellItem from './sellItem';

export default combineReducers({showItems, signIn, addSellItem});
