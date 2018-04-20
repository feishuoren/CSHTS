export default (state = {userComments: []}, action)=> {
  if (action.type === 'GETUSERCOMMENTS') {
    return {userComments: action.userComments};
  }
  return state;
};
