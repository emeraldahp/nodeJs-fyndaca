const MongoClient = require('mongodb').MongoClient;

let mongoClient;
const url ="mongodb://localhost:27017";
try{
    mongoClient = new MongoClient(url)
    mongoClient.connect();

    const db = mongoClient.db("exedb");
    const collection = db.collection("persons")
    collection.findOne({},function(err,result){
        //console.log(result);
        if (err) throw err;
        if(result.age==33){
            collection.update({name:"person1"},{$set:{age:"42"}});
        }
        
    });
    

}
catch(err){
    console.log(err)
}