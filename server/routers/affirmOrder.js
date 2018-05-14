const express = require('express');
const router = express.Router();
const affirmOrder = require('../dbs/affirmOrder');

router.post('/submitOrder', (req, res) => {
  affirmOrder(req, (result) => {
    res.send(result);
  });
});

module.exports = router;
