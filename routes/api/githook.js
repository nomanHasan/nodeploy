var express = require('express')

var router = express.Router()



var gitShell = require('../../programs/git')
var npmShell = require('../../programs/npm')

var fsystem = require('../../programs/fsystem')

router.get('/', async function (req, res, next) {

    console.log('Githook Executed')

    let gitStatus, pullStatus, buildStatus, startStatus;

    try {

        gitStatus = await gitShell.gitStatus('./hoxro-ui')

        pullStatus = await gitShell.gitPull('./hoxro-ui')

        buildStatus = await npmShell.npmBuild('./hoxro-ui')

        startStatus = await npmShell.npmStart('./hoxro-ui')

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


router.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        ws.send('Githook '+msg);
    });
})

module.exports = router;