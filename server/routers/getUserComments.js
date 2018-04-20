const express = require('express');
const router = express.Router();

const getUserComments = require('../dbs/getUserComments');

router.post('/getUserComments', (req, res)=> {
  getUserComments(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
