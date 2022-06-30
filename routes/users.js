const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/records', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a 123');
});

module.exports = router;
