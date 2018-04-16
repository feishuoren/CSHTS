const express = require('express');
const router = express.Router();

const logIn = require('../dbs/logIn');

router.post('/submitLogin', (req, res)=> {

  logIn(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;
