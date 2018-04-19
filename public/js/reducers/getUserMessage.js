export default (state = {userMessage: []}, action)=> {
  if (action.type === 'GETUSERMESSAGE') {
    return {userMessage: action.userMessage};
  }
  return state;
};
