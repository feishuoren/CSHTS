export default (state = {userShoppingCartItems: []}, action)=> {
  if (action.type === 'GETUSERSHOPPINGCART') {
    return {userShoppingCartItems: action.userShoppingCartItems};
  }
  return state;
};
