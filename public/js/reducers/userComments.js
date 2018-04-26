export default (state = {userComments: []}, action) => {
  if (action.type === 'GETUSERCOMMENTS') {
    return {userComments: action.userComments};
  }
  if (action.type === 'DELETEUSERCOMMENT') {
    return {userComments: action.userComments};
  }
  return state;
};
