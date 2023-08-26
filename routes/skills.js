var express = require('express');
var router = express.Router();
var skillCtrl = require('../controllers/skills');

// All of theses reoutes are prefixed with '/skills'
// GET /skills
router.get('/', skillCtrl.index);
// GET todos/new <- define before show route
router.get('/new', skillCtrl.new);
// GET /skills/:id
router.get('/:id', skillCtrl.show);
// POST /skills
router.post('/', skillCtrl.create);
// DELETE /skills
router.delete('/:id', skillCtrl.delete);


module.exports = router;
