const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function deleteUserComment(req, callback) {
  const nickname = req.body.theUserNickname;
  const sno = req.body.theUserSno;
  const itemId = req.body.theUserComment.itemId;
  const comment = req.body.theUserComment.comment;
  const addTime = req.body.theUserComment.addTime;
  const theItemComment = {nickname, sno, comment, addTime};
  const theUserComment = req.body.theUserComment;

  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const itemCollection = database.collection('items');
      const userCollection = database.collection('users');

      itemCollection.findOne({_id: ObjectID(itemId)}, (err, result) => {
        result.itemComments.splice(result.itemComments.indexOf(theItemComment),1);
        itemCollection.save(result);
      });

      userCollection.findOne({sno: sno}, (err, result) => {
        result.myComments.splice(result.myComments.indexOf(theUserComment),1);
        userCollection.save(result);
        callback(result.myComments);
      });

    }
  });
}

module.exports = deleteUserComment;
