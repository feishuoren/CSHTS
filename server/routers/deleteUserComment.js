const express = require('express');
const router = express.Router();
const deleteUserComment = require('../dbs/deleteUserComment');

router.post('/deleteUserComment', (req, res)=> {
  deleteUserComment(req, (result)=> {
    res.send(result);
  });
});

module.exports = router;
