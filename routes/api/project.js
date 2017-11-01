var express = require('express')
var router = express.Router()


var projectService = require('../../services/projects.service')


router.get('/', async function (req, res, next) {
    try {

        // var ins = await projectService.insertProject({
        //     project_name: "hoxro-ui",
        //     created_date:new Date(),
        //     commands:[
        //         {
        //             application: "git",
        //             arguments: "status",
        //             order: 0
        //         },
        //         {
        //             application: "git",
        //             arguments: "pull origin master",
        //             order: 1
        //         },
        //         {
        //             application: "npm",
        //             arguments: "install",
        //             order: 2
        //         },
        //         {
        //             application: "npm",
        //             arguments: "run build:prod",
        //             order: 3
        //         },
        //         {
        //             application: "npm",
        //             arguments: "start",
        //             order: 4
        //         }
        //     ]
        // })
        
        var projects = await projectService.getProjects()
    } catch (e) {
        console.log(e)

        return res.status(400).json(e)
    }

    console.log(projects)

    return res.status(200).json(projects)
})


module.exports = router;