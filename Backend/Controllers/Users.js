import Users from "../Models/Users.js"
import CryptoJS from "crypto-js"
import jwt  from "jsonwebtoken"
import cookieParser from "cookie-parser"


//register
export const registerUser = async (req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = CryptoJS.DES.encrypt( req.body.password, process.env.PASS_WORD);
    // const password = req.body.password;


    const savedUsers = Users({username: username, email: email, password: password})
    try{
        //lets check old user to avoid multiplr registration with same number
        const oldUser = await Users.findOne({$or: [{email: email}, {username: username}]})
        if(oldUser){
            res.status(400).json({msg: "already exists"})
        }else{
            const saveDetails = await savedUsers.save()
        }
        
    }catch(err){
        res.status(500).json(err)
    }
}

//login
export const loginUser = async (req,res)=>{
    const { email, username,password } = req.body
    try{
        const user = await Users.findOne({$or: [ {email: email } , {username: username } ]})
        if(!user){
            res.status(401).json({msg: "please register"})
        }else{
            const userpassword = user.password
            const hashedPassword = CryptoJS.DES.decrypt(userpassword, process.env.PASS_WORD);
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
            originalPassword !== req.body.password && res.status(403).json({msg: "password error"})
       
            const { password,email,_id,__v, isAdmin,...others} = user._doc

            const token = jwt.sign({
                _id: user._id,
                isAdmin: user.isAdmin
            },process.env.JSON_WEB_TOKEN)
            res.cookie("access_token",token,{httpOnly: true}).status(200).json({details: {...others}, isAdmin})
        }
        
    }catch(err){
        res.status(500).json(err)
    }
}

//get all users
export const getUsers = async(req,res)=>{
    try{
        const fetchAllUsers = await Users.find()
        res.status(200).json(fetchAllUsers)
    }catch(err){
        res.status(500).json(err)
    }
}