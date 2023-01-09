import express from "express"
import { verifyBothUserAndAdmin, verifyOnlyAdmin } from "../Authentication/VerifyToken.js"
import { banUser, getAllUsers, getCoinName, loginUser, registerUser, unBanUser, userWeeklyStats } from "../Controllers/Users.js"
const router = express.Router()

//register user
router.post("/register" , registerUser)

//login user
router.post("/login" , loginUser)

//get all users
router.get("/getusers" , getAllUsers)

//get Monthly users
router.get("/stats" , userWeeklyStats)

//get coin name
router.get("/coinname" , getCoinName)

//ban a user
router.put("/banuser" , banUser)

//unban a user
router.put("/unbanuser" , unBanUser)


export default router