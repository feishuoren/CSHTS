import request from 'superagent';

export default store => next => action => {

  if (action.type === 'GETUSERSELLORDERS') {

    request.post('/getUserSellOrders')
      .send({
        userSno: action.userSno
      })
      .end((err, res) => {
        next({type: action.type, userSellOrders: res.body});
      });
  }

  else {
    next(action);
  }
};
