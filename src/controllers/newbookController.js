const newBookModel= require("../models/newbookModel")
const authorModel= require("../models/authorModel")
//ASSIGNMENT 1
const createnewBooks= async function (req, res) {
    var data= req.body
    let savedData= await newBookModel.create(data)
    res.send({msg: savedData})    
}

const booksByChetan = async function(req,res){
 let aid= await authorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
 let chetan=await newBookModel.find(aid)
 
 res.send(chetan)
}

const twostates = async function(req,res){
    let up= await newBookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true}).select({price:1,_id:0})
    let aidd= await newBookModel.findOne({name:"Two states"}).select({author_id:1,_id:0})
    let che=await authorModel.find(aidd).select({author_name:1,_id:0})
    
    res.send( {msg:up ,che})
   }

   const books = async function(req,res){
       let idd= await newBookModel.find({price:{$gte:50}&&{$lte:100}}).select({author_id:1,_id:0})
       let author=await authorModel.find(idd.author_id).select({author_name:1,_id:0})
       res.send(author)
   }



module.exports.createnewBooks= createnewBooks
module.exports.booksByChetan= booksByChetan
module.exports.twostates= twostates
module.exports.books=books