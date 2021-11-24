const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")



const createmyorder = async function (req, res) {

    let orderdata = req.body;
    let uid = req.body.userId;
    let pid = req.body.productId;
    let user = await userModel.findById(uid);
    let product = await productModel.findById(pid);
    //let isfreeapp = req.headers.isfreeapp
    let appTypeFree = req.isFreeAppUser
    let orderamount
    let date =Date()
    //user validation
    if ( !user) {
        return res.send({ message: "User doesn't exist. Please provide a valid userId" })
    }
    //product validation
    if (!product) {
        return res.send({ message: "User doesn't exist. Please provide a valid productId" })
    }
    //for free app user
    if (appTypeFree) {
        orderamount = 0
    } else {
        orderamount = product.price
    }
    //user balance validation
    if (!appTypeFree && user.balance < product.price) {
        return res.send({ message: "User doesn't have enough balance to purchase the product" })
    }
    let orderdetails={
        userId: uid ,
        productId:pid, 
        amount:  orderamount,
        isFreeAppUser:appTypeFree,
        date:date
    }
    let orderCreated = await orderModel.create(orderdetails)
    if(!appTypeFree){
        {
            await userModel.findOneAndUpdate({_id: uid}, {balance: user.balance - product.price})
        }
    }
    res.send({data: orderCreated})


}
module.exports.createmyorder = createmyorder