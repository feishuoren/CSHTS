import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'SHOWITEMS') {

    request.get('/getItems')
      .end((err, res)=> {
        next({type: action.type, itemList: res.body});
      });
  }

  else {
    next(action);
  }
};
