export default (state = {userSellOrders: []}, action) => {
  if (action.type === 'GETUSERSELLORDERS') {
    return {userSellOrders: action.userSellOrders};
  }
  return state;
};
