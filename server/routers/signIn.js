const express = require('express');
const router = express.Router();

const signIn = require('../dbs/signIn');

router.post('/submitSignin', (req, res)=> {

  signIn(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
