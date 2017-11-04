var express = require('express')
var router = express.Router()


var projectService = require('../../services/projects.service')


router.get('/', async function (req, res, next) {
    try {

        
        var projects = await projectService.getProjects()
    } catch (e) {
        console.log(e)

        return res.status(400).json(e)
    }

    console.log(projects)

    return res.status(200).json(projects)
})


router.post('/', async function(req, res, next){
    
    var newProject = {};

    newProject.name = req.body.name;
    newProject.description = req.body.description;
    newProject.path = req.body.path;
    
    try{
        var newProject = await projectService.insertProject(newProject)
    }catch(e){
        console.log(e)

        return res.status(400).json({
            status: 400,
            message: "Project could not be created"
        })
    }

    return res.status(200).json({
        status: 200,
        message: "Project succesfully opened",
        project: newProject
    })

})


router.put('/', async function(req, res, next){

    var id = req.body._id;
    
    var newProject = {};

    newProject.name = req.body.name;
    newProject.description = req.body.description;
    newProject.path = req.body.path;
    
    try{
        var newProject = await projectService.editProject(id, newProject)
    }catch(e){
        console.log(e)

        return res.status(400).json({
            status: 400,
            message: "Project could not be Edited"
        })
    }

    return res.status(200).json({
        status: 200,
        message: "Project succesfully Edited",
        project: newProject
    })

})
router.delete('/:id', async function(req, res, next){

    var id = req.params.id;
    
    try{
        var newProject = await projectService.deleteProject(id)
    }catch(e){
        console.log(e)

        return res.status(400).json({
            status: 400,
            message: "Project could not be Deleted"
        })
    }
    
    return res.status(200).json({
        status: 200,
        message: "Project succesfully Deleted",
        project: newProject
    })

})


module.exports = router;