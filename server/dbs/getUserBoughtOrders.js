const cn = require('./connect');

function getUserBoughtOrders(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('users');

      collection.findOne({sno: req.body.userSno}, (err, result) => {
        const callbackValue = Array.isArray(result.myBoughtOrders) && result.myBoughtOrders.length > 0 ? result.myBoughtOrders.reverse() : [];

        callback(callbackValue);
      });

      database.close();
    }
  });
}

module.exports = getUserBoughtOrders;
