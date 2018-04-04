const express = require('express');
const router = express.Router();

const showItems = require('../dbs/showItems');

router.get('/showItems', (req, res)=> {
  showItems(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
