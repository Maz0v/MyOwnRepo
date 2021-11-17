const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName: {type:String,required:true},
    authorName: {type:String,required:true},
    category: String, 
    year:{type: Number,
        default: "2021"},
    prices:{
          indianPrice:String,
          europeanPrice: String,
        },
    tags: [ String ],
    totalPages:Number,
    stockAvailable:Boolean

}, {timestamps: true} )

module.exports=mongoose.model('Book',bookSchema)

// String, Number
// Boolean, Object/json, array