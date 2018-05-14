export default (state = {userShoppingCartItems: [], checkedItems: [], totalPrice: 0}, action) => {
  if (action.type === 'GETUSERSHOPPINGCART') {
    return {
      userShoppingCartItems: action.userShoppingCartItems,
      checkedItems: state.checkedItems,
      totalPrice: state.totalPrice
    };
  }
  if (action.type === 'DELETEUSERSHOPPINGCARTITEM') {
    return {
      userShoppingCartItems: action.userShoppingCartItems,
      checkedItems: state.checkedItems,
      totalPrice: state.totalPrice
    };
  }
  if (action.type === 'CHANGECHECKEDITEMS') {
    return {
      userShoppingCartItems: state.userShoppingCartItems,
      checkedItems: action.checkedItems,
      totalPrice: action.totalPrice
    };
  }
  return state;
};
