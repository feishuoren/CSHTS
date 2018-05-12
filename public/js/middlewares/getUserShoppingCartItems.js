import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'GETUSERSHOPPINGCART') {

    request.post('/getUserShoppingCart')
      .send({
        userSno: action.userSno
      })
      .end((err, res)=> {
        next({type: action.type, userShoppingCartItems: res.body});
      });
  }

  else {
    next(action);
  }
};
