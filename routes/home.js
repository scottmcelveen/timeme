var express = require('express')
  , router = express.Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there again!'});
});

module.exports = router