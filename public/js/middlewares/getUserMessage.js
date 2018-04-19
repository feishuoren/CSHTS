import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'GETUSERMESSAGE') {

    request.post('/getUserMessage')
      .send({
        userSno:action.userSno
      })
      .end((err, res)=> {
        next({type: action.type, userMessage: res.body});
      });
  }

  else {
    next(action);
  }
};
