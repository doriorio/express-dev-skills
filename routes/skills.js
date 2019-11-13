var express = require('express');
var router = express.Router();

//require the Todo model
var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
