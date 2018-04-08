const cn = require('./connect');

function signIn(req, callback) {
  let flag;

  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const collection = database.collection('users');

      collection.find({sno:req.body.sno}).count((err, result)=> {

        if (result > 0) {
          flag = false;
          callback(flag);
        }
        else {
          collection.insertOne({sno:req.body.sno, password:req.body.password, nickname:req.body.nickname}, (err)=> {
            flag = true;
            callback(flag);
          });

        }
      });

    }
  });
}

module.exports = signIn;
