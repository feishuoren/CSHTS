const express = require('express');
const router = express.Router();

const getUserSellOrders = require('../dbs/getUserSellOrders');

router.post('/getUserSellOrders', (req, res) => {
  getUserSellOrders(req, (result) => {

    res.send(result);
  });
});

module.exports = router;
