const express = require('express');
const router = express.Router();
const addItemToShoppingCart = require('../dbs/addItemToShoppingCart');

router.post('/addItemToShoppingCart', (req, res)=> {
  addItemToShoppingCart(req, (result)=> {
    res.send(result);
  });
});

module.exports = router;
