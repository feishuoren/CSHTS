const cn = require('./connect');

function addItemToShoppingCart(req, callback) {
  const itemId = req.body.itemMessage._id;
  const itemPicture = req.body.itemMessage.itemPicture;
  const itemName = req.body.itemMessage.itemName;
  const itemOwner = req.body.itemMessage.itemOwner;
  const itemPrice = req.body.itemMessage.itemPrice;
  const sno = req.body.sno;
  let count = 1;
  let theOldShoppingCartItem;
  let theShoppingCartItem = {itemId, itemPicture, itemName, itemOwner, itemPrice, count};

  cn.MongoClient.connect(cn.url, (err, database) => {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const userCollection = database.collection('users');

      userCollection.findOne({sno: sno}, (err, result) => {
        let isExist = false;

        if (Array.isArray(result.myShoppingCart) && result.myShoppingCart.length > 0) {
          result.myShoppingCart.forEach((ele) => {
            if (ele.itemId === itemId) {
              isExist = true;
              count += ele.count;
              theOldShoppingCartItem = ele;
              theShoppingCartItem = {itemId, itemPicture, itemName, itemOwner, itemPrice, count};
            }
          });
          if (!isExist) {
            result.myShoppingCart.push(theShoppingCartItem);
          }
          else {
            result.myShoppingCart.splice(result.myShoppingCart.indexOf(theOldShoppingCartItem), 1, theShoppingCartItem);
          }
          userCollection.save(result);
        }
        else {
          userCollection.updateOne({sno: sno}, {$set: {'myShoppingCart': [theShoppingCartItem]}});
        }
      });

    }
  });
}

module.exports = addItemToShoppingCart;
