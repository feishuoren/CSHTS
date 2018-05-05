export default (state = {itemList: [], showItemList: []}, action) => {
  if (action.type === 'SHOWITEMS') {
    return {itemList: action.itemList.reverse(), showItemList: action.itemList.reverse()};
  }
  if (action.type === 'FILTERITEMLIST') {
    return {itemList: state.itemList, showItemList: action.showItemList};
  }
  return state;
};
