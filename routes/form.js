var express = require('express');
var router = express.Router();

/* GET fact sheet layout */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Upload Content', subtitle: '' });
});

module.exports = router;
