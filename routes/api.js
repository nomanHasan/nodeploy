var express =  require('express');

var router = express.Router();


var githook = require('./api/githook.js')
var project = require('./api/project.js')


router.use('/githook', githook)
router.use('/project', project)

module.exports = router;