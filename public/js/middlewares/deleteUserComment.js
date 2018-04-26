import request from 'superagent';

export default store => next => action => {

  if (action.type === 'DELETEUSERCOMMENT') {

    request.post('/deleteUserComment')
      .send({
        theUserNickname: action.theUserNickname,
        theUserSno: action.theUserSno,
        theUserComment: action.theUserComment
      })
      .end((err, res) => {
        next({type: action.type, userComments: res.body});
      });
  }

  else {
    next(action);
  }
};
