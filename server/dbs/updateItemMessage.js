let fs = require('fs');
const cn = require('./connect');
const ObjectID = require('mongodb').ObjectID;

function updateItemMessage(req, callback) {
  let flag = 'fail';
  const path = './public/images/itemPic/';
  let itemPicture = req.body.ItemMessage.itemPicture;
  const imageDateUrl = req.body.newImgdataUrl;
  const itemName = req.body.newItemName;
  const itemBrand = req.body.newItemBrand;
  const contactInfo = req.body.newContactInfo;
  const itemPrice = req.body.newItemPrice;
  const itemSynopsis = req.body.newItemSynopsis;
  const itemAccount = req.body.newItemAccount;
  const itemOwner = req.body.newItemOwner;
  const itemStatus = true;
  const itemComments = req.body.ItemMessage.itemComments;

  if (imageDateUrl && typeof imageDateUrl === 'string') {

    fs.exists(itemPicture, function (exists) {
      if (exists) {
        fs.unlink(itemPicture, function (err) {
          if (err) {
            return console.error(err);
          }
          console.log('文件删除成功！');
        });
      }
    });

    itemPicture = addItemPic(path, imageDateUrl, itemName, itemAccount);
  }

  cn.MongoClient.connect(cn.url, (err, db) => {
    const collection = db.collection('items');
    const userCollection = db.collection('users');

    collection.updateOne({_id: ObjectID(req.body.ItemMessage._id)}, {
      $set: {
        itemPicture, itemName, itemBrand, contactInfo, itemPrice,
        itemSynopsis, itemAccount, itemOwner, itemStatus, itemComments
      }
    }, (err, insertResult) => {
      if (insertResult.result.ok === 1) {
        flag = 'success';
      }
      callback(flag);
    });

  });

}

function addItemPic(path, imageDateUrl, itemName, itemAccount) {
  const regex = /^data:.+\/(.+);base64,(.*)$/;
  const matches = imageDateUrl.match(regex);
  const imgExt = matches[1];
  const imgData = matches[2];
  const currentDate = getNowFormatDate();
  const imgName = itemName + itemAccount + currentDate;
  const buffer = new Buffer(imgData, 'base64');
  let itemImg = imgName + '.' + imgExt;
  const ItemSrc = path + itemImg;

  fs.stat(path, function (err, stat) {
    if (!(stat && stat.isDirectory())) {
      console.log('创建images文件夹');
      fs.mkdirSync(path, function (err) {
        if (err) console.log('创建失败！');
        else console.log('创建成功！');
      });
    } else {
      console.log('public/images/itemPic已存在');

    }

    fs.exists(ItemSrc, function (exists) {
      if (exists) {
        fs.unlink(ItemSrc, function (err) {
          if (err) {
            return console.error(err);
          }
          console.log('文件删除成功！');
        });
      }
    });

    fs.open(ItemSrc, 'w', function (err, fd) {
      if (err) {
        console.error(err);
        return;
      } else {
        fs.writeFile(ItemSrc, buffer, function (err) {
          if (err) throw err;
          console.log('文件写入成功');
        });
        fs.close(fd, function (err) {
          if (err) {
            console.log(err);
          }
          console.log('文件关闭成功！');
        });
      }
    });
  });

  return '../../images/itemPic/' + itemImg;
}

function getNowFormatDate() {
  const date = new Date();
  const dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
  const currentDate = dateArr.map((e) => e < 10 ? ('0' + e) : e).join('');

  return currentDate;
}

module.exports = updateItemMessage;
