var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);

const { spawn } = require('child_process');

var PromisifySpawn = require('../utility/spawnutil').PromisifySpawn;


exports.executeCommand = function (command, cwd, ws) {
    return PromisifySpawn(spawn(command.application, [...command.args], {
        cwd: cwd
    }), ws).catch(err => {
        return err;
    })
}