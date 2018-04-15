let fs = require('fs');
const cn = require('./connect');

function sellItem(req, callback) {
  let flag = 'fail';
  const path = './public/images/itemPic/';
  const imageDateUrl = req.body.imageDateUrl;
  const itemName = req.body.itemName;
  const itemBrand = req.body.itemBrand;
  const itemSynopsis = req.body.itemSynopsis;
  const itemAccount = req.body.itemAccount;
  const itemOwner = req.body.itemOwner;
  const itemStatus = true;
  const itemComments = [];

  if (imageDateUrl && typeof imageDateUrl === 'string') {
    const itemPicture = addItemPic(path, imageDateUrl, itemName, itemAccount);

    cn.MongoClient.connect(cn.url, (err, db)=> {
      const collection = db.collection('items');
      const usersCollection = db.collection('users');

      collection.insertOne({
        itemPicture, itemName, itemBrand,
        itemSynopsis, itemAccount, itemOwner, itemStatus, itemComments
      }, (err, insertResult)=> {
        if (insertResult.result.ok === 1) {
          flag = 'success';
        }
        callback(flag);
      });

      usersCollection.updateOne({name: itemOwner}, {
        $push: {
          'myItems': {
            itemPicture, itemName, itemBrand,
            itemSynopsis, itemStatus
          }
        }
      });

    });

  } else {
    console.log('没有图片数据');
    callback(flag);
  }

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

    if (fs.exists(path)) {

      fs.unlink(ItemSrc, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('文件删除成功！');
      });
    }

    fs.open(ItemSrc, 'w', function (err, fd) {
      if (err) {
        console.error(err);
        return;
      } else {
        fs.writeFile(ItemSrc, buffer);
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
  const currentDate = dateArr.map((e)=> e < 10 ? ('0' + e) : e).join('');

  return currentDate;
}

module.exports = sellItem;
