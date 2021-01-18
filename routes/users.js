var express = require('express');
var router = express.Router();
let UserModel = require("../models/User.Model");
let QuestionModel = require("../models/Question.Model")

router.get('/login.hdc', function(req, res, next) {
  res.render('login');
});

router.get('/manage.hdc', function(req, res, next) {
  res.render('tables');
});

router.get('/question.hdc', function(req, res, next) {
  res.render('question');
});

module.exports = router;
