import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    ordersID:{
        type: [String]
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
        type: String
    },
    selectPercentage:{
        type: String
    },
    select:{
        type: String
    },
    limitAmount:{
        type: String
    }
},{timestamps: true})

const Orders = mongoose.model("orders" , orderSchema)

export default Orders