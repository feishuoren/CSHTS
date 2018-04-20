const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function addItemComment(req, callback) {
  const itemId = req.body.itemId;
  const itemName = req.body.itemName;
  const nickname = req.body.nickname;
  const sno = req.body.sno;
  const comment = req.body.comment;
  const addTime = getNowFormatDate();

  cn.MongoClient.connect(cn.url, (err, database)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const itemCollection = database.collection('items');
      const userCollection = database.collection('users');

      itemCollection.findOne({_id: ObjectID(itemId)}, (err, result) => {
        result.itemComments.push({nickname, sno, comment, addTime});
        itemCollection.save(result);
        callback(result);
      });

      userCollection.findOne({sno: sno}, (err, result) => {
        result.myComments.push({itemId, itemName, comment, addTime});
        userCollection.save(result);
      });

    }
  });
}

function getNowFormatDate() {
  const date = new Date();
  const dateArray = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()].map((e)=> e < 10 ? ('0' + e) : e);
  const currentDate = dateArray[0] + '年' + dateArray[1] + '月' + dateArray[2] + '日' + dateArray[3] + '时' + dateArray[4] + '分' + dateArray[5] + '秒';

  return currentDate;
}

module.exports = addItemComment;
