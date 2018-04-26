import request from 'superagent';

export default store => next => action => {

  if (action.type === 'DELETEUSERITEM') {

    request.post('/deleteUserItem')
      .send({
        user_Item: action.user_Item,
        user_Sno: action.user_Sno
      })
      .end((err, res) => {
        next({type: action.type, userItems: res.body});
      });
  }

  else {
    next(action);
  }
};
