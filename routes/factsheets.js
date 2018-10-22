var express = require('express');
var router = express.Router();

/* GET fact sheet layout */
router.get('/', function(req, res, next) {
  res.render('factsheets', { title: 'Getting Started', subtitle: 'Asurion 101' });
});

module.exports = router;
