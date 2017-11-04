var db = require('../db/db')


exports.insertProject = function(doc){
    return new Promise((resolve, reject) => {
        doc.created_date = new Date()
        db.insert(doc, (err, newDoc) => {
            if(err){
                reject(err)
            }else{
                resolve(newDoc)
            }
        })
    })
}

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

exports.editProject = function(id, doc){
    return new Promise((resolve, reject) => {
        db.update({_id: id}, doc, {returnUpdatedDocs: true}, (err, newDoc) => {
            if(err){
                reject(err)
            }else{
                resolve(newDoc)
            }
        })
    })
}

exports.deleteProject = function(id){
    return new Promise((resolve, reject) => {
        db.remove({_id: id}, (err, numRemoved) => {
            if(err){
                reject(err)
            }else{
                resolve(numRemoved)
            }
        })
    })
}