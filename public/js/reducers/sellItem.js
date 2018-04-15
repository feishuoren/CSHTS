export default (state = {imgdataUrl: '', result: ''}, action)=> {
  switch (action.type) {
    case 'ADDSELLITEM': {
      return {imgdataUrl: action.imgdataUrl};
    }
    case 'UPDATEITEMMESSAGE': {
      return {result: action.result};
    }
  }
  return state;
};
