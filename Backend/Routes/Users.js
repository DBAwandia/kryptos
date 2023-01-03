import express from "express"
import { verifyBothUserAndAdmin, verifyOnlyAdmin } from "../Authentication/VerifyToken.js"
import { getUsers, loginUser, registerUser } from "../Controllers/Users.js"
const router = express.Router()

//register user
router.post("/register" , registerUser)

//login user
router.post("/login" , loginUser)

//get all users
router.get("/getusers" , verifyBothUserAndAdmin, getUsers)


export default router