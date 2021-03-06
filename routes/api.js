var express =  require('express');

var router = express.Router();


var githook = require('./api/githook.js')
var project = require('./api/project.js')
var command = require('./api/command.js')


router.use('/githook', githook)
router.use('/project', project)
router.use('/commands', command)

module.exports = router;