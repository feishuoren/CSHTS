export default (state = {isMatch: '', userMes: ''}, action)=> {
  switch (action.type) {
    case 'SUBMITLOGIN': {
      return {isMatch: action.result.isMatch, userMes: action.result.userMes};
    }
    case 'FIXLOGINFLAG': {
      return {flag: 0};
    }
  }
  return state;
};
