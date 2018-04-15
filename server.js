const express = require('express');
const app = express();

const getItems = require('./server/routers/showItems');
const submitSignin = require('./server/routers/signIn');
const addSellItem = require('./server/routers/sellItem');

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use('/', getItems);
app.use('/', submitSignin);
app.use('/', addSellItem);

app.listen(3000, function () {
  console.log('listen 3000!');
});
