import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'GETUSERBOUGHTORDERS') {

    request.post('/getUserBoughtOrders')
      .send({
        userSno: action.userSno
      })
      .end((err, res)=> {
        next({type: action.type, userBoughtOrders: res.body});
      });
  }

  else {
    next(action);
  }
};
