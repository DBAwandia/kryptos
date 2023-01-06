import Orders from "../Models/Orders.js"
import Users from "../Models/Users.js"


//open orders
export const longOrshort = async (req,res) =>{
    const { 
        short,long,
        markets,amount,
        selectPercentage,
        select,limitAmount } = req.body

    //generate id //uppercase and numbers
    const generatedID = () =>{
        const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
        let res = "";
        for(let i = 0; i < 10; i++) {
            let rnd = Math.floor(Math.random() * list.length);
            res = res + list.charAt(rnd);
        }
        return res;
    }
    let lists = generatedID()

    const savedDetails = Orders({ordersID: lists, short,long,markets,amount,selectPercentage,select,limitAmount})
    try{
        const saveDetails = await savedDetails.save()
        const username = req.body.username
        const usernames = username.trim()

        //update orderID to users model
        await Users.findOneAndUpdate({ username: usernames }, {$push: { orderID: lists }}, {new: true})

        //save changes
        res.status(200).json(saveDetails)

    }catch(err){
        res.status(500).json(err)
    }
}

//edit orders
export const editOrder = async (req , res) =>{
    try{
        const editOrder = await Orders.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} )
        res.status(200).json(editOrder)
    }catch(err){
        res.status(500).json(err)
    }
}


//get all individual orders
export const getAllIndividualOrders = async ( req , res ) =>{
    const QUERY = req.query.QUERY

     try{
        const getUser = await Users.findOne({username: QUERY})
        //get all orderID
        const allOdersID = getUser.orderID

        //get allorderDetails
        const allorderDetails = await Promise.all(allOdersID.map((item) =>{
            return Orders.findOne({ordersID: item})
        }))
        res.status(200).json(allorderDetails)
     }catch(err){
        res.status(500).json(err)
     }
}

//count how many orders each individual made
export const countIndividualOrders = async ( req , res ) =>{
    try{
        const getUser = await Users.findOne({username: req.body.username})
        const allOrderID = getUser.orderID.length

        res.status(200).json(allOrderID)

    }catch(err){
        res.status(500).json(err)
    }
}

//admin track  orders number
export const trackAllOrdersNumber = async ( req , res ) =>{

    try{
        const trackAllOrders = await Orders.countDocuments()
        res.status(200).json(trackAllOrders)
    }catch(err){
        res.status(500).json(err)
    }

}
// admin fetch all orders
export const fetchAllOrders = async ( req , res ) =>{
    try{
        const allOrders = await Orders.find().sort({_id: -1})
        res.status(200).json(allOrders)
    }catch(err){
        res.status(500).json(err)
    }
}