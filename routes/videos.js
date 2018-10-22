var express = require('express');
var router = express.Router();

/* GET fact sheet layout */
router.get('/', function(req, res, next) {
  res.render('videos', { title: 'Career Advancement', subtitle: 'Training Videos' });
});

module.exports = router;
