import request from 'superagent';

export default store=>next=>action=> {
  if (action.type === 'UPDATEITEMMESSAGE') {
    request.post('/addSellItem')
      .send({
        imageDateUrl: action.imageDateUrl,
        itemName: action.itemName,
        itemBrand: action.itemBrand,
        itemSynopsis: action.itemSynopsis,
        itemAccount: action.itemAccount,
        itemOwner: action.itemOwner
      })
      .end((err, res)=> {
        next({type: action.type, result: res.text});
      });
  }
  else {
    next(action);
  }
};
