import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'SUBMITLOGIN') {
    request.post('/submitLogin')
      .send({inputSno: action.inputSno, inputPassword: action.inputPassword})
      .end((err, res)=> {
        next({type: action.type, result: res.body});
      });
  }

  else {
    next(action);
  }
};
