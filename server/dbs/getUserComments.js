const cn = require('./connect');

function getUserComments(req, callback) {
  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      const collection = database.collection('users');

      collection.findOne({sno: req.body.userSno},(err, result)=> {

        callback(result.myComments);
      });

      database.close();
    }
  });
}

module.exports = getUserComments;
