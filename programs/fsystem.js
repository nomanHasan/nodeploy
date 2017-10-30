var Promise = require('bluebird');

const rimrafPromise = require('rimraf-promise');

exports.deleteNodeModules = function () {
    return rimrafPromise('./hoxro-ui/node_modules')
}
exports.deleteDist = function () {
    return rimrafPromise('./hoxro-ui/dist')
}