import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'SUBMITSIGNIN') {

    request.post('/submitSignin')
      .send({sno: action.sno, password: action.password, nickname: action.nickname})
      .end((err, res)=> {
        next({type: action.type, result: res.body});
      });
  }

  else {
    next(action);
  }
};
