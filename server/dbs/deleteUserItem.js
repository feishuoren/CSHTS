const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function deleteUserItem(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('items');

      collection.remove({'_id':ObjectID(req.body.user_Item)});

      collection.find({itemAccount: req.body.user_Sno}).toArray((err, result)=> {

        callback(result);
      });

      database.close();
    }
  });
}

module.exports = deleteUserItem;
