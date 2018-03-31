let express = require('express');
let app = express();

app.use(express.static(__dirname + '/'));
app.listen(3000, function () {
  console.log('listen 3000!');
});
