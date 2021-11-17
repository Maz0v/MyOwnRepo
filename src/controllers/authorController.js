const authorModel= require("../models/authorModel")
//ASSIGNMENT 1
const createauthor= async function (req, res) {
    var data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})    
}
module.exports.createauthor= createauthor