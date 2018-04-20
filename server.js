const express = require('express');
const app = express();

const getItems = require('./server/routers/showItems');
const getItemMessage = require('./server/routers/getItemMessage');
const submitSignin = require('./server/routers/signIn');
const submitLogin = require('./server/routers/logIn');
const addSellItem = require('./server/routers/sellItem');
const getUserMessage = require('./server/routers/getUserMessage');

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use('/', getItems);
app.use('/', getItemMessage);
app.use('/', submitSignin);
app.use('/', submitLogin);
app.use('/', addSellItem);
app.use('/', getUserMessage);

app.listen(3000, function () {
  console.log('listen 3000!');
});
