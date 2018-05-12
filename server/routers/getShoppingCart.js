const express = require('express');
const router = express.Router();

const getUserShoppingCart = require('../dbs/getUserShoppingCart');

router.post('/getUserShoppingCart', (req, res)=> {
  getUserShoppingCart(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
