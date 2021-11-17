const BookModel= require("../models/bookModel.js")
//ASSIGNMENT 1
const createBooks= async function (req, res) {
    var data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})    
}


const bookList= async function (req, res) {
    let allbooks= await BookModel.find().select({bookName:1,authorName:1}) //.count()-this function helps us to count the data in database
    res.send({msg: allbooks})
}

const getBooksInYear = async function(req,res){
    
    let allbooksbyYear = await BookModel.find({year:req.body.year})
    res.send({msg:allbooksbyYear})
}

const getParticularBooks = async function(req,res){
    
    let particularBooks = await BookModel.find(req.body)
    res.send({msg:particularBooks})
}
const getXINRBooks = async function(req,res){
    
    let INRBooks = await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:INRBooks})
}
const getRandomBooks = async function(req,res){
    
    let randomBooks = await BookModel.find({$or : [{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:randomBooks})
}



module.exports.createBooks= createBooks
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks