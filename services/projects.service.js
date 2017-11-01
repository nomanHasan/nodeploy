var Datastore = require('nedb'), db = new Datastore({ filename: './nodeploy.db', autoload: true });


exports.getProjects = function () {
    return new Promise((resolve, reject) => {
        db.find({}, (err, docs) => {
            if(err){
                reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}

exports.insertProject = function(doc){
    return new Promise((resolve, reject) => {
        db.insert(doc, (err, docs) => {
            if(err){
                reject(err)
            }else{
                resolve(docs)
            }
        })
    })
}