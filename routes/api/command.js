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
    return res.status(200).json(commands)
})

router.post('/:projectId', async function (req, res, next) {

    console.log('POST COMMAND')

    // let projectId = req.params.projectId;

    let command = {
         application: req.body.application,
         arguments: req.body.arguments,
         order: req.body.order
    }

    console.log(command)

    // try {
    //     var commands = await commandService.getCommands(projectId)
    // } catch (e) {
    //     console.log(e)
    //     return res.status(400).json(e)
    // }


    return res.status(200).json(command)
})


module.exports = router;