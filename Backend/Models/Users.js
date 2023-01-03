import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
})

const Users = mongoose.model("users" , userSchema)
export default Users