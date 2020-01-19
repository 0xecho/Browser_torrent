var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Browser Torrent', msg_in_browser : '<b>ALL RIGHT IN YOUR BROWSER</b>' });
});



module.exports = router;
