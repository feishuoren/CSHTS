import request from 'superagent';

export default store =>next=>action=> {

  if (action.type === 'UPDATEITEMMESSAGE') {

    request.post('/updateItemMessage')
      .send({
        newImgdataUrl:action.newImgdataUrl,
        newItemName:action.newItemName,
        newItemBrand:action.newItemBrand,
        newContactInfo:action.newContactInfo,
        newItemPrice:action.newItemPrice,
        newItemSynopsis:action.newItemSynopsis,
        newItemAccount:action.newItemAccount,
        newItemOwner:action.newItemOwner,
        ItemMessage:action.ItemMessage
      })
      .end((err, res)=> {
        next({type: action.type, result: res.text});
      });
  }

  else {
    next(action);
  }
};
