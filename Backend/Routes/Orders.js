import express from "express"
import { getAllIndividualOrders, editOrder, fetchAllOrders, countIndividualOrders, longOrshort, trackAllOrdersNumber, deleteCoinName } from "../Controllers/Orders.js"
const router = express.Router()

//open order
router.post("/longORshort" , longOrshort)

//edit order
router.put("/editorder/:id" , editOrder)

//delete order
router.put("/deleteorder" ,  deleteCoinName)

//edit order
router.get("/individualorderdetails" , getAllIndividualOrders)

//count all orders
router.get("/countindividualorders" , countIndividualOrders)

//count all orders
router.get("/trackorders" , trackAllOrdersNumber )

//fetch all orders
router.get("/fetchallorders" ,  fetchAllOrders)


export default router