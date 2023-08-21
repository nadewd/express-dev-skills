var express = require('express');
var router = express.Router();
var skillCtrl = require('../controllers/skills')

// Get all skills
// All of theses reoutes are prefixed with '/skills'
router.get('/', skillCtrl.index);
router.get('/:id', skillCtrl.show);
router.get('/new', skillCtrl.new);
router.post('/', skillCtrl.create);


module.exports = router;
