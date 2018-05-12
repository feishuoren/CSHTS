export default (state = {userShoppingCartItems: []}, action)=> {
  if (action.type === 'GETUSERSHOPPINGCART') {
    return {userShoppingCartItems: action.userShoppingCartItems};
  }
  if (action.type === 'DELETEUSERSHOPPINGCARTITEM') {
    return {userShoppingCartItems: action.userShoppingCartItems};
  }
  return state;
};
