const express = require('express');
const router = express.Router();
const addItemComment = require('../dbs/addItemComment');

router.post('/addItemComment', (req, res)=> {
  addItemComment(req, (result)=> {
    res.send(result);
  });
});

module.exports = router;
