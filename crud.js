const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://thristan:Livro101@clusterfree.jahfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
var ObjectId = require('mongodb').ObjectID;

var crud = {};

client.connect((err, client) => {
    var namespace;
    var db;
    
    crud.create = function(collection,data,user,cb){
        if (cb && !collection || !data || !user || user && !user.namespace)
            return cb({ collection, data, user});

        db = client.db(user.namespace);

        data.CreatedDate = new Date();

        db.collection(collection).insertOne(data, (err, result) => {
            if (cb)
                return cb(err,result.ops[0]);
        });
    }


    crud.update = function (collection, id, data,user, cb) {
        if (cb && !collection || !id || !user || user && !user.namespace)
            return cb({ collection, data, user });

        db.collection(collection).update({ _id: new ObjectId(id) }, data,(err, result) => {

            if(cb)        
                return cb(err, data);
        });
    }


    crud.read = function (collection, id, user, cb) {
        if (cb && !collection || !id || !user || user && !user.namespace)
            return cb({ collection, id, user });

        db = client.db(user.namespace);

        db.collection(collection).findOne({ _id: new ObjectId(id) }, (err, result) => {
            if(cb)        
                return cb(err, result);
        });
    }


    crud.get = function(collection,paramName,paramValue,user,cb){

        if (cb && !collection || !paramName || !paramValue || !user || user && !user.namespace)
            return cb({ collection, paramName, paramValue, user});

        db = client.db(user.namespace);

        var obj = {};
        Object.defineProperty(obj, paramName, 
            {
                value: paramValue,
                writable: true,
                enumerable: true,
                configurable: true
            }
        );

        db.collection(collection).findOne(obj, (err, result) => {
            if(cb)
                return cb(err,result);
        });
    }


});

module.exports = crud;
