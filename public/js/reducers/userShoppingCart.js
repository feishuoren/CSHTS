export default (state = {userShoppingCartItems: [], checkedItems: []}, action) => {
  if (action.type === 'GETUSERSHOPPINGCART') {
    return {userShoppingCartItems: action.userShoppingCartItems, checkedItems: state.checkedItems};
  }
  if (action.type === 'DELETEUSERSHOPPINGCARTITEM') {
    return {userShoppingCartItems: action.userShoppingCartItems, checkedItems: state.checkedItems};
  }
  if (action.type === 'CHANGECHECKEDITEMS') {
    return {userShoppingCartItems: state.userShoppingCartItems, checkedItems: action.checkedItems};
  }
  return state;
};
