export default (state = {result: 0}, action) => {
  if (action.type === 'SBMITORDER') {
    return {result: action.result};
  }
  return state;
};
