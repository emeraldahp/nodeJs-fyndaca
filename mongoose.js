const mongoose =  require('mongoose');

const url = "mongodb://localhost:27017/ecomdb";

async function mongo(){
    try{
        await mongoose.connect(url);
        const orderSchema = new mongoose.Schema({
            oId:{ type: Number, required: true },
            name:{ type: String, required: true},
            productId:{type: Number, required: true},
            qty: {type: Number, required: true},
            addr: {type: String, required: true}
        });
        const Order = mongoose.model('order', orderSchema);
        const data = await Order.find({});
        console.log(data);
    }
    catch(err){
        console.log(err);
    }

}

mongo()