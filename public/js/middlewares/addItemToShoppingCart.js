import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'ADDITEMTOSHOPPINGCART') {

    request.post('/addItemToShoppingCart')
      .send({
        itemMessage: action.itemMessage,
        sno: action.sno
      })
      .end((err, res)=> {
        next({type: action.type, result: res.body});
      });
  }

  else {
    next(action);
  }
};
