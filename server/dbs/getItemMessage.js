const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function getItemMessage(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('items');

      collection.find({_id: ObjectID(req.body.itemId)}).toArray((err, result)=> {

        callback(result[0]);
      });

      database.close();
    }
  });
}

module.exports = getItemMessage;
