const express = require('express');
const router = express.Router();
const sellItem = require('../dbs/sellItem');

router.post('/addSellItem', (req, res)=> {
  sellItem(req, (result)=> {
    res.send(result);
  });
});

module.exports = router;
