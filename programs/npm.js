var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);

var PromisifySpawn = require('../utility/spawnutil').PromisifySpawn;

const { spawn } = require('child_process');



exports.npmBuild = function (cwd) {
    return PromisifySpawn(spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'build:prod'], {
        cwd: cwd
    }))
}

exports.npmStart = function (cwd) {
    return PromisifySpawn(spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['start'], {
        cwd: cwd
    }))
}

exports.npmInstall = function () {
    return PromisifySpawn(spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], {
        cwd: cwd
    }))
}
