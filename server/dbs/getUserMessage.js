const cn = require('./connect');

function getUserMessage(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('users');

      collection.find({sno:req.body.userSno}).toArray((err, result)=> {

        callback(result[0]);
      });

      database.close();
    }
  });
}

module.exports = getUserMessage;
