var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);

const { spawn } = require('child_process');

var PromisifySpawn = require('../utility/spawnutil').PromisifySpawn;


exports.gitStatus = function (cwd, ws) {
    return PromisifySpawn(spawn('git', ['status'], {
        cwd: cwd
    }), ws)
}

exports.gitPull = function (cwd, ws) {
    return PromisifySpawn(spawn('git', ['pull','origin','master'], {
        cwd: cwd 
    }), ws).catch(err => {
        return err;
    })
}