export default (state = {itemMessage: [], imgdataUrl: '', result: ''}, action) => {
  switch (action.type) {
    case 'ADDSELLITEM': {
      return {itemMessage: state.itemMessage, imgdataUrl: action.imgdataUrl, result: state.result};
    }
    case 'UPDATEITEMMESSAGE': {
      return {itemMessage: state.itemMessage, imgdataUrl: state.imgdataUrl, result: action.result};
    }
    case 'GETITEMMESSAGE': {
      return {itemMessage: action.itemMessage, imgdataUrl: state.imgdataUrl, result: state.result};

    }
  }
  return state;
};
