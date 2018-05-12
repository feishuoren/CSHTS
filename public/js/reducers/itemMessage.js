export default (state = {itemMessage: []}, action)=> {
  if (action.type === 'GETITEMMESSAGE') {
    return {itemMessage: action.itemMessage};
  }
  if (action.type === 'ADDITEMTOSHOPPINGCART') {
    return {itemMessage:[...state.itemMessage]};
  }
  if (action.type === 'ADDCOMMENT') {
    return {itemMessage:action.result};
  }
  return state;
};
