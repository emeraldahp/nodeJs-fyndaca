const MongoClient = require('mongodb').MongoClient;
const mongoClient = require("./connectDBas");
exports.fetchFromDB = async function(dbName, colName){
    try{
        const db = await mongoClient.connectDB(dbName);
        var data = await db.collection(colName).find({}).toArray();
    }
    catch(err){
        console.log(err);
    }
    return data;
}

