var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.redirect('/skills'), {title: 'Express Dev Skills'};
});

module.exports = router;
