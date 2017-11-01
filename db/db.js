var Datastore = require('nedb'), db = new Datastore({ filename: './nodeploy.db', autoload: true });
module.exports = db;