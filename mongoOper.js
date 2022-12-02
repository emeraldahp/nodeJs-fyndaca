const MongoClient = require('mongodb').MongoClient;
const mongoClient = require("./connectDB");
try{
    const db = mongoClient.connectDB("ecomdb");
    const item = {
        name: "Tablet2",
        color: "Red",
        price: 22000
    };
    db.collection("products").insertOne(item);
}
catch(err){
    console.log(err)
}