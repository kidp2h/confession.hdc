var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login.hdc', function(req, res, next) {
  res.render('login');
});
router.get('/manage.hdc', function(req, res, next) {
  res.render('tables');
});
module.exports = router;
