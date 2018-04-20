import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'GETUSERCOMMENTS') {

    request.post('/getUserComments')
      .send({
        userSno: action.userSno
      })
      .end((err, res)=> {
        next({type: action.type, userComments: res.body});
      });
  }

  else {
    next(action);
  }
};
