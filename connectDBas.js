const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');


exports.connectDB = async function(db){
    const data = fs.readFileSync("./mongodburl.txt", 'utf8');
    const url ="mongodb://" + data;
    const mongoClient = new MongoClient(url);
    await mongoClient.connect();
    return mongoClient.db(db);
}
