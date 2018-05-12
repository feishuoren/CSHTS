const express = require('express');
const router = express.Router();
const deleteUserShoppingCartItem = require('../dbs/deleteUserShoppingCartItem');

router.post('/deleteUserShoppingCartItem', (req, res)=> {
  deleteUserShoppingCartItem(req, (result)=> {
    res.send(result);
  });
});

module.exports = router;
