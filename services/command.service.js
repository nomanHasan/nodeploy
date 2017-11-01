var Datastore = require('nedb'), db = new Datastore({ filename: './nodeploy.db', autoload: true });


exports.getCommands = function (id) {
    return new Promise((resolve, reject) => {
        db.findOne({_id: id}, (err, docs) => {
            if(err){
                reject(err)
            }else{
                resolve(docs.commands)
            }
        })
    })
}

exports.insertCommand = function(id, command){
    return new Promise((resolve, reject) => {
        db.update({_id: id}, {$push: {commands: command}}, {returnUpdatedDocs: true}, (err, updatedDoc) => {
            if(err){
                reject(err)
            }else{
                resolve(updatedDoc)
            }
        })
    })
}