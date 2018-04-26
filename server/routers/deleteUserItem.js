const express = require('express');
const router = express.Router();

const deleteUserItem = require('../dbs/deleteUserItem');

router.post('/deleteUserItem', (req, res)=> {
  deleteUserItem(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
