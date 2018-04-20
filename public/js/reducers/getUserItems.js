export default (state = {userItems: []}, action)=> {
  if (action.type === 'GETUSERITEMS') {
    return {userItems: action.userItems.reverse()};
  }
  return state;
};
