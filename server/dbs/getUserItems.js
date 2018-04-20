const cn = require('./connect');

function getUserItems(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('items');

      collection.find({itemAccount: req.body.userSno}).toArray((err, result)=> {

        callback(result);
      });

      database.close();
    }
  });
}

module.exports = getUserItems;
