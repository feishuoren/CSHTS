export default (state = {userBoughtOrders: []}, action) => {
  if (action.type === 'GETUSERBOUGHTORDERS') {
    return {userBoughtOrders: action.userBoughtOrders};
  }
  return state;
};
