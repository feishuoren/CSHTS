const express = require('express');
const router = express.Router();

const getItemMessage = require('../dbs/getItemMessage');

router.post('/getItemMessage', (req, res)=> {
  getItemMessage(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
