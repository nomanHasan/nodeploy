var express = require('express')

var router = express.Router()
// var r  = require('../../../../../../hoxro.visualstudio/hoxro-ui-Copy')

const CWD = '../../../../../../hoxro.visualstudio/hoxro-ui-Copy'

var gitShell = require('../../programs/git')
var npmShell = require('../../programs/npm')

var fsystem = require('../../programs/fsystem')

router.get('/', async function (req, res, next) {

    console.log('Githook Executed')

    let gitStatus, pullStatus, buildStatus, startStatus;

    try {

        gitStatus = await gitShell.gitStatus(CWD)

        pullStatus = await gitShell.gitPull(CWD)

        buildStatus = await npmShell.npmBuild(CWD)

        startStatus = await npmShell.npmStart(CWD)

    } catch (error) {

        console.error(`${error}`)

        return res.status(400).json({
            status: 400,
            message: error
        })
    }

    console.log('PROM DONE')
    console.log(gstatus, pullStatus)

    // let del = await fsystem.deleteNodeModules()

    // console.log(del)

    // let ins = await npmShell.npmInstall()

    // console.log(ins)

    // let dd = await fsystem.deleteDist()

    // console.log(dd)

    // let bld = await npmShell.npmBuild()

    // console.log(bld)


    return res.status(200).json({
        status: 200,
        message: "Githook succesfully executed"
    })

})




const { spawn } = require('child_process');

router.ws('/', async function (ws, req) {

    console.log('Githook Executed')

    let gitStatus, pullStatus, buildStatus, startStatus;

    try {

        gitStatus = await gitShell.gitStatus(CWD, ws)

        pullStatus = await gitShell.gitPull(CWD, ws)

        // buildStatus = await npmShell.npmBuild(CWD, ws)

        // startStatus = await npmShell.npmStart(CWD, ws)

    } catch (error) {

        console.error(`${error}`)

        return res.status(400).json({
            status: 400,
            message: error
        })
    }


    ws.send(new Date() + " ")



})

module.exports = router;