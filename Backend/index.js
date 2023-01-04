import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

//import routes
import userRouter from "./Routes/Users.js"
import orderRouter from "./Routes/Orders.js" 


const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 5000

//connect to mongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on("err", ()=>console.log(err + "err"))
db.once("open", ()=>console.log("Mongodb connected"))

//user the routers
app.use("/api/Users", userRouter)
app.use("/api/Orders", orderRouter)


app.listen(`${PORT}`, () => {
  console.log('listening on 5000');

});

