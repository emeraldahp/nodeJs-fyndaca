const MongoClient = require('mongodb').MongoClient;


exports.connectDB=function(db){
    
    const url ="mongodb://localhost:27017";
    const mongoClient = new MongoClient(url);
    mongoClient.connect();
    return mongoClient.db(db);
}

