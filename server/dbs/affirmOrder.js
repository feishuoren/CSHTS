const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function affirmOrder(req, callback) {
  let flag = 'fail';
  const checkedItems = req.body.checkedItems;
  const userSno = req.body.userSno;
  const userName = req.body.userName;
  const payType = req.body.payType;
  const addTime = getNowFormatDate();

  cn.MongoClient.connect(cn.url, (err, database) => {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const itemCollection = database.collection('items');
      const userCollection = database.collection('users');

      checkedItems.forEach((ele, index) => {
        let itemId = ele.itemId;
        let itemPicture = ele.itemPicture;
        let itemName = ele.itemName;
        let itemOwner = ele.itemOwner;
        let itemAccount = ele.itemAccount;
        let boughtUserSno = userSno;
        let boughtUserName = userName;
        let itemPrice = ele.itemPrice;
        let count = ele.count;
        let orderId = createOrderId(itemId, itemAccount, userSno, addTime);
        let theBoughtOrder = {
          itemId,
          itemPicture,
          itemName,
          itemOwner,
          itemAccount,
          itemPrice,
          count,
          payType,
          orderId,
          addTime
        };
        let theSellOrder = {
          itemId,
          itemPicture,
          itemName,
          boughtUserSno,
          boughtUserName,
          itemPrice,
          count,
          payType,
          orderId,
          addTime
        };

        itemCollection.updateOne({_id: ObjectID(itemId)}, {$set: {itemStatus: false}});

        userCollection.findOne({sno: userSno}, (err, result) => {
          if (Array.isArray(result.myBoughtOrders) && result.myBoughtOrders.length > 0) {
            result.myBoughtOrders.push(theBoughtOrder);
            userCollection.save(result);
          }
          else {
            userCollection.updateOne({sno: userSno}, {$set: {'myBoughtOrders': [theBoughtOrder]}});
          }
        });

        userCollection.findOne({sno: itemAccount}, (err, result) => {
          if (Array.isArray(result.mySellOrders) && result.mySellOrders.length > 0) {
            result.mySellOrders.push(theSellOrder);
            userCollection.save(result);
          }
          else {
            userCollection.updateOne({sno: itemAccount}, {$set: {'mySellOrders': [theSellOrder]}});
          }
        });

      });

      flag = 'success';
      callback(flag);
    }
  });
}

function getNowFormatDate() {
  const date = new Date();
  const dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
  const currentDate = dateArr.map((e) => e < 10 ? ('0' + e) : e).join('');

  return currentDate;
}

function createOrderId(itemId, sellSno, boughtSno, addTime) {
  const orderId = itemId + sellSno + boughtSno + addTime;

  return orderId;
}

module.exports = affirmOrder;
