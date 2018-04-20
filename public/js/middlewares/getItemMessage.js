import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'GETITEMMESSAGE') {

    request.post('/getItemMessage')
      .send({
        itemId: action.itemId
      })
      .end((err, res)=> {
        next({type: action.type, itemMessage: res.body});
      });
  }

  else {
    next(action);
  }
};
