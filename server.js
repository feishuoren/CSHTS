const express = require('express');
const app = express();

const showItems = require('./server/routers/showItems');

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use('/', showItems);

app.listen(3000, function () {
  console.log('listen 3000!');
});
