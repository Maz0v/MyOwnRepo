const authorModel= require("../models/authorModel")
//ASSIGNMENT 2
const createauthor= async function (req, res) {
    var data= req.body
    if(req.body==req.body.author_id){
        let savedData= await authorModel.create(data)
        res.send({msg: savedData}) 
     }else{
         res.send({msg:"plz enter author_id"})
     }  
    }
module.exports.createauthor= createauthor
