import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    ordersID:{
        type: [String]
    },
    name:{
        type: String
    },
    entry:{
        type: Number
    },
    short:{
        type: String
    },
    long:{
        type: String
    },
    markets:{
        type: String
    },
    amount:{
        type: Number
    },
    selectPercentage:{
        type: String
    },
    select:{
        type: String
    },
    limitAmount:{
        type: Number
    }
},{timestamps: true})

const Orders = mongoose.model("orders" , orderSchema)

export default Orders