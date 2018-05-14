import request from 'superagent';

export default store => next => action => {
  if (action.type === 'SBMITORDER') {
    request.post('/submitOrder')
      .send({
        payType: action.payType,
        checkedItems: action.checkedItems,
        userSno: action.userSno,
        userName: action.userName
      })
      .end((err, res) => {
        next({type: action.type, result: res.text});
      });
  }
  else {
    next(action);
  }
};
