export default (state = {itemMessage: []}, action)=> {
  if (action.type === 'GETITEMMESSAGE') {
    return {itemMessage: action.itemMessage};
  }
  return state;
};
