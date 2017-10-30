var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);

const { spawn } = require('child_process');

var PromisifySpawn = require('../utility/spawnutil').PromisifySpawn;


exports.gitStatus = function (cwd) {
    return PromisifySpawn(spawn('git', ['status'], {
        cwd: cwd
    }))
}

exports.gitPull = function (cwd) {
    return PromisifySpawn(spawn('git', ['pull','origin','master'], {
        cwd: cwd 
    })).catch(err => {
        return err;
    })
}