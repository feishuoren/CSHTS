import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'ADDCOMMENT') {

    request.post('/addItemComment')
      .send({
        itemId: action.itemId,
        itemPicture: action.itemPicture,
        itemName: action.itemName,
        nickname: action.nickname,
        sno: action.sno,
        comment: action.comment
      })
      .end((err, res)=> {
        next({type: action.type, result: res.body});
      });
  }

  else {
    next(action);
  }
};
