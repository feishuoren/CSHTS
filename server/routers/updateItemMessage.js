const express = require('express');
const router = express.Router();
const updateItemMessage = require('../dbs/updateItemMessage');

router.post('/updateItemMessage', (req, res)=> {
  updateItemMessage(req, (result)=> {
    res.send(result);
  });
});

module.exports = router;
