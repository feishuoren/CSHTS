const cn = require('./connect');

function showItems(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('items');

      collection.find({}).toArray((err, result)=> {

        callback(result);
      });

      database.close();
    }
  });
}

module.exports = showItems;
