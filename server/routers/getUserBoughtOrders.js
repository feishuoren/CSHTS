const express = require('express');
const router = express.Router();

const getUserBoughtOrders = require('../dbs/getUserBoughtOrders');

router.post('/getUserBoughtOrders', (req, res) => {
  getUserBoughtOrders(req, (result) => {

    res.send(result);
  });
});

module.exports = router;
