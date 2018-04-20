const express = require('express');
const router = express.Router();

const getUserItems = require('../dbs/getUserItems');

router.post('/getUserItems', (req, res)=> {
  getUserItems(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
