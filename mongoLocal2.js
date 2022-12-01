const MongoClient = require('mongodb').MongoClient;

let mongoClient;
const url ="mongodb://localhost:27017";
try{
    mongoClient = new MongoClient(url)
    mongoClient.connect();

    const db = mongoClient.db("ecomdb");
    const data = db.collection("orders").findOne({},function(err,result){
        console.log(result);
    });
}
catch(err){
    console.log(err)
}
