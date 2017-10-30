var express =  require('express');

var router = express.Router();


var githook = require('./api/githook.js')


router.use('/githook', githook)

module.exports = router;