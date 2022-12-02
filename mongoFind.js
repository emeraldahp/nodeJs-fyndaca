const MongoClient = require('mongodb').MongoClient;

async function mongo() {
    
    let mongoClient;
    const url = "mongodb://localhost:27017";
    
    try{
        
        mongoClient = new MongoClient(url);
        await mongoClient.connect();
        console.log("connection true")
        data = await mongoClient.db("ecomdb").collection("orders").find({}).toArray();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

mongo();