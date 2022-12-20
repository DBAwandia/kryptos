import express from "express"
import dotenv from "dotenv";
import { createServer } from "http";
import {Server} from "socket.io"
import https from "https"
import axios from "axios"
import cors from "cors"

const app = express()
app.use(cors())
dotenv.config()

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
    origin: "*",}
  });


io.on('connection', (socket) => {
    socket.emit('chatmessage', "hello");
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('message', (data) => {
        // socket.emit('chatmessage', "msg");
        console.log(data);
    });
});

// const URL ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h"

const options = {
    hostname: "data.messari.io",
    port: 443,
    path: "/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd",
    method: "GET"
}

setInterval(()=>{

    https.request(options, (res) =>{
   
       //str will convert the data as chunk into a string ..like JSON.parse
       let str = ""
       res.on('data' , (chunk) => (str +=chunk) )
   
       res.on("end", ()=>{
           const prices = JSON.parse(str)
           io.emit("chatmessage" , prices)
       })
   
   }).end()
},7000)


const PORT = process.env.PORT || 5000
 


httpServer.listen(`${PORT}`, () => {
  console.log('listening on 5000');

});

