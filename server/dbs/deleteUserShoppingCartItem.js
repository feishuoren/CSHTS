const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function deleteUserShoppingCartItem(req, callback) {
  const sno = req.body.theUser;
  const theItem = req.body.theItem;

  cn.MongoClient.connect(cn.url, (err, database) => {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const userCollection = database.collection('users');

      userCollection.findOne({sno: sno}, (err, result) => {
        result.myShoppingCart.splice(result.myShoppingCart.indexOf(theItem), 1);
        userCollection.save(result);
        callback(result.myShoppingCart);
      });

    }
  });
}

module.exports = deleteUserShoppingCartItem;
