const express = require('express');
const router = express.Router();

const getUserMessage = require('../dbs/getUserMessage');

router.post('/getUserMessage', (req, res)=> {
  getUserMessage(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
