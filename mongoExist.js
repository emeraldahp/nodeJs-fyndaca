const MongoClient = require('mongodb').MongoClient;

async function mongo() {
    
    let mongoClient;
    const url = "mongodb://localhost:27017";
    
    try{
        
        mongoClient = new MongoClient(url);
        await mongoClient.connect();
        console.log("connection true")
        data = await mongoClient.db("ecomdb").collection("orders").find({name:{$exists:true}}).toArray();
        //console.log(data);
        data.forEach(element => {
            if(element.name=="Order3")
                mongoClient.db("ecomdb").collection("orders").update({name:"Order3"},{$set:{qty:2}});
        });
    }
    catch(err){
        console.log(err);
    }
}

mongo();