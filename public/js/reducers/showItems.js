export default (state = {itemList: []}, action)=> {
  if (action.type === 'SHOWITEMS') {
    return {itemList: action.itemList};
  }
  return state;
};
