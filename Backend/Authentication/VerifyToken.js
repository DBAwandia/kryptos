import jwt from "jsonwebtoken";

const verifyToken =  (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token){
        res.status(400).json({msg: "Error cookie"})
    }else{
    //start with token
    jwt.verify( token, process.env.JSON_WEB_TOKEN, (err, user)=>{
        if(err){
            res.status(401).json({msg: "Error"})
        }else{
            req.user = user
            next()
        }
    })}

}

//verify both user and admin
export const verifyBothUserAndAdmin =  (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        console.log(req)
        if(req.user._id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(402).json({msg: "Error"})
        }
    })
}

//verify only admin
export const verifyOnlyAdmin =  (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin ){
        next()
    }else{
        res.status(403).json({msg: "Only admin"})
    }
    })
}