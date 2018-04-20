import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'GETUSERITEMS') {

    request.post('/getUserItems')
      .send({
        userSno: action.userSno
      })
      .end((err, res)=> {
        next({type: action.type, userItems: res.body});
      });
  }

  else {
    next(action);
  }
};
