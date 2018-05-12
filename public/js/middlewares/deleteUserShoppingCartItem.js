import request from 'superagent';

export default store => next => action => {

  if (action.type === 'DELETEUSERSHOPPINGCARTITEM') {

    request.post('/deleteUserShoppingCartItem')
      .send({
        theUser: action.theUser,
        theItem: action.theItem
      })
      .end((err, res) => {
        next({type: action.type, userShoppingCartItems: res.body});
      });
  }

  else {
    next(action);
  }
};
