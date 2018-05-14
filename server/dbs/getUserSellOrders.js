const cn = require('./connect');

function getUserSellOrders(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('users');

      collection.findOne({sno: req.body.userSno}, (err, result) => {

        const callbackValue = Array.isArray(result.mySellOrders) && result.mySellOrders.length > 0 ? result.mySellOrders.reverse() : [];

        callback(callbackValue);
      });

      database.close();
    }
  });
}

module.exports = getUserSellOrders;
