import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    accountType:{
        type: String,
        enum: [ "unbanned", "banned" ],
        default: "unbanned"
    },
    orderID:{
        type: [String]
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{timestamps: true})

const Users = mongoose.model("users" , userSchema)
export default Users