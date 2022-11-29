const MongoClient = require('mongodb').MongoClient;

let mongoClient;
const url ="mongodb://localhost:27017";
try{
    mongoClient = new MongoClient(url)
    mongoClient.connect();

    const db = mongoClient.db("ecomdb");
    const item = {
        name: "Tablet1",
        color: "Red",
        price: 22000
    };
    db.collection("products").insertOne(item);
}
catch(err){
    console.log(err)
}




