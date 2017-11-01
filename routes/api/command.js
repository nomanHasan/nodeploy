var express = require('express')
var router = express.Router()


var commandService = require('../../services/command.service')


router.get('/:projectId', async function (req, res, next) {
    let projectId = req.params.projectId;
    
    try {
        var commands = await commandService.getCommands(projectId)
    } catch (e) {
        console.log(e)
        return res.status(400).json(e)
    }

    console.log(commands)

    return res.status(200).json(commands)
})


module.exports = router;