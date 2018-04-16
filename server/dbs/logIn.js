const cn = require('./connect');

function logIn(req, callback) {
  let isMatch;
  let userMes;

  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const collection = database.collection('users');

      collection.find({'sno': req.body.inputSno}).toArray((err, result)=> {
        isMatch = 'false';
        if (result.length > 0 && result[0].password == req.body.inputPassword) {
          isMatch = 'true';
          userMes = {nickname: result[0].nickname, sno: result[0].sno};
        }
        callback({isMatch, userMes});
      });

    }
  });
}

module.exports = logIn;
