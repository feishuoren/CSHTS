export default (state = {result: 0}, action)=> {
  if (action.type === 'SUBMITSIGNIN') {
    return {result:action.result};
  }
  return state;
};
